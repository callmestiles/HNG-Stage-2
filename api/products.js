// api/products.js
import axios from "axios";

export default async function handler(req, res) {
  const url = "https://api.timbu.cloud/products";
  const { organization_id, Appid, Apikey } = req.query;

  try {
    const response = await axios.get(url, {
      params: { organization_id, Appid, Apikey },
      headers: {
        "Content-Type": "application/json"
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
}
