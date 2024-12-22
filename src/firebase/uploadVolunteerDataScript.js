// Import Firebase configuration and Firestore functions
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const {volunteerData} = require("../components/about/VolunteerData.js"); // Adjust path if necessary
const { firebaseConfig } = require("./src/config/firebaseConfig.js");


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload volunteer data
const uploadVolunteerData = async () => {
  try {
    console.log("Starting data upload...");

    for (const data of volunteerData) {
      const docRef = await addDoc(collection(db, "volunteerData"), data); // Specify Firestore collection
      console.log(`Document added with ID: ${docRef.id}`);
    }

    console.log("All data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
};

// Run the upload function
uploadVolunteerData();
