import { Suspense, lazy } from "react";
import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
// import PortfolioPage from "./pages/PortfolioPage";
// import PortfoliosPage from "./pages/PortfoliosPage";

// import PostPage from "./pages/PostPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PortfoliosPage = lazy(() => import("./pages/PortfoliosPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServisesPage = lazy(() => import("./pages/ServisesPage"));
const AboutPartners = lazy(() => import("./pages/AboutPartners"));
const AboutTeam = lazy(() => import("./pages/AboutTeam"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const PostPage = lazy(() => import("./pages/PostPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
              <Route path="portfolios" element={<PortfoliosPage />} />
              <Route path="posts" element={<PostsPage />} />
              <Route path="posts/:postId" element={<PostPage />} />
              <Route
                path="portfolios/:portfolioId"
                element={<PortfolioPage />}
              />
              <Route path="services" element={<ServisesPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
