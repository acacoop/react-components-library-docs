/**
 * Datos de documentación para la página Home
 */
import { COLORS } from "@acacoop/react-components-library";
import { Package, Layers, Palette, Image } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StructureItem {
  id: string;
  letter: string;
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  path: string;
}

export interface QuickLinkItem {
  id: string;
  title: string;
  description: string;
  path: string;
  hoverColor: string;
}

export const structureItems: StructureItem[] = [
  {
    id: "primitives",
    letter: "P",
    title: "Primitivos",
    description: "Bloques de construcción: Botones, Tipografía, Spinners",
    color: COLORS.primary,
    icon: Package,
    path: "/primitives",
  },
  {
    id: "components",
    letter: "C",
    title: "Componentes",
    description: "Componentes compuestos: Tarjetas, Estadísticas, Headers",
    color: COLORS.secondary,
    icon: Layers,
    path: "/components",
  },
  {
    id: "tokens",
    letter: "T",
    title: "Tokens",
    description: "Tokens de diseño: colores, espaciado, tipografía",
    color: COLORS.success,
    icon: Palette,
    path: "/tokens",
  },
  {
    id: "assets",
    letter: "A",
    title: "Assets",
    description: "Logos y assets de marca de ACA",
    color: COLORS.info,
    icon: Image,
    path: "/assets",
  },
];

export const quickLinks: QuickLinkItem[] = [
  {
    id: "primitives",
    title: "Primitivos",
    description:
      "Botones, Tipografía y Spinner — bloques de construcción básicos",
    path: "/primitives",
    hoverColor: COLORS.primary,
  },
  {
    id: "components",
    title: "Componentes",
    description:
      "Card, StatCard, Header y ButtonGroup — componentes compuestos listos para usar",
    path: "/components",
    hoverColor: COLORS.secondary,
  },
  {
    id: "tokens",
    title: "Tokens",
    description:
      "Colores, espaciado, tipografía — tokens de diseño para consistencia visual",
    path: "/tokens",
    hoverColor: COLORS.success,
  },
  {
    id: "assets",
    title: "Assets",
    description: "Logos y recursos de marca de ACA",
    path: "/assets",
    hoverColor: COLORS.info,
  },
];

export const installationSteps = [
  {
    step: 1,
    title: "Configurar npm registry (solo para paquetes privados)",
    description: "Crear .npmrc en la raíz del proyecto:",
    code: `@acacoop:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}`,
    language: "bash",
  },
  {
    step: 2,
    title: "Instalar el paquete",
    code: "npm install @acacoop/react-components-library",
    language: "bash",
  },
  {
    step: 3,
    title: "Usar los componentes",
    code: `// Importar todo desde el paquete principal
import { Button, Card, COLORS, brandAssets } from '@acacoop/react-components-library';

// O importar desde submódulos específicos
import { Button, Spinner } from '@acacoop/react-components-library/primitives';
import { Card, StatCard, Header } from '@acacoop/react-components-library/components';
import { colors, spacing } from '@acacoop/react-components-library/tokens';`,
    language: "tsx",
  },
];

export const heroData = {
  version: "v0.2.0",
  versionLabel: "Beta",
  title: "Desarrollá más rápido con",
  subtitle: "ACA Components",
  description:
    "Sistema de diseño unificado para aplicaciones ACA. Componentes reutilizables, tipados y optimizados para desarrollo en equipo.",
  highlight: "Consistencia y eficiencia en cada proyecto.",
};
