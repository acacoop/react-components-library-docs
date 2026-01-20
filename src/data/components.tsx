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
  MessageSquareWarning,
  Bell,
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
      type: '"elevated" | "outlined" | "flat"',
      default: '"elevated"',
      description: "Estilo visual de la card",
    },
    {
      name: "width",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"',
      default: '"auto"',
      description:
        "Ancho de la card (xs=200px, sm=280px, md=360px, lg=480px, xl=640px)",
    },
    {
      name: "height",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"',
      default: '"auto"',
      description:
        "Alto de la card (xs=120px, sm=180px, md=240px, lg=320px, xl=400px)",
    },
    {
      name: "padding",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Padding interno de la card",
    },
    {
      name: "title",
      type: "string",
      default: "-",
      description: "Título de la card (usado con layouts de ícono)",
    },
    {
      name: "subtitle",
      type: "string",
      default: "-",
      description: "Subtítulo de la card (usado con layouts de ícono)",
    },
    {
      name: "icon",
      type: "LucideIcon",
      default: "-",
      description: "Ícono de Lucide React a mostrar",
    },
    {
      name: "iconPosition",
      type: '"top-center" | "top-left" | "top-right" | "inline-left" | "inline-right" | "left" | "right"',
      default: '"top-center"',
      description: "Posición del ícono en el layout",
    },
    {
      name: "iconSize",
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description:
        "Tamaño del ícono (xs=16px, sm=20px, md=24px, lg=32px, xl=48px)",
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
      description: "Color de fondo del contenedor del ícono",
    },
    {
      name: "backgroundColor",
      type: "string",
      default: '"#fff"',
      description: "Color de fondo de la card",
    },
    {
      name: "hoverable",
      type: "boolean",
      default: "false",
      description: "Añade efecto de elevación al hacer hover",
    },
    {
      name: "clickable",
      type: "boolean",
      default: "false",
      description: "Muestra cursor pointer en hover",
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

// ============ DIALOG ============
export const dialogDoc: ComponentDoc = {
  name: "Dialog",
  path: "/components/dialog",
  description:
    "Modal de confirmación con overlay oscuro y botones de acción para solicitar confirmación del usuario.",
  icon: MessageSquareWarning,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { Dialog } from '@acacoop/react-components-library';
import { Trash2 } from 'lucide-react'; // Para íconos`,
  props: [
    {
      name: "isOpen",
      type: "boolean",
      default: "-",
      description: "Si el modal está visible",
    },
    {
      name: "title",
      type: "string",
      default: "-",
      description: "Título del modal",
    },
    {
      name: "message",
      type: "string",
      default: "-",
      description: "Mensaje o descripción del modal",
    },
    {
      name: "confirmText",
      type: "string",
      default: '"Confirmar"',
      description: "Texto del botón de confirmación",
    },
    {
      name: "cancelText",
      type: "string",
      default: '"Cancelar"',
      description: "Texto del botón de cancelación",
    },
    {
      name: "confirmVariant",
      type: '"primary" | "secondary" | "destructive"',
      default: '"primary"',
      description: "Variante del botón de confirmación",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Tamaño del modal (sm=320px, md=420px, lg=520px)",
    },
    {
      name: "onConfirm",
      type: "() => void",
      default: "-",
      description: "Callback al confirmar",
    },
    {
      name: "onCancel",
      type: "() => void",
      default: "-",
      description: "Callback al cancelar",
    },
    {
      name: "closeOnOverlayClick",
      type: "boolean",
      default: "true",
      description: "Si se puede cerrar haciendo click en el overlay",
    },
    {
      name: "showCancelButton",
      type: "boolean",
      default: "true",
      description: "Si se muestra el botón de cancelar",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Contenido personalizado (reemplaza message)",
    },
    {
      name: "isLoading",
      type: "boolean",
      default: "false",
      description: "Si el botón de confirmar está en estado de carga",
    },
    {
      name: "icon",
      type: "ReactNode",
      default: "-",
      description: "Ícono para mostrar en el header del modal",
    },
  ],
  sections: [
    {
      id: "basic",
      title: "Uso Básico",
      codeExamples: [
        {
          code: `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>
  Abrir Modal
</Button>

<Dialog
  isOpen={isOpen}
  title="Confirmar acción"
  message="¿Estás seguro de que deseas continuar?"
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
/>`,
        },
      ],
    },
    {
      id: "destructive",
      title: "Variante Destructiva",
      codeExamples: [
        {
          code: `<Dialog
  isOpen={isOpen}
  title="¿Eliminar elemento?"
  message="Esta acción no se puede deshacer."
  confirmText="Eliminar"
  confirmVariant="destructive"
  icon={<Trash2 size={20} />}
  onConfirm={handleDelete}
  onCancel={() => setIsOpen(false)}
/>`,
        },
      ],
    },
    {
      id: "with-icon",
      title: "Con Ícono",
      codeExamples: [
        {
          code: `<Dialog
  isOpen={isOpen}
  title="Información importante"
  message="Este mensaje requiere tu atención."
  confirmText="Entendido"
  showCancelButton={false}
  icon={<Info size={20} />}
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
/>`,
        },
      ],
    },
    {
      id: "sizes",
      title: "Tamaños",
      codeExamples: [
        {
          code: `// Pequeño
<Dialog size="sm" ... />

// Mediano (default)
<Dialog size="md" ... />

// Grande
<Dialog size="lg" ... />`,
        },
      ],
    },
    {
      id: "loading",
      title: "Estado de Carga",
      codeExamples: [
        {
          code: `const [isLoading, setIsLoading] = useState(false);

const handleConfirm = async () => {
  setIsLoading(true);
  await saveChanges();
  setIsLoading(false);
  setIsOpen(false);
};

<Dialog
  isOpen={isOpen}
  title="Guardar cambios"
  message="¿Deseas guardar los cambios?"
  isLoading={isLoading}
  onConfirm={handleConfirm}
  onCancel={() => setIsOpen(false)}
/>`,
        },
      ],
    },
    {
      id: "no-cancel",
      title: "Sin Botón Cancelar",
      codeExamples: [
        {
          code: `<Dialog
  isOpen={isOpen}
  title="Sesión expirada"
  message="Por favor, inicia sesión nuevamente."
  confirmText="Ir al login"
  showCancelButton={false}
  onConfirm={handleRedirect}
  onCancel={() => {}}
/>`,
        },
      ],
    },
    {
      id: "custom-content",
      title: "Contenido Personalizado",
      codeExamples: [
        {
          code: `<Dialog
  isOpen={isOpen}
  title="Términos y Condiciones"
  confirmText="Acepto"
  cancelText="No acepto"
  onConfirm={handleAccept}
  onCancel={() => setIsOpen(false)}
>
  <div className="space-y-3">
    <p>Al continuar, aceptas los términos:</p>
    <ul className="list-disc list-inside">
      <li>Uso responsable</li>
      <li>Protección de datos</li>
    </ul>
  </div>
</Dialog>`,
        },
      ],
    },
  ],
};

// ============ TOAST ============
export const toastDoc: ComponentDoc = {
  name: "Toast",
  path: "/components/toast",
  description:
    "Notificación emergente para mostrar mensajes de feedback al usuario, con soporte para variantes de éxito, error, warning e info.",
  icon: Bell,
  accentColor: "#FE9000",
  parentPath: "/components",
  parentName: "Components",
  importCode: `import { Toast } from '@acacoop/react-components-library';`,
  props: [
    {
      name: "message",
      type: "string",
      default: "-",
      description: "Mensaje a mostrar en la notificación (requerido)",
    },
    {
      name: "variant",
      type: '"success" | "error" | "warning" | "info"',
      default: '"info"',
      description: "Variante del toast que define el color y estilo",
    },
    {
      name: "isVisible",
      type: "boolean",
      default: "-",
      description: "Si el toast está visible (requerido)",
    },
    {
      name: "onClose",
      type: "() => void",
      default: "-",
      description: "Callback al cerrar el toast",
    },
    {
      name: "duration",
      type: "number",
      default: "3000",
      description:
        "Duración en ms antes de cerrar automáticamente (0 = no auto-cerrar)",
    },
    {
      name: "position",
      type: '"top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center"',
      default: '"top-right"',
      description: "Posición del toast en la pantalla",
    },
    {
      name: "title",
      type: "string",
      default: "-",
      description: "Título opcional del toast",
    },
    {
      name: "showCloseButton",
      type: "boolean",
      default: "true",
      description: "Si se muestra el botón de cerrar",
    },
    {
      name: "icon",
      type: "ReactNode",
      default: "-",
      description: "Ícono personalizado (usa ícono por defecto según variante)",
    },
  ],
  sections: [
    {
      id: "basic",
      title: "Uso Básico",
      codeExamples: [
        {
          code: `const [showToast, setShowToast] = useState(false);

<Toast
  message="Operación completada exitosamente"
  variant="success"
  isVisible={showToast}
  onClose={() => setShowToast(false)}
/>`,
        },
      ],
    },
    {
      id: "variants",
      title: "Variantes",
      codeExamples: [
        {
          code: `<Toast message="Operación exitosa" variant="success" ... />
<Toast message="Ocurrió un error" variant="error" ... />
<Toast message="Advertencia importante" variant="warning" ... />
<Toast message="Información útil" variant="info" ... />`,
        },
      ],
    },
    {
      id: "positions",
      title: "Posiciones",
      codeExamples: [
        {
          code: `<Toast position="top-right" ... />
<Toast position="top-center" ... />
<Toast position="bottom-left" ... />`,
        },
      ],
    },
    {
      id: "with-title",
      title: "Con Título",
      codeExamples: [
        {
          code: `<Toast
  title="¡Éxito!"
  message="Los datos se guardaron correctamente"
  variant="success"
  isVisible={isVisible}
  onClose={handleClose}
/>`,
        },
      ],
    },
    {
      id: "auto-dismiss",
      title: "Auto-cerrar",
      codeExamples: [
        {
          code: `// Se cierra automáticamente después de 3 segundos
<Toast
  message="Este mensaje desaparecerá pronto"
  duration={3000}
  isVisible={isVisible}
  onClose={handleClose}
/>

// No se cierra automáticamente
<Toast
  message="Debes cerrar manualmente"
  duration={0}
  isVisible={isVisible}
  onClose={handleClose}
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
  dialogDoc,
  toastDoc,
];
