import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PlacementDetailsComponent = ({ selectedCompany }) => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      const placementsSnapshot = await getDocs(
        query(collection(db, 'placements'), where('companyName', '==', selectedCompany))
      );
      const placementsData = placementsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlacements(placementsData);
    };

    if (selectedCompany) {
      fetchPlacements();
    }
  }, [selectedCompany]);

  return (
    <div>
      <h2>Placement Details for {selectedCompany}</h2>
      {placements.map((placement) => (
        <Card key={placement.id}>
          <CardContent>
            <Typography variant="h6">Person Name: {placement.personName}</Typography>
            <Typography variant="body1">Branch: {placement.branch}</Typography>
            <Typography variant="body1">Experience: {placement.experience}</Typography>
            <Typography variant="body1">Journey: {placement.experience2}</Typography>
            {/* Add other placement details as needed */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlacementDetailsComponent;
