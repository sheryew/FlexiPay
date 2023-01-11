import Moralis from 'moralis';

const config = {
    domain: process.env.APP_DOMAIN,
    statement: 'Web Login.',
    uri: process.env.NEXTAUTH_URL,
    timeout: 60,
};
export default async function handler(req, res) {
    const { address, chain, network } = req.body;

    await Moralis.start({ apiKey: "sLuijq18lLhMqGitM1tOdWpKc0P1Lm6gUwARatraRyHtDMWbVIUuDlwdBZ67Ps9n" });
    try {
        const message = await Moralis.Auth.requestMessage({
            address,
            chain,
            network,
            ...config,
        });
        console.log("this: ", message)
        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
}