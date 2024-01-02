
import { useState } from 'react';
import CompanyListComponent from './CompanyListComponent';
import PlacementDetailsComponent from './PlacementDetailsComponent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const CompanyWiseExperiences = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company.name);
  };

  return (
    <Container>
      <h1>Company Wise Experiences</h1>
      <Box display="flex" p={2}>
        <Box flex={1} mr={2}>
          <CompanyListComponent onSelectCompany={handleSelectCompany} />
        </Box>
        <Box flex={2}>
          <PlacementDetailsComponent selectedCompany={selectedCompany} />
        </Box>
      </Box>
    </Container>
  );
};

export default CompanyWiseExperiences;
