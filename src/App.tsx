import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ComponentsListPage } from "./pages/components";
import { ButtonPage } from "./pages/components/ButtonPage";
import { ConstantsPage } from "./pages/constants";
import { HomePage } from "./pages/home";

export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/components" element={<ComponentsListPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/constants" element={<ConstantsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
