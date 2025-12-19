export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwBK3e3tTLGjkAUYo7AUz1wObqx5-THp-rZp05xwJVlqX54p57iMS7GuYNkfFXsgP6jJg/exec", {
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
