export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzNgd5wfJpyK2JTmP5rZI-jtH6lNAGpywaQiRo4kUbT35uqCt91Ji1AqTjZCp6XUoUf3Q/exec",
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
