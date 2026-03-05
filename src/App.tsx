import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/Actions';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import LegalNotice from './pages/LegalNotice';
import Merci from './pages/Merci';
import SponsorStories from './pages/SponsorStories';
import OrphanStories from './pages/OrphanStories';
import Testimonials from './pages/Testimonials';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/don" element={<Donation />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="/partager-vos-histoires" element={<SponsorStories />} />
          <Route path="/recits-dorphelins-et-orphelines" element={<OrphanStories />} />
          <Route path="/temoignages" element={<Testimonials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
