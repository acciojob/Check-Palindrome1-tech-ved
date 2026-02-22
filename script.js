const express = require("express");
const app = express();

app.use(express.json());

function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let rev = clean.split("").reverse().join("");
  return clean === rev;
}

app.post("/palindromechecker", (req, res) => {
  const { str } = req.body;

  const result = isPalindrome(str);
  res.status(200).json({ message: result });
});

module.exports = app;