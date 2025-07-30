import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.post("https://sum.su.or.kr:8888/Ajax/Bible/Body", req.body, {
      headers: { "Content-Type": "application/json" }
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
