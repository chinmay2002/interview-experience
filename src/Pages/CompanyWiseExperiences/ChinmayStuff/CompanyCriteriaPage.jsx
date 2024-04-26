import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { Typography } from "@mui/material";

const CompanyCriteriaPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [ctc, setCtc] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [eligibilityCriteria, setEligibilityCriteria] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSaveCriteria = async () => {
    // Add data to Firestore
    try {
      await addDoc(collection(db, "criteria"), {
        date: selectedDate,
        ctc,
        jobRole,
        jobLocation,
        eligibilityCriteria,
        companyName,
      });

      // Clear form fields after saving
      setSelectedDate("");
      setCtc("");
      setJobRole("");
      setJobLocation("");
      setEligibilityCriteria("");
      setCompanyName("");
    } catch (error) {
      console.error("Error adding criteria: ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div style={{ width: "80%", maxWidth: "400px", textAlign: "center" }}>
        <Typography fontSize={24} mb={4}>
          Company Criteria Page
        </Typography>
        <TextField
          label="Select Date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Company Name"
          variant="outlined"
          fullWidth
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="CTC"
          variant="outlined"
          fullWidth
          value={ctc}
          onChange={(e) => setCtc(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Job Role"
          variant="outlined"
          fullWidth
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Job Location"
          variant="outlined"
          fullWidth
          value={jobLocation}
          onChange={(e) => setJobLocation(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Eligibility Criteria"
          variant="outlined"
          fullWidth
          value={eligibilityCriteria}
          onChange={(e) => setEligibilityCriteria(e.target.value)}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveCriteria}
          style={{
            backgroundColor: "black",
            color: "white",
            marginTop: "20px",
          }}
        >
          Save Criteria
        </Button>
      </div>
    </div>
  );
};

export default CompanyCriteriaPage;
