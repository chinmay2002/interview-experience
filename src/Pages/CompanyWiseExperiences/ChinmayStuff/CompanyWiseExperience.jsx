import { useState } from "react";
import CompanyListComponent from "./CompanyListComponent";
import PlacementDetailsComponent from "./PlacementDetailsComponent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const CompanyWiseExperiences = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company.name);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: 2, // Adjust margin top as needed
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            textTransform: "uppercase",
            fontWeight: "Bold",
            color: "#313866",
          }}
        >
          Ace Your Campus Interview
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "1rem", color: "#313866" }}>
          Find <span style={{ fontWeight: "Bold" }}>Bharati Vidhyapeeth's</span>{" "}
          exclusive interview experiences
        </Typography>
      </Box>

      <Box display="flex" p={2}>
        <Box flex={1} mr={2}>
          <CompanyListComponent onSelectCompany={handleSelectCompany} />
        </Box>
      </Box>
      <Box flex={2}>
        <PlacementDetailsComponent selectedCompany={selectedCompany} />
      </Box>
    </Container>
  );
};

export default CompanyWiseExperiences;
