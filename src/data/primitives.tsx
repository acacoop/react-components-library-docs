/**
 * Datos de documentación para primitives
 */
import type { LucideIcon } from "lucide-react";
import {
  MousePointerClick,
  Type,
  LoaderCircle,
  Image,
  Tag,
  Navigation,
} from "lucide-react";

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

// ============ ICON WRAPPER ============
export const iconWrapperDoc: PrimitiveDoc = {
  name: "IconWrapper",
  path: "/primitives/icon-wrapper",
  description:
    "Componente para renderizar iconos de forma consistente. Soporta iconos de Lucide React (via prop icon) y SVGs personalizados (via prop src) con tamaños estandarizados.",
  icon: Image,
  accentColor: "#282D86",
  parentPath: "/primitives",
  parentName: "Primitives",
  importCode: `import { IconWrapper } from '@acacoop/react-components-library';
// o
import { IconWrapper } from '@acacoop/react-components-library/primitives';`,
  props: [
    {
      name: "src",
      type: "string",
      default: "-",
      description:
        "Ruta/URL del SVG para iconos personalizados. Se importa el SVG y se pasa como string.",
    },
    {
      name: "icon",
      type: "ComponentType",
      default: "-",
      description:
        "Componente de icono (Lucide React, etc.). Alternativa a src.",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description:
        "Tamaño del icono (xs=12px, sm=16px, md=20px, lg=24px, xl=32px)",
    },
    {
      name: "color",
      type: "string",
      default: "-",
      description: "Color del icono. Solo funciona con prop icon, no con src.",
    },
    {
      name: "className",
      type: "string",
      default: "-",
      description: "Clase CSS adicional",
    },
    {
      name: "style",
      type: "CSSProperties",
      default: "-",
      description: "Estilos inline adicionales",
    },
    {
      name: "alt",
      type: "string",
      default: '"icon"',
      description: "Texto alternativo para accesibilidad (usado con src)",
    },
  ],
  sections: [],
};

// ============ CHIP ============
export const chipDoc: PrimitiveDoc = {
  name: "Chip",
  path: "/primitives/chip",
  description:
    "Componente compacto para mostrar etiquetas, tags, categorías o elementos seleccionables. Ideal para filtros, estados y metadatos.",
  icon: Tag,
  accentColor: "#282D86",
  parentPath: "/primitives",
  parentName: "Primitives",
  importCode: `import { Chip } from '@acacoop/react-components-library';
// o
import { Chip } from '@acacoop/react-components-library/primitives';`,
  props: [
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Contenido del chip (texto o elementos)",
    },
    {
      name: "variant",
      type: '"default" | "primary" | "secondary" | "success" | "warning" | "error" | "info" | "outline"',
      default: '"default"',
      description: "Variante visual del chip",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Tamaño del chip (sm=24px, md=32px, lg=40px de altura)",
    },
    {
      name: "startIcon",
      type: "ReactNode",
      default: "-",
      description: "Icono o elemento al inicio del chip",
    },
    {
      name: "endIcon",
      type: "ReactNode",
      default: "-",
      description: "Icono o elemento al final del chip",
    },
    {
      name: "onDelete",
      type: "() => void",
      default: "-",
      description:
        "Callback para eliminar. Si se proporciona, muestra un botón de cerrar",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "-",
      description: "Callback cuando se hace click en el chip",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Deshabilita el chip y previene interacción",
    },
  ],
  sections: [],
};

// ============ BREADCRUMBS ============
export const breadcrumbsDoc: PrimitiveDoc = {
  name: "Breadcrumbs",
  path: "/primitives/breadcrumbs",
  description:
    "Navegación jerárquica que muestra la ubicación actual del usuario dentro de la estructura del sitio. Soporta iconos, separadores personalizados e integración con React Router.",
  icon: Navigation,
  accentColor: "#282D86",
  parentPath: "/primitives",
  parentName: "Primitives",
  importCode: `import { Breadcrumbs } from '@acacoop/react-components-library';
// o
import { Breadcrumbs } from '@acacoop/react-components-library/primitives';`,
  props: [
    {
      name: "items",
      type: "BreadcrumbItem[]",
      default: "-",
      description:
        "Array de items del breadcrumb. Cada item tiene label, href opcional, onClick opcional e icon opcional.",
    },
    {
      name: "separator",
      type: "ReactNode",
      default: '"/"',
      description:
        "Separador entre items. Puede ser texto, icono o cualquier elemento React.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Tamaño del breadcrumb.",
    },
    {
      name: "color",
      type: "string",
      default: "COLORS.textSecondary",
      description: "Color del texto de los items navegables.",
    },
    {
      name: "activeColor",
      type: "string",
      default: "COLORS.textPrimary",
      description: "Color del texto del item activo (último).",
    },
    {
      name: "hoverColor",
      type: "string",
      default: "COLORS.primary",
      description: "Color del texto en hover.",
    },
    {
      name: "maxItems",
      type: "number",
      default: "-",
      description:
        "Máximo de items a mostrar. Si hay más, se colapsan con ellipsis.",
    },
    {
      name: "linkComponent",
      type: "ComponentType",
      default: "-",
      description:
        "Componente personalizado para renderizar links (ej: Link de React Router).",
    },
  ],
  sections: [],
};

// Lista de todos los primitives
export const primitiveDocs = [
  buttonDoc,
  spinnerDoc,
  typographyDoc,
  iconWrapperDoc,
  chipDoc,
  breadcrumbsDoc,
];
