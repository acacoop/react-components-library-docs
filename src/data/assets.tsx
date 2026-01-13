import { Image } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AssetDoc {
  name: string;
  path: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  parentPath: string;
  parentName: string;
  importCode: string;
}

export interface AssetInfo {
  id: string;
  name: string;
  description: string;
  codePath: string;
  recommendedSizes: string[];
  usage: "light" | "dark" | "both";
}

export const assetsDoc: AssetDoc = {
  name: "Assets",
  path: "/assets",
  description:
    "Assets de marca para uso en todos los proyectos ACA. Incluye logos en diferentes formatos y variantes para fondos claros y oscuros.",
  icon: Image,
  accentColor: "#282D86",
  parentPath: "/",
  parentName: "Home",
  importCode: `import { brandAssets } from '@acacoop/react-components-library';`,
};

export const assetsList: AssetInfo[] = [
  {
    id: "logoIcon",
    name: "Logo Icon",
    description:
      "Logo icono cuadrado con las iniciales ACA. Ideal para favicons, avatars e iconos en espacios pequeños.",
    codePath: "brandAssets.logoIcon",
    recommendedSizes: [
      "Favicon: 16x16 - 32x32px",
      "Avatar: 24x24 - 48x48px",
      "Icono: 20x20 - 40x40px",
    ],
    usage: "both",
  },
  {
    id: "logoFullDark",
    name: "Logo Full Dark",
    description:
      "Logo completo versión oscura (azul). Para usar sobre fondos claros, neutros o en aplicaciones con tema claro.",
    codePath: "brandAssets.logoFullDark",
    recommendedSizes: [
      "Header: 120x40 - 200x67px",
      "Footer: 100x33 - 150x50px",
      "Mínimo: 80x27px",
    ],
    usage: "light",
  },
  {
    id: "logoFullLight",
    name: "Logo Full Light",
    description:
      "Logo completo versión clara (blanco). Para usar sobre fondos oscuros, coloridos o en aplicaciones con tema oscuro.",
    codePath: "brandAssets.logoFullLight",
    recommendedSizes: [
      "Header: 120x40 - 200x67px",
      "Footer: 100x33 - 150x50px",
      "Mínimo: 80x27px",
    ],
    usage: "dark",
  },
];

export const usageExamples = {
  imgTag: `import { brandAssets } from '@acacoop/react-components-library';

// En img tags - siempre usar object-contain para mantener proporciones
<img
  src={brandAssets.logoIcon}
  alt="ACA Logo"
  className="w-8 h-8 object-contain"
/>

<img
  src={brandAssets.logoFullDark}
  alt="ACA Logo"
  className="h-10 object-contain"
/>`,

  backgroundImage: `// Como background-image
<div style={{
  backgroundImage: \`url(\${brandAssets.logoIcon})\`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}} />`,

  favicon: `<!-- Favicon en HTML -->
<link rel="icon" type="image/png" sizes="32x32" href={brandAssets.logoIcon}>`,

  responsiveLogo: `// Logo responsive en header
<img
  src={brandAssets.logoFullDark}
  alt="ACA Logo"
  className="h-8 md:h-10 lg:h-12 object-contain"
/>`,
};

export const guidelines = {
  do: [
    "Usar object-contain para mantener proporciones",
    "Usar logoIcon para favicons (16-32px) y avatars",
    "Usar logoFullDark sobre fondos claros y neutros",
    "Usar logoFullLight sobre fondos oscuros y coloridos",
    "Definir altura fija y ancho automático para logos horizontales",
    "Usar tamaños mínimos recomendados para legibilidad",
  ],
  dont: [
    "Forzar tamaños fijos (width + height) que deformen la imagen",
    "Usar object-cover que recorta la imagen",
    "Distorsionar o estirar los logos",
    "Agregar efectos o sombras adicionales",
    "Modificar los colores del logo",
    "Usar logos en tamaños muy pequeños (< 16px)",
  ],
};
