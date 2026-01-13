/**
 * Datos de documentación para components
 */
import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  FolderOpen,
  BarChart3,
  Loader,
  PanelTop,
} from "lucide-react";
import type { PropDefinition, DocSection } from "./primitives";

export interface ComponentDoc {
  name: string;
  path: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  parentPath: string;
  parentName: string;
  importCode: string;
  props: PropDefinition[];
  subComponentProps?: {
    name: string;
    props: PropDefinition[];
  }[];
  sections: DocSection[];
}

// ============ BUTTON GROUP ============
export const buttonGroupDoc: ComponentDoc = {
  name: "ButtonGroup",
  path: "/components/button-group",
  description: "Agrupa botones con espaciado y alineación consistente.",
  icon: LayoutGrid,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { ButtonGroup } from '@acacoop/react-components-library';
import { Button } from '@acacoop/react-components-library';`,
  props: [
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Botones a agrupar",
    },
    {
      name: "direction",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description: "Dirección del grupo",
    },
    {
      name: "gap",
      type: '"none" | "xs" | "sm" | "md" | "lg"',
      default: '"sm"',
      description: "Espacio entre botones",
    },
    {
      name: "align",
      type: '"start" | "center" | "end" | "stretch"',
      default: '"start"',
      description: "Alineación de los botones",
    },
  ],
  sections: [
    {
      id: "basic",
      title: "Uso Básico",
      codeExamples: [
        {
          code: `<ButtonGroup>
  <Button variant="primary">Guardar</Button>
  <Button variant="outline">Cancelar</Button>
</ButtonGroup>`,
        },
      ],
    },
    {
      id: "direction",
      title: "Dirección",
      codeExamples: [
        {
          code: `<ButtonGroup direction="horizontal">...</ButtonGroup>
<ButtonGroup direction="vertical">...</ButtonGroup>`,
        },
      ],
    },
    {
      id: "gap",
      title: "Espaciado",
      codeExamples: [
        {
          code: `<ButtonGroup gap="none">...</ButtonGroup>
<ButtonGroup gap="sm">...</ButtonGroup>
<ButtonGroup gap="md">...</ButtonGroup>
<ButtonGroup gap="lg">...</ButtonGroup>`,
        },
      ],
    },
  ],
};

// ============ CARD ============
export const cardDoc: ComponentDoc = {
  name: "Card",
  path: "/components/card",
  description:
    "Contenedor flexible para agrupar información relacionada con soporte para íconos, múltiples layouts y dimensiones personalizables.",
  icon: FolderOpen,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { Card, CardHeader, CardContent, CardFooter } from '@acacoop/react-components-library';
import { Settings } from 'lucide-react'; // Para usar íconos`,
  props: [
    {
      name: "variant",
      type: '"default" | "elevated" | "outlined" | "flat"',
      default: '"default"',
      description: "Estilo visual de la card",
    },
    {
      name: "width",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"',
      default: '"auto"',
      description: "Ancho de la card",
    },
    {
      name: "height",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"',
      default: '"auto"',
      description: "Alto de la card",
    },
    {
      name: "padding",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Padding interno",
    },
    {
      name: "title",
      type: "string",
      default: "-",
      description: "Título de la card",
    },
    {
      name: "subtitle",
      type: "string",
      default: "-",
      description: "Subtítulo de la card",
    },
    {
      name: "icon",
      type: "LucideIcon",
      default: "-",
      description: "Ícono de Lucide React",
    },
    {
      name: "iconPosition",
      type: '"top-center" | "top-left" | "inline-left" | "inline-right" | "left" | "right"',
      default: '"top-center"',
      description: "Posición del ícono",
    },
    {
      name: "iconSize",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Tamaño del ícono",
    },
    {
      name: "iconColor",
      type: "string",
      default: "COLORS.primary",
      description: "Color del ícono",
    },
    {
      name: "iconBgColor",
      type: "string",
      default: "-",
      description: "Color de fondo del ícono",
    },
    {
      name: "hoverable",
      type: "boolean",
      default: "false",
      description: "Añade efecto hover",
    },
    {
      name: "clickable",
      type: "boolean",
      default: "false",
      description: "Indica que es clickeable (cursor pointer)",
    },
  ],
  subComponentProps: [
    {
      name: "CardHeader",
      props: [
        {
          name: "title",
          type: "string",
          default: "-",
          description: "Título del header",
        },
        {
          name: "subtitle",
          type: "string",
          default: "-",
          description: "Subtítulo del header",
        },
        {
          name: "icon",
          type: "LucideIcon",
          default: "-",
          description: "Ícono del header",
        },
        {
          name: "iconSize",
          type: '"sm" | "md" | "lg" | "xl"',
          default: '"md"',
          description: "Tamaño del ícono",
        },
        {
          name: "iconColor",
          type: "string",
          default: "COLORS.primary",
          description: "Color del ícono",
        },
      ],
    },
    {
      name: "CardFooter",
      props: [
        {
          name: "textColor",
          type: "string",
          default: "-",
          description: "Color del texto del footer",
        },
        {
          name: "children",
          type: "ReactNode",
          default: "-",
          description: "Contenido del footer",
        },
      ],
    },
  ],
  sections: [
    {
      id: "variants",
      title: "Variantes",
      codeExamples: [
        {
          code: `<Card variant="elevated">...</Card>
<Card variant="outlined">...</Card>
<Card variant="flat">...</Card>`,
        },
      ],
    },
    {
      id: "icon-positions",
      title: "Posiciones de Ícono",
      description:
        "Las cards pueden incluir íconos de Lucide React en diferentes posiciones para crear layouts variados.",
      codeExamples: [
        {
          title: "Top Center",
          code: `<Card
  icon={Settings}
  iconPosition="top-center"
  iconSize="xl"
  iconColor="#282D86"
  title="Configuración"
  subtitle="Ajusta las preferencias del sistema"
/>`,
        },
        {
          title: "Top Left",
          code: `<Card
  icon={User}
  iconPosition="top-left"
  iconSize="lg"
  iconColor="#FE9000"
  title="Perfil de Usuario"
  subtitle="Información personal"
/>`,
        },
        {
          title: "Inline Left",
          code: `<Card
  icon={Bell}
  iconPosition="inline-left"
  iconSize="md"
  iconColor="#EF4444"
  title="Notificaciones"
  subtitle="Tienes 5 mensajes sin leer"
/>`,
        },
      ],
    },
    {
      id: "sizes",
      title: "Tamaños",
      codeExamples: [
        {
          title: "Width",
          code: `<Card width="xs">...</Card>  // 200px
<Card width="sm">...</Card>  // 280px
<Card width="md">...</Card>  // 360px
<Card width="lg">...</Card>  // 480px
<Card width="xl">...</Card>  // 640px
<Card width="full">...</Card> // 100%`,
        },
        {
          title: "Height",
          code: `<Card height="xs">...</Card>  // 120px
<Card height="sm">...</Card>  // 180px
<Card height="md">...</Card>  // 240px
<Card height="lg">...</Card>  // 320px`,
        },
      ],
    },
    {
      id: "padding",
      title: "Padding",
      codeExamples: [
        {
          code: `<Card padding="none">...</Card>
<Card padding="xs">...</Card>
<Card padding="sm">...</Card>
<Card padding="md">...</Card>  // default
<Card padding="lg">...</Card>
<Card padding="xl">...</Card>`,
        },
      ],
    },
    {
      id: "icon-background",
      title: "Ícono con Fondo",
      description:
        "Usa iconBgColor para agregar un fondo al contenedor del ícono.",
      codeExamples: [
        {
          code: `<Card
  icon={Zap}
  iconPosition="top-center"
  iconSize="lg"
  iconColor="#F59E0B"
  iconBgColor="#FEF3C7"
  title="Rendimiento"
/>`,
        },
      ],
    },
    {
      id: "hoverable",
      title: "Hoverable",
      codeExamples: [
        {
          code: `<Card
  hoverable
  icon={Mail}
  iconPosition="top-center"
  iconSize="lg"
  iconColor="#3B82F6"
  title="Mensajes"
  subtitle="12 sin leer"
/>`,
        },
      ],
    },
    {
      id: "with-header-footer",
      title: "Con Header y Footer",
      codeExamples: [
        {
          code: `<Card>
  <CardHeader
    title="Título del Card"
    subtitle="Subtítulo opcional"
  />
  <CardContent>
    <p>Contenido principal...</p>
  </CardContent>
  <CardFooter>
    <button>Cancelar</button>
    <button>Confirmar</button>
  </CardFooter>
</Card>`,
        },
      ],
    },
  ],
};

// ============ STAT CARD ============
export const statCardDoc: ComponentDoc = {
  name: "StatCard",
  path: "/components/stat-card",
  description: "Tarjeta para mostrar estadísticas y métricas de forma clara.",
  icon: BarChart3,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { StatCard } from '@acacoop/react-components-library';`,
  props: [
    {
      name: "label",
      type: "string",
      default: "-",
      description: "Etiqueta descriptiva de la estadística",
    },
    {
      name: "count",
      type: "string | number",
      default: "-",
      description: "Valor principal a mostrar",
    },
    {
      name: "severity",
      type: '"high" | "medium" | "low" | "neutral"',
      default: '"neutral"',
      description: "Nivel de severidad que define el color",
    },
    {
      name: "icon",
      type: "ReactNode",
      default: "-",
      description: "Ícono decorativo",
    },
    {
      name: "span",
      type: "1 | 2 | 3",
      default: "1",
      description: "Número de columnas que ocupa en un grid",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Muestra un spinner de carga",
    },
  ],
  sections: [
    {
      id: "basic",
      title: "Uso Básico",
      codeExamples: [
        {
          code: `<div className="grid grid-cols-3 gap-6">
  <StatCard label="Total Usuarios" count="1,234" />
  <StatCard label="Ingresos" count="$45,678" />
  <StatCard label="Conversión" count="23.5%" />
</div>`,
        },
      ],
    },
    {
      id: "severities",
      title: "Severidades",
      codeExamples: [
        {
          code: `<div className="grid grid-cols-4 gap-6">
  <StatCard label="Todo bien" count="98%" severity="low" />
  <StatCard label="Atención" count="23" severity="medium" />
  <StatCard label="Crítico" count="5" severity="high" />
  <StatCard label="Información" count="142" severity="neutral" />
</div>`,
        },
      ],
    },
    {
      id: "with-icon",
      title: "Con Ícono",
      codeExamples: [
        {
          code: `<StatCard
  label="Usuarios activos"
  count="3,421"
  icon={<UsersIcon className="w-6 h-6" />}
  severity="low"
/>`,
        },
      ],
    },
    {
      id: "loading",
      title: "Estado de Carga",
      codeExamples: [
        {
          code: `<div className="grid grid-cols-3 gap-6">
  <StatCard label="Cargando datos..." count="--" loading={true} />
  <StatCard label="Procesando..." count="--" loading={true} />
  <StatCard label="Sincronizando..." count="--" loading={true} severity="neutral" />
</div>`,
        },
      ],
    },
  ],
};

// ============ LOADING OVERLAY ============
export const loadingOverlayDoc: ComponentDoc = {
  name: "LoadingOverlay",
  path: "/components/loading-overlay",
  description:
    "Overlay de carga fullscreen o sobre contenedor específico para indicar operaciones en progreso.",
  icon: Loader,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { LoadingOverlay } from '@acacoop/react-components-library';`,
  props: [
    {
      name: "isLoading",
      type: "boolean",
      default: "false",
      description: "Controla la visibilidad del overlay",
    },
    {
      name: "fullscreen",
      type: "boolean",
      default: "false",
      description: "Si es true, cubre toda la pantalla",
    },
    {
      name: "message",
      type: "string",
      default: "-",
      description: "Mensaje a mostrar debajo del spinner",
    },
    {
      name: "spinnerSize",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"lg"',
      description: "Tamaño del spinner",
    },
    {
      name: "backgroundColor",
      type: "string",
      default: '"rgba(255,255,255,0.8)"',
      description: "Color de fondo del overlay",
    },
  ],
  sections: [
    {
      id: "basic",
      title: "Uso Básico",
      codeExamples: [
        {
          code: `<div style={{ position: 'relative', height: '200px' }}>
  <LoadingOverlay isLoading={true} />
  {/* Contenido */}
</div>`,
        },
      ],
    },
    {
      id: "with-message",
      title: "Con Mensaje",
      codeExamples: [
        {
          code: `<LoadingOverlay
  isLoading={true}
  message="Cargando datos..."
/>`,
        },
      ],
    },
    {
      id: "fullscreen",
      title: "Fullscreen",
      codeExamples: [
        {
          code: `<LoadingOverlay
  isLoading={true}
  fullscreen
  message="Procesando..."
/>`,
        },
      ],
    },
  ],
};

// ============ HEADER ============
export const headerDoc: ComponentDoc = {
  name: "Header",
  path: "/components/header",
  description:
    "Componente para encabezados de página con título, subtítulo y botón de acción opcional.",
  icon: PanelTop,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { Header } from '@acacoop/react-components-library';
import { Plus } from 'lucide-react'; // Para íconos en el botón`,
  props: [
    {
      name: "title",
      type: "string",
      default: "-",
      description: "Título principal del header",
    },
    {
      name: "subtitle",
      type: "string",
      default: "-",
      description: "Subtítulo descriptivo",
    },
    {
      name: "width",
      type: '"sm" | "md" | "lg" | "xl" | "full"',
      default: '"full"',
      description: "Ancho máximo del header",
    },
    {
      name: "paddingSize",
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"lg"',
      description: "Padding interno",
    },
    {
      name: "titleSize",
      type: '"sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',
      default: '"2xl"',
      description: "Tamaño del título",
    },
    {
      name: "subtitleSize",
      type: '"sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',
      default: '"md"',
      description: "Tamaño del subtítulo",
    },
    {
      name: "actionButton",
      type: "HeaderActionButton",
      default: "-",
      description: "Configuración del botón de acción",
    },
  ],
  subComponentProps: [
    {
      name: "HeaderActionButton",
      props: [
        {
          name: "label",
          type: "string",
          default: "-",
          description: "Texto del botón",
        },
        {
          name: "onClick",
          type: "() => void",
          default: "-",
          description: "Callback al hacer click",
        },
        {
          name: "icon",
          type: "LucideIcon",
          default: "-",
          description: "Ícono del botón",
        },
        {
          name: "variant",
          type: "ButtonVariant",
          default: '"primary"',
          description: "Variante del botón",
        },
        {
          name: "size",
          type: "ButtonSize",
          default: '"md"',
          description: "Tamaño del botón",
        },
        {
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Estado de carga",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Estado deshabilitado",
        },
      ],
    },
  ],
  sections: [
    {
      id: "basic",
      title: "Uso Básico",
      codeExamples: [
        {
          code: `<Header
  title="Turnos"
  subtitle="Visualiza y gestiona todos los turnos registrados."
/>`,
        },
      ],
    },
    {
      id: "with-action",
      title: "Con Botón de Acción",
      codeExamples: [
        {
          code: `<Header
  title="Turnos"
  subtitle="Visualiza y gestiona todos los turnos registrados."
  actionButton={{
    label: "Agregar turno",
    icon: Plus,
    variant: "primary",
    onClick: () => console.log("Agregar"),
  }}
/>`,
        },
      ],
    },
    {
      id: "sizes",
      title: "Tamaños de Texto",
      codeExamples: [
        {
          code: `<Header
  title="Título Grande"
  subtitle="Subtítulo pequeño"
  titleSize="3xl"
  subtitleSize="sm"
/>`,
        },
      ],
    },
  ],
};

// Lista de todos los components
export const componentDocs = [
  buttonGroupDoc,
  cardDoc,
  statCardDoc,
  loadingOverlayDoc,
  headerDoc,
];
