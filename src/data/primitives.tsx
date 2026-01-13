/**
 * Datos de documentación para primitives
 */
import type { LucideIcon } from "lucide-react";
import { MousePointerClick, Type, LoaderCircle } from "lucide-react";

export interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface CodeExample {
  title?: string;
  code: string;
}

export interface DocSection {
  id: string;
  title: string;
  description?: string;
  codeExamples?: CodeExample[];
}

export interface PrimitiveDoc {
  name: string;
  path: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  parentPath: string;
  parentName: string;
  importCode: string;
  props: PropDefinition[];
  sections: DocSection[];
}

// ============ BUTTON ============
export const buttonDoc: PrimitiveDoc = {
  name: "Button",
  path: "/primitives/button",
  description:
    "Botón base con múltiples variantes, tamaños y estados. El componente más fundamental para interacciones del usuario.",
  icon: MousePointerClick,
  accentColor: "#282D86",
  parentPath: "/primitives",
  parentName: "Primitives",
  importCode: `import { Button } from '@acacoop/react-components-library';
// o
import { Button } from '@acacoop/react-components-library/primitives';`,
  props: [
    {
      name: "variant",
      type: "ButtonVariant",
      default: '"primary"',
      description:
        "Estilo visual del botón: primary, secondary, destructive, outline, ghost, link",
    },
    {
      name: "size",
      type: "ButtonSize",
      default: '"md"',
      description: "Tamaño del botón: sm, md, lg",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Deshabilita el botón y previene interacción",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Muestra un spinner y deshabilita el botón",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "-",
      description: "Callback cuando se hace click",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Contenido del botón",
    },
  ],
  sections: [
    {
      id: "variants",
      title: "Variantes",
      codeExamples: [
        {
          code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
        },
      ],
    },
    {
      id: "sizes",
      title: "Tamaños",
      codeExamples: [
        {
          code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
        },
      ],
    },
    {
      id: "states",
      title: "Estados",
      codeExamples: [
        {
          code: `<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
        },
      ],
    },
  ],
};

// ============ SPINNER ============
export const spinnerDoc: PrimitiveDoc = {
  name: "Spinner",
  path: "/primitives/spinner",
  description:
    "Indicador de carga animado. Muestra al usuario que una operación está en progreso.",
  icon: LoaderCircle,
  accentColor: "#282D86",
  parentPath: "/primitives",
  parentName: "Primitives",
  importCode: `import { Spinner, COLORS } from '@acacoop/react-components-library';`,
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Tamaño del spinner",
    },
    {
      name: "color",
      type: "string",
      default: "COLORS.primary",
      description: "Color del spinner (cualquier color CSS válido)",
    },
  ],
  sections: [
    {
      id: "sizes",
      title: "Tamaños",
      codeExamples: [
        {
          code: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`,
        },
      ],
    },
    {
      id: "colors",
      title: "Colores",
      codeExamples: [
        {
          code: `<Spinner color={COLORS.primary} />
<Spinner color={COLORS.secondary} />
<Spinner color={COLORS.success} />
<Spinner color="#custom-color" />`,
        },
      ],
    },
  ],
};

// ============ TYPOGRAPHY ============
export const typographyDoc: PrimitiveDoc = {
  name: "Typography",
  path: "/primitives/typography",
  description:
    "Componentes de texto para interfaces: Heading, Text, Caption y Label. Todos soportan variantes semánticas y tamaños predefinidos.",
  icon: Type,
  accentColor: "#282D86",
  parentPath: "/primitives",
  parentName: "Primitives",
  importCode: `import { Heading, Text, Caption, Label } from '@acacoop/react-components-library';
// o
import { Heading, Text, Caption, Label } from '@acacoop/react-components-library/primitives';`,
  props: [
    {
      name: "as",
      type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"',
      default: "Varía",
      description: "Elemento HTML a renderizar",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',
      default: '"md"',
      description: "Tamaño del texto",
    },
    {
      name: "weight",
      type: '"normal" | "medium" | "semibold" | "bold"',
      default: "Varía",
      description: "Peso de la fuente",
    },
    {
      name: "color",
      type: "string",
      default: "inherit",
      description: "Color del texto",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Contenido del texto",
    },
  ],
  sections: [
    {
      id: "heading",
      title: "Heading",
      description: "Para títulos y encabezados de sección",
      codeExamples: [
        {
          code: `<Heading as="h1" size="3xl">Título Principal</Heading>
<Heading as="h2" size="2xl">Subtítulo</Heading>
<Heading as="h3" size="xl">Sección</Heading>`,
        },
      ],
    },
    {
      id: "text",
      title: "Text",
      description: "Para párrafos y contenido de texto",
      codeExamples: [
        {
          code: `<Text size="lg">Texto grande</Text>
<Text size="md">Texto normal</Text>
<Text size="sm">Texto pequeño</Text>`,
        },
      ],
    },
    {
      id: "caption",
      title: "Caption",
      description: "Para texto secundario y descripciones",
      codeExamples: [
        {
          code: `<Caption>Texto de ayuda o descripción</Caption>
<Caption color={COLORS.error}>Error message</Caption>`,
        },
      ],
    },
    {
      id: "label",
      title: "Label",
      description: "Para etiquetas de formularios",
      codeExamples: [
        {
          code: `<Label htmlFor="email">Email</Label>
<Label required>Campo requerido</Label>`,
        },
      ],
    },
  ],
};

// Lista de todos los primitives
export const primitiveDocs = [buttonDoc, spinnerDoc, typographyDoc];
