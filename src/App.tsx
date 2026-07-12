import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import DogsPage from "./pages/DogsPage";
import CatsPage from "./pages/CatsPage";
import PetDetailPage from "./pages/PetDetailPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/pet/:id" element={<PetDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
