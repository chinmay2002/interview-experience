import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form...');
  
    try {
      const docRef = await addDoc(collection(db, 'companies'), {
        name: companyName,
      });
  
      console.log('Document written with ID: ', docRef.id);
      // Reset form after submission
      setCompanyName('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Company Name"
        variant="outlined"
        fullWidth
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CompanyForm;

