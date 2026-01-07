import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/home";
import { PrimitivesPage } from "./pages/primitives";
import { ComponentsPage } from "./pages/components";
import { TokensPage } from "./pages/tokens";
import { AssetsPage } from "./pages/assets";

export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/primitives" element={<PrimitivesPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
