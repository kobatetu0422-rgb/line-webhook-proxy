export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyA1z0rXrdvHYKAo8EdbBq9_jasQulNW3KH6TkAqgQzZPczUshVQwZ2VCO3dxFkYi8xaQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: "payload=" + encodeURIComponent(JSON.stringify(req.body)),
          redirect: "follow"
        }
      );
    } catch (e) {
      console.error("GAS forwarding error:", e);
    }
    return res.status(200).send("OK");
  }

  return res.status(405).send("Method Not Allowed");
}
