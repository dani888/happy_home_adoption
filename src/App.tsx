import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DogsPage from "./pages/DogsPage";
import CatsPage from "./pages/CatsPage";
import PetDetailPage from "./pages/PetDetailPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/pet/:id" element={<PetDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
