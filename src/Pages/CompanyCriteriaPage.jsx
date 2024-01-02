// CompanyCriteriaPage.jsx
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebaseConfig';

const CompanyCriteriaPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [criteria, setCriteria] = useState([]);
  const [selectionMessage, setSelectionMessage] = useState('');
  const [link, setLink] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSaveCriteria = async () => {
    // Add data to Firestore
    try {
      await addDoc(collection(db, 'criteria'), {
        date: selectedDate,
        selectionMessage,
        link,
        companyName,
      });

      // Clear form fields after saving
      setSelectedDate('');
      setSelectionMessage('');
      setLink('');
      setCompanyName('');
    } catch (error) {
      console.error('Error adding criteria: ', error);
    }
  };

  return (
    <div>
      <h1>Company Criteria Page</h1>
      <TextField
        label="Select Date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Selection Message"
        variant="outlined"
        fullWidth
        value={selectionMessage}
        onChange={(e) => setSelectionMessage(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Link"
        variant="outlined"
        fullWidth
        value={link}
        onChange={(e) => setLink(e.target.value)}
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
      <Button variant="contained" color="primary" onClick={handleSaveCriteria}>
        Save Criteria
      </Button>
    </div>
  );
};

export default CompanyCriteriaPage;
