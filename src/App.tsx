import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/home";
import { PrimitivesPage } from "./pages/primitives";
import { ComponentsPage } from "./pages/components";
import { TokensPage } from "./pages/tokens";
import { AssetsPage } from "./pages/assets";
import { ButtonPage } from "./pages/primitives/button";
import { TypographyPage } from "./pages/primitives/typography";
import { SpinnerPage } from "./pages/primitives/spinner";
import { ButtonGroupPage } from "./pages/components/button-group";
import { CardPage } from "./pages/components/card";
import { StatCardPage } from "./pages/components/stat-card";
import { LoadingOverlayPage } from "./pages/components/loading-overlay";
import { HeaderPage } from "./pages/components/header";
import { ColorsPage } from "./pages/tokens/colors";
import { SpacingPage } from "./pages/tokens/spacing";
import { TypographyPage as TypographyTokenPage } from "./pages/tokens/typography";

export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/primitives" element={<PrimitivesPage />} />
          <Route path="/primitives/button" element={<ButtonPage />} />
          <Route path="/primitives/typography" element={<TypographyPage />} />
          <Route path="/primitives/spinner" element={<SpinnerPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route
            path="/components/button-group"
            element={<ButtonGroupPage />}
          />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/components/stat-card" element={<StatCardPage />} />
          <Route
            path="/components/loading-overlay"
            element={<LoadingOverlayPage />}
          />
          <Route path="/components/header" element={<HeaderPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/tokens/colors" element={<ColorsPage />} />
          <Route path="/tokens/spacing" element={<SpacingPage />} />
          <Route path="/tokens/typography" element={<TypographyTokenPage />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
