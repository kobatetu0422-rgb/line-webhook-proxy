export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxLZKFeQ0Ujj9LzHIF3n8wno89VUDCDszljQYPktJI4FiIEmZpnNaH2tU_A2S3nkn3Y7A/exec", {
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
