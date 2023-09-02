// server.js
const express = require("express");
const fileUpload = require("express-fileupload");
const PDFParser = require("pdf-parse");
const { MongoClient } = require("mongodb"); // Import MongoClient
const app = express();
const cors = require("cors"); // Import the cors package
// const multer = require("multer");
const port = 5000;

// Enable file uploads
app.use(fileUpload());
app.use(cors()); // Enable CORS

// MongoDB connection URI
// k6Q4sjTdJNnjQIRA
const mongoURI =
  "mongodb+srv://hall6:k6Q4sjTdJNnjQIRA@cluster0.au7bpfc.mongodb.net/?retryWrites=true&w=majority"; // Update with your MongoDB URI
const dbName = "resumesdb"; // Update with your database name

// Function to insert extracted text into MongoDB
async function insertTextIntoMongoDB(
  text,
  education,
  skills,
  projects,
  experience,
  achievements,
  courses,
  PORs,
  fileName
) {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("resumes");

    const document = {
      text: text,
      education: education,
      skills: skills,
      projects: projects,
      experience: experience,
      achievements: achievements,
      courses: courses,
      PORs: PORs,
      fileName: fileName,
    };

    await collection.insertOne(document);
  } catch (error) {
    console.error("Error inserting text into MongoDB:", error);
  } finally {
    client.close();
  }
}

const { spawn } = require("child_process");

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
      const extractedText = text.split("\n");

      const resumeData = '"' + extractedText.toString() + '"';
      // console.log(resumeData);
      const pythonProcess = spawn("python", ["script.py", resumeData]);
      // Capture the JSON output of the Python script
      let extractedData = "";

      pythonProcess.stdout.on("data", (data) => {
        extractedData += data.toString();
      });

      pythonProcess.on("close", (code) => {
        if (code === 0) {
          try {
            var parsedData = JSON.parse(extractedData);
            parsedText = parsedData;
            res.status(200).send(parsedData);
            // Insert the extracted text into MongoDB
            insertTextIntoMongoDB(
              extractedText,
              parsedData["qualifications"],
              parsedData["skills"],
              parsedData["projects"],
              parsedData["experience"],
              parsedData["achievements"],
              parsedData["courses"],
              parsedData["positions of responsibility"],
              resume.name
            );
          } catch (error) {
            console.error("Error parsing JSON data:", error);
            res.status(500).send("Error processing the file.");
          }
        } else {
          console.error("Python script error:", extractedData);
          res.status(500).send("Error processing the file.");
        }
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error processing the file.");
    });
});

app.post("/filter", async (req, res) => {
  const keyword = req.body.filterword;

  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("resumes");

    // Find documents that contain the keyword in their text
    const query = { text: { $regex: keyword, $options: "i" } };
    const cursor = collection.find(query);

    const filteredTexts = await cursor.toArray();

    res.status(200).json(filteredTexts);
  } catch (error) {
    console.error("Error filtering resumes:", error);
    res.status(500).send("Error filtering resumes.");
  } finally {
    client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/get", async (req, res) => {
  const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("resumes");

    // Find documents that contain the keyword in their text
    const cursor = collection.find();

    const filteredTexts = await cursor.toArray();

    res.status(200).json(filteredTexts);
  } catch (error) {
    console.error("Error filtering resumes:", error);
    res.status(500).send("Error filtering resumes.");
  } finally {
    client.close();
  }
});
