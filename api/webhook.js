export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyA1z0rXrdvHYKAo8EdbBq9_jasQulNW3KH6TkAqgQzZPczUshVQwZ2VCO3dxFkYi8xaQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "payload=TEST_FROM_VERCEL",
      }
    );

    console.log("FETCH STATUS:", response.status);
  } catch (e) {
    console.error("FETCH ERROR:", e);
  }

  return res.status(200).send("TEST SENT");
}
