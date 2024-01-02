import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const PlacementForm = () => {
  const [personName, setPersonName] = useState('');
  const [branch, setBranch] = useState('');
  const [experience, setExperience] = useState('');
  const [experience2, setExperience2] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companies, setCompanies] = useState([]);

  // Fetch available companies from Firestore
  const fetchCompanies = async () => {
    const companiesSnapshot = await getDocs(collection(db, 'companies'));
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
      const docRef = await addDoc(collection(db, 'placements'), {
        personName,
        branch,
        experience,
        experience2,
        companyName: selectedCompany,
      });

      console.log('Document written with ID: ', docRef.id);
      // Reset form after submission
      setPersonName('');
      setBranch('');
      setExperience('');
      setExperience2('');
      setSelectedCompany('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
        margin="dense" 
      />
      <TextField
        label="Branch"
        variant="outlined"
        fullWidth
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        margin="dense" 
      />
      <TextField
        label="Experience"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        margin="dense" 
      />
      <TextField
        label="Experience 2"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={experience2}
        onChange={(e) => setExperience2(e.target.value)}
        margin="dense" 
      />
      <Select
        label="Company"
        variant="outlined"
        fullWidth
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        margin="normal"
      >
        {companies.map((company) => (
          <MenuItem key={company.id} value={company.name}>
            {company.name}
          </MenuItem>
        ))}
      </Select>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default PlacementForm;
