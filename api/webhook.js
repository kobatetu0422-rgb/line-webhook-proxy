export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbztkV4PfNy28LPVwQ7h7M5y5hFY0-6nV57VZ9ImDIkGL31WR7Ld42noonCnJK44cUSRzQ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });
    } catch (e) {
      console.error("GAS forwarding error:", e);
    }
    return res.status(200).send("OK");
  }
  return res.status(405).send("Method Not Allowed");
}
