export const config = {
  runtime: "nodejs18.x"
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzQJ9wGNem5VCVknJAoIFDY-772GoQDplxQk7WvfKJH6x7jdRDNgQJ-iUlcG3Dpir0wgQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body)
        }
      );

      console.log("GAS response status:", response.status);
    } catch (e) {
      console.error("GAS forwarding error:", e);
    }
    return res.status(200).send("OK");
  }
  return res.status(405).send("Method Not Allowed");
}
