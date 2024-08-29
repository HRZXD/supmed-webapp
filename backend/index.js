const express = require("express");
const cors = require("cors");
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} = require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpiHRrWT3HmhvhMcUraX09uEXSTifQ1oI",
  authDomain: "supmed-webapp-5f5b8.firebaseapp.com",
  projectId: "supmed-webapp-5f5b8",
  storageBucket: "supmed-webapp-5f5b8.appspot.com",
  messagingSenderId: "309991402629",
  appId: "1:309991402629:web:fcb57e7e8a83ebb1c48dec",
  measurementId: "G-VKTGRQ43RJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create an Express app
const server = express();
server.use(cors());
server.use(express.json());

server.post("/login", async (req, res) => {
  const { idCard, password } = req.body;

  try {
    // Query Firestore for a document matching the ID card and password
    const doctorsRef = collection(db, "doctors");
    const q = query(
      doctorsRef,
      where("idCard", "==", idCard),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      res
        .status(200)
        .send({
          message: "Login successful",
          doctor: querySnapshot.docs[0].data(),
        });
      server.get("/user", async (req, res) => {
        try {
          const doctorsCollection = collection(db, "doctors");
          const snapshot = await doctorsCollection
            .where("idCard", "==", idCard)
            .where("password", "==", password)
            .get();

          if (snapshot.empty) {
            return res
              .status(404)
              .json({ error: "Invalid ID Card or Password" });
          }

          const userDoc = snapshot.docs[0].data();
          return res.status(200).json({ username: userDoc.username });
        } catch (error) {
          console.error("Error fetching user:", error);
          return res
            .status(500)
            .json({ error: "An error occurred while fetching the user" });
        }
      });
    } else {
      res.status(401).send({ message: "Invalid ID Card or password" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error });
  }
});

server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
