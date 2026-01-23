export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzi6cqNsvLlQ2HS3JqG-6XKGKcYCexfi7xGBnh_6gKen2_YzK7gr8T7P6-KVV61hjLB/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        // ★ LINEから届いた本物のJSONをそのままGASへ渡す
        body: "payload=" + encodeURIComponent(JSON.stringify(req.body)),
        redirect: "follow"
      }
    );
  } catch (e) {
    console.error("GAS forwarding error:", e);
  }

  // LINEには常に200を返す（Webhook要件）
  return res.status(200).send("OK");
}
