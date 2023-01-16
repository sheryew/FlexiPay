// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "abdk-libraries-solidity/ABDKMath64x64.sol";

contract LoanBank {

    //Individual Loan
    struct IndivLoan {
        //NFT Token Address
        address tokenAddress;
        //NFT Token Owner
        address tokenOwner;
        //Cuurent lender
        address lender;
        //NFT token id
        uint256 tokenId;
        //Current Max Loan
        uint256 loanAmount;
        //Timestamp of loan completion
        uint256 loanCompleteTime;
        //Loan Amount with Interest Rate
        uint256 loanAmtWithInterest;
    }

    //Number of loans issued
    uint256 public numLoans;
    mapping(uint256 => IndivLoan) public nftLoans;

    // Loan Creation event with indexed NFT owner
    event LoanCreated(
        uint256 id,
        address indexed owner,
        address tokenAddress,
        uint256 tokenId,
        uint256 loanAmount,
        uint256 loanCompleteTime
    );

    event LoanDrawn(uint256 id);
    event LoanRepayed(uint256 id, uint256 remainingBalance);
    event LoanUnderwritten(uint256 id, address lender);


    function createLoan(
        address _tokenAddress,
        uint256 _tokenid,
        uint256 _loanAmount,
        uint256 _loanCompleteTime,
        uint256 _interestRate
    ) external returns (uint256) {
        require(_loanCompleteTime > block.timestamp, "Can't create loan in past");

        uint256 loanId = ++numLoans;

        // Transfer NFT from owner to contract
        IERC721(_tokenAddress).transferFrom(msg.sender, address(this), _tokenid);

        //Create Loan
        nftLoans[loanId].tokenAddress = _tokenAddress;
        nftLoans[loanId].tokenOwner = msg.sender;
        nftLoans[loanId].tokenId = _tokenid;
        nftLoans[loanId].loanAmount = _loanAmount;
        nftLoans[loanId].loanCompleteTime = _loanCompleteTime;
        nftLoans[loanId].loanAmtWithInterest = (ABDKMath64x64.mulu((1 + ABDKMath64x64.divu(_interestRate, 100)), _loanAmount)) * 10**17;

        emit LoanCreated(
            loanId,
            msg.sender,
            _tokenAddress,
            _tokenid,
            _loanAmount,
            _loanCompleteTime
        );
        this.underwriteLoan(loanId);
        return loanId;
    }

    function underwriteLoan(uint256 _loanId) external payable {
        IndivLoan storage loan = nftLoans[_loanId];
        address pandaBankAddress = 0xF816E6Cff0B5A0D39C4587c66D8A934BcD79BC68;
        loan.lender = pandaBankAddress;
        emit LoanUnderwritten(_loanId, msg.sender);
    }

    function repayLoan(uint256 _loanId) external payable {
        IndivLoan storage loan = nftLoans[_loanId];
        require(loan.loanCompleteTime >= block.timestamp, "Can't repay expired loan.");

        (bool sent, ) = payable(loan.lender).call{value: (msg.value)}("");
        require(sent, "Failed to repay loan.");
        nftLoans[_loanId].loanAmtWithInterest = loan.loanAmtWithInterest - msg.value;
        if (nftLoans[_loanId].loanAmtWithInterest <= 0) {
            IERC721(loan.tokenAddress).transferFrom(address(this), loan.tokenOwner, loan.tokenId);
            loan.tokenOwner = address(0);
        }

        emit LoanRepayed(_loanId, nftLoans[_loanId].loanAmtWithInterest);
    }

    function get() public view returns (uint) {
        return numLoans;
    }

    function seizeNFT() external payable {
        uint256 totalLoan = this.get();
        require(totalLoan > 0, "No available loans to seize");
        for (uint256 j = 1; j < totalLoan + 1; j++) {
            IndivLoan storage loan = nftLoans[j];
            require(msg.sender != loan.tokenOwner, "Borrower can't stake!");
            if (loan.tokenOwner != address(0) && loan.loanCompleteTime <= block.timestamp && loan.loanAmtWithInterest > 0) {
                IERC721(loan.tokenAddress).transferFrom(address(this), loan.lender, loan.tokenId);
                loan.tokenOwner = address(0);
            }
        }
    }
}