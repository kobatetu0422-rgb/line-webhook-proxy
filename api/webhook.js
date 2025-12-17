export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxw643dYYs1-3SzIkPmZXrA7YDzFwJurGS5JO6AHWrsRT3or5zcp6jBdlhRJn0EQHsIzg/exec", {
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
