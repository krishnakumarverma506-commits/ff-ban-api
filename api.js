export default async function handler(req, res) {
    const uid = req.query.uid;

    if (!uid) {
        return res.status(400).json({ error: "UID missing" });
    }

    try {
        const response = await fetch(`https://amin-team-api.vercel.app/check_banned?player_id=${uid}`);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ error: "API failed" });
    }
}
