import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CompanyForm from "../src/Pages/CompanyWiseExperiences/ChinmayStuff/CompanyForm";
import CompanyWiseExperiences from "../src/Pages/CompanyWiseExperiences/ChinmayStuff/CompanyWiseExperience";
import PlacementForm from "../src/Pages/CompanyWiseExperiences/ChinmayStuff/PlacementForm";
import CompanyCriteriaPage from "../src/Pages/CompanyWiseExperiences/ChinmayStuff/CompanyCriteriaPage";
import CriteriaDetailsPage from "../src/Pages/CompanyWiseExperiences/ChinmayStuff/CriteriaDetailsPage";
import LandingPage from "../src/Screens/LandingPage/LandingPage";
// Company Overview Page Dependencies:
import CompanyOverview from "./Pages/CompanyOverview/CompanyOverview";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <Router>
      {" "}
      <NavBar />
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/CompanyWiseExperiences"
          element={<CompanyWiseExperiences />}
        />
        <Route path="/companyform" element={<CompanyForm />} />
        <Route path="/placementform" element={<PlacementForm />} />
        <Route path="/companycriteriaform" element={<CompanyCriteriaPage />} />
        <Route path="/companydetails" element={<CriteriaDetailsPage />} />
        <Route path="/companyoverview/:company" element={<CompanyOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
