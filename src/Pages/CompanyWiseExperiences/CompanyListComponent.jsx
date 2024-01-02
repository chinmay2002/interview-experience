
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CompanyListComponent = ({ onSelectCompany }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesSnapshot = await getDocs(collection(db, 'companies'));
      const companiesData = companiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCompanies(companiesData);
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <h2>Available Companies</h2>
      {companies.map((company) => (
        <Card key={company.id} onClick={() => onSelectCompany(company)}>
          <CardContent>
            <Typography variant="h5">{company.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CompanyListComponent;
