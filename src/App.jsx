import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CompanyForm from './Pages/CompanyForm';
import CompanyWiseExperiences from './Pages/CompanyWiseExperiences/CompanyWiseExperience';
import PlacementForm from './Pages/PlacementForm';
import CompanyCriteriaPage from './Pages/CompanyCriteriaPage';
import CriteriaDetailsPage from './Pages/CriteriaDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyWiseExperiences />} />
        <Route path="/companyform" element={<CompanyForm />} />
        <Route path="/placementform" element={<PlacementForm />} />
        <Route path="/companycriteriaform" element={<CompanyCriteriaPage />} />
        <Route path="/companydetails" element={<CriteriaDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
