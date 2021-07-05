const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/fetchSelfie", (req, res) => {
	res.status(200).set('Content-Type', 'image/jpeg').sendFile("images/selfie.jpg", { root: __dirname });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});