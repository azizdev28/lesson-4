import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Portfolios = lazy(() => import("./pages/Portfolios"));
const ServisesPage = lazy(() => import("./pages/ServisesPage"));
const AboutPartners = lazy(() => import("./pages/AboutPartners"));
const AboutTeam = lazy(() => import("./pages/AboutTeam"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about/">
              <Route index element={<AboutPage />} />
              <Route path="partners" element={<AboutPartners />} />
              <Route path="team" element={<AboutTeam />} />
            </Route>
            <Route path="portfolios" element={<Portfolios />} />
            <Route path="services" element={<ServisesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
