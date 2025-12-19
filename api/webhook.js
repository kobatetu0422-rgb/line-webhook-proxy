export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxA2d5l8l892mIUKyQGF6UmkV9E29PlCNcM01vL1End3lhFeV5bXRexcjkH7QqeadkyXQ/exec",
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
