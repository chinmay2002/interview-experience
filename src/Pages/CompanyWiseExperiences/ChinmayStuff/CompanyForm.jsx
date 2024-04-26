import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Box, TextField, Button, Typography } from "@mui/material";

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form...");

    try {
      const docRef = await addDoc(collection(db, "companies"), {
        name: companyName,
      });

      console.log("Document written with ID: ", docRef.id);
      // Reset form after submission
      setCompanyName("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      pt={20}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "300px", // Adjusted width of the form
        margin: "0 auto", // Centering the form horizontally
      }}
    >
      <Typography variant="h5" gutterBottom>
        Enter Company Name
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="companyName"
        label="Company Name"
        name="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: "50%",  backgroundColor: "black", color: "white", }} // Adjusted width of the button
      >
        Submit
      </Button>
    </Box>
  );
};

export default CompanyForm;
