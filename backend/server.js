// server.js
const express = require("express");
const fileUpload = require("express-fileupload");
const PDFParser = require("pdf-parse");
const app = express();
const port = 5000;

// Enable file uploads
app.use(fileUpload());

// Temporary storage for uploaded PDFs
const uploadDirectory = __dirname + "/uploads/";

app.post("/upload", (req, res) => {
  if (!req.files || !req.files.resume) {
    return res.status(400).send("No file uploaded.");
  }

  const resume = req.files.resume;

  console.log("Received uploaded file:", resume.name); // Debug: Log the received file name

  // Extract text from PDF
  PDFParser(resume.data)
    .then((data) => {
      const text = data.text;

      // You can process the extracted text or save it to a database here
      // For this example, we'll store it in an array
      const extractedTexts = text.split("\n"); // Assuming each line is a separate entry
      console.log("Extracted texts:", extractedTexts); // Debug: Log the extracted texts
      res.status(200).json(extractedTexts);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error processing the file.");
    });
});

app.post("/filter", (req, res) => {
  const { keyword } = req.body;

  // Assuming you have an array of extracted texts
  // Filter the texts based on the keyword
  // In a real application, you would use a database query here
  const filteredTexts = extractedTexts.filter((text) =>
    text.toLowerCase().includes(keyword.toLowerCase())
  );

  res.status(200).json(filteredTexts);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
