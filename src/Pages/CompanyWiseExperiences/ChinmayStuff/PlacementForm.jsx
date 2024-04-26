import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography'
const PlacementForm = () => {
  const [personName, setPersonName] = useState("");
  const [branch, setBranch] = useState("");
  const [experience, setExperience] = useState("");
  const [experience2, setExperience2] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companies, setCompanies] = useState([]);

  // Fetch available companies from Firestore
  const fetchCompanies = async () => {
    const companiesSnapshot = await getDocs(collection(db, "companies"));
    const companiesData = companiesSnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));
    setCompanies(companiesData);
  };

  // Fetch companies on component mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add data to Firestore
    try {
      const docRef = await addDoc(collection(db, "placements"), {
        personName,
        branch,
        experience,
        experience2,
        companyName: selectedCompany,
      });

      console.log("Document written with ID: ", docRef.id);
      // Reset form after submission
      setPersonName("");
      setBranch("");
      setExperience("");
      setExperience2("");
      setSelectedCompany("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
     
      <form onSubmit={handleSubmit} style={{ width: "40%", justifyContent:"center",
      alignItems:"center",alignSelf: "center" }} 
      >
         <Box textAlign="center" marginBottom={2}>
          <Typography variant="h5">Add Your Experience</Typography>
        </Box>
        <FormControl fullWidth margin="dense">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            label="Branch"
            variant="outlined"
            fullWidth
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            label="Please add about pre-screening rounds"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <TextField
            label="Please add about Interview-Experience"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={experience2}
            onChange={(e) => setExperience2(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
      <InputLabel id="select-company-placeholder">Select Company</InputLabel>
      <Select
        labelId="select-company-placeholder"
        variant="outlined"
        fullWidth
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        label="Select Company" // This is where we set the label prop for the placeholder
      >
        <MenuItem value="">Select Company</MenuItem> {/* Placeholder */}
        {companies.map((company) => (
          <MenuItem key={company.id} value={company.name}>
            {company.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        <FormControl fullWidth margin="normal" style={{ alignSelf: "center", justifyContent:"center",
      alignItems:"center" }}>
      <Button type="submit" variant="contained" style={{ backgroundColor: "black", color: "white", width: "25%" }}>
  Submit
</Button>
    </FormControl>
      </form>
    </Box>
  );
};

export default PlacementForm;
