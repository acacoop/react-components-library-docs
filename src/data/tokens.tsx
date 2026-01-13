/**
 * Datos de documentación para tokens
 */
import type { LucideIcon } from "lucide-react";
import { Palette, Ruler, Type } from "lucide-react";
import type { DocSection } from "./primitives";

export interface TokenDoc {
  name: string;
  path: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  parentPath: string;
  parentName: string;
  importCode: string;
  sections: DocSection[];
}

// ============ COLORS ============
export const colorsDoc: TokenDoc = {
  name: "Colors",
  path: "/tokens/colors",
  description:
    "Paleta de colores del sistema de diseño. Incluye colores de marca, estados, texto y neutrales.",
  icon: Palette,
  accentColor: "#43A047",
  parentPath: "/tokens",
  parentName: "Tokens",
  importCode: `import { colors, COLORS } from '@acacoop/react-components-library';`,
  sections: [
    {
      id: "brand",
      title: "Colores de Marca",
      codeExamples: [
        {
          code: `colors.brand.primary    // "#282D86"
colors.brand.secondary  // "#FE9000"`,
        },
      ],
    },
    {
      id: "status",
      title: "Colores de Estado",
      codeExamples: [
        {
          code: `colors.status.success  // "#43A047"
colors.status.warning  // "#FB8C00"
colors.status.error    // "#E53935"
colors.status.info     // "#039BE5"`,
        },
      ],
    },
    {
      id: "text",
      title: "Colores de Texto",
      codeExamples: [
        {
          code: `colors.text.primary    // "#333333"
colors.text.secondary  // "#666666"
colors.text.muted      // "#999999"
colors.text.inverse    // "#FFFFFF"`,
        },
      ],
    },
    {
      id: "neutral",
      title: "Colores Neutrales",
      codeExamples: [
        {
          code: `colors.neutral.white   // "#FFFFFF"
colors.neutral.gray100 // "#f5f5f5"
colors.neutral.gray500 // "#757575"
colors.neutral.black   // "#3d3c3c"`,
        },
      ],
    },
    {
      id: "alias",
      title: "Alias (COLORS)",
      description:
        "Alias para colores más usados, accesibles directamente desde COLORS.",
      codeExamples: [
        {
          code: `COLORS.primary      // "#282D86"
COLORS.secondary    // "#FE9000"
COLORS.success      // "#43A047"
COLORS.error        // "#E53935"
COLORS.textPrimary  // "#333333"`,
        },
      ],
    },
  ],
};

// ============ SPACING ============
export const spacingDoc: TokenDoc = {
  name: "Spacing",
  path: "/tokens/spacing",
  description:
    "Sistema de espaciado consistente para padding, margin, gaps y dimensiones.",
  icon: Ruler,
  accentColor: "#43A047",
  parentPath: "/tokens",
  parentName: "Tokens",
  importCode: `import { padding, margin, gap, borderRadius, shadow } from '@acacoop/react-components-library';`,
  sections: [
    {
      id: "padding",
      title: "Padding",
      codeExamples: [
        {
          code: `padding.xs  // "4px"
padding.sm  // "8px"
padding.md  // "16px"
padding.lg  // "24px"
padding.xl  // "32px"`,
        },
      ],
    },
    {
      id: "margin",
      title: "Margin",
      codeExamples: [
        {
          code: `margin.xs  // "4px"
margin.sm  // "8px"
margin.md  // "16px"
margin.lg  // "24px"
margin.xl  // "32px"`,
        },
      ],
    },
    {
      id: "gap",
      title: "Gap",
      codeExamples: [
        {
          code: `gap.xs  // "4px"
gap.sm  // "8px"
gap.md  // "16px"
gap.lg  // "24px"
gap.xl  // "32px"`,
        },
      ],
    },
    {
      id: "border-radius",
      title: "Border Radius",
      codeExamples: [
        {
          code: `borderRadius.none  // "0"
borderRadius.sm    // "4px"
borderRadius.md    // "8px"
borderRadius.lg    // "12px"
borderRadius.xl    // "16px"
borderRadius.full  // "9999px"`,
        },
      ],
    },
    {
      id: "shadow",
      title: "Shadow",
      codeExamples: [
        {
          code: `shadow.none  // "none"
shadow.sm    // "0 1px 2px rgba(0,0,0,0.05)"
shadow.md    // "0 4px 6px rgba(0,0,0,0.1)"
shadow.lg    // "0 10px 15px rgba(0,0,0,0.1)"
shadow.xl    // "0 20px 25px rgba(0,0,0,0.15)"`,
        },
      ],
    },
  ],
};

// ============ TYPOGRAPHY ============
export const typographyTokenDoc: TokenDoc = {
  name: "Typography",
  path: "/tokens/typography",
  description:
    "Tokens tipográficos: familias de fuentes, tamaños, pesos y alturas de línea.",
  icon: Type,
  accentColor: "#43A047",
  parentPath: "/tokens",
  parentName: "Tokens",
  importCode: `import { fontFamily, fontSize, fontWeight, lineHeight } from '@acacoop/react-components-library';`,
  sections: [
    {
      id: "font-family",
      title: "Font Family",
      codeExamples: [
        {
          code: `fontFamily.sans   // "Inter, system-ui, sans-serif"
fontFamily.mono   // "monospace"`,
        },
      ],
    },
    {
      id: "font-size",
      title: "Font Size",
      codeExamples: [
        {
          code: `fontSize.xs   // "12px"
fontSize.sm   // "14px"
fontSize.base // "16px"
fontSize.md   // "18px"
fontSize.lg   // "20px"
fontSize.xl   // "24px"
fontSize["2xl"] // "30px"
fontSize["3xl"] // "36px"`,
        },
      ],
    },
    {
      id: "font-weight",
      title: "Font Weight",
      codeExamples: [
        {
          code: `fontWeight.normal   // 400
fontWeight.medium   // 500
fontWeight.semibold // 600
fontWeight.bold     // 700`,
        },
      ],
    },
    {
      id: "line-height",
      title: "Line Height",
      codeExamples: [
        {
          code: `lineHeight.tight   // 1.25
lineHeight.normal  // 1.5
lineHeight.relaxed // 1.75`,
        },
      ],
    },
  ],
};

// Lista de todos los tokens
export const tokenDocs = [colorsDoc, spacingDoc, typographyTokenDoc];
