
export default async function handler(req, res) {
  const response = await fetch("https://sum.su.or.kr:8888/Ajax/Bible/Body", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.text();
  res.status(200).send(data);
}
