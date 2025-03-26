export default async function handler(req, res) {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzu0BMWs416ubQ8eH3g3bcY6eqkWjL0-uHldfGIkOce21YmSAPCT18CicAqQ5VyvxKF2g/exec", {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(data);
    } catch (error) {
      console.error("Error en el proxy:", error);
      res.status(500).json({ error: "Error interno del proxy" });
    }
  }