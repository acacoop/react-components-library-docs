import { IconWrapper, Button, COLORS } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { iconWrapperDoc } from "../../data/primitives";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Star,
  Heart,
  Zap,
  Settings,
} from "lucide-react";

// Importar SVG como URL (Vite lo maneja automáticamente)
import EscudoArgentina from "../../assets/icons/escudo-de-la-rep-argentina.svg";

export function IconWrapperPage() {
  return (
    <DocPageLayout
      title={iconWrapperDoc.name}
      description={iconWrapperDoc.description}
      accentColor={iconWrapperDoc.accentColor}
      breadcrumbs={[
        {
          label: iconWrapperDoc.parentName,
          path: iconWrapperDoc.parentPath,
        },
      ]}
      importCode={iconWrapperDoc.importCode}
    >
      {/* Uso Básico con Lucide */}
      <DocSection title="Uso Básico con Lucide React">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Usa la prop{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">icon</code>{" "}
            para renderizar iconos de Lucide React con tamaño y color
            consistentes.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={CheckCircle} />
              <span className="text-xs text-slate-500">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={CheckCircle} size="lg" />
              <span className="text-xs text-slate-500">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={CheckCircle} color="#10B981" />
              <span className="text-xs text-slate-500">Con color</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { IconWrapper } from '@acacoop/react-components-library';
import { CheckCircle } from 'lucide-react';

<IconWrapper icon={CheckCircle} />
<IconWrapper icon={CheckCircle} size="lg" />
<IconWrapper icon={CheckCircle} color="#10B981" />`}
          />
        </div>
      </DocSection>

      {/* Tamaños */}
      <DocSection title="Tamaños">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            El IconWrapper soporta 5 tamaños predefinidos:{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">xs</code>,{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">sm</code>,{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">md</code>,{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">lg</code>,{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">xl</code>.
          </p>
          <div className="flex items-end gap-8">
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Star} size="xs" color={COLORS.primary} />
              <span className="text-xs text-slate-500">xs (12px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Star} size="sm" color={COLORS.primary} />
              <span className="text-xs text-slate-500">sm (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Star} size="md" color={COLORS.primary} />
              <span className="text-xs text-slate-500">md (20px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Star} size="lg" color={COLORS.primary} />
              <span className="text-xs text-slate-500">lg (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Star} size="xl" color={COLORS.primary} />
              <span className="text-xs text-slate-500">xl (32px)</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<IconWrapper icon={Star} size="xs" />  // 12px
<IconWrapper icon={Star} size="sm" />  // 16px
<IconWrapper icon={Star} size="md" />  // 20px (default)
<IconWrapper icon={Star} size="lg" />  // 24px
<IconWrapper icon={Star} size="xl" />  // 32px`}
          />
        </div>
      </DocSection>

      {/* Colores */}
      <DocSection title="Colores">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Puedes personalizar el color usando cualquier valor CSS válido o los
            tokens de color de la librería.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Heart} size="lg" color="#EF4444" />
              <span className="text-xs text-slate-500">Error</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Heart} size="lg" color="#10B981" />
              <span className="text-xs text-slate-500">Success</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Heart} size="lg" color="#F59E0B" />
              <span className="text-xs text-slate-500">Warning</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Heart} size="lg" color={COLORS.primary} />
              <span className="text-xs text-slate-500">Primary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper icon={Heart} size="lg" color={COLORS.secondary} />
              <span className="text-xs text-slate-500">Secondary</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { COLORS } from '@acacoop/react-components-library';

<IconWrapper icon={Heart} color="#EF4444" />
<IconWrapper icon={Heart} color="rgb(16, 185, 129)" />
<IconWrapper icon={Heart} color={COLORS.primary} />`}
          />
        </div>
      </DocSection>

      {/* Varios iconos de Lucide */}
      <DocSection title="Iconos de Lucide React">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Pasa el componente de Lucide directamente usando la prop{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">icon</code>
            . El IconWrapper aplica el tamaño y color correctos.
          </p>
          <div className="flex items-center gap-6">
            <IconWrapper icon={CheckCircle} size="lg" color="#10B981" />
            <IconWrapper icon={XCircle} size="lg" color="#EF4444" />
            <IconWrapper icon={AlertTriangle} size="lg" color="#F59E0B" />
            <IconWrapper icon={Info} size="lg" color="#3B82F6" />
            <IconWrapper icon={Zap} size="lg" color="#8B5CF6" />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { CheckCircle, XCircle, AlertTriangle, Info, Zap } from 'lucide-react';

<IconWrapper icon={CheckCircle} size="lg" color="#10B981" />
<IconWrapper icon={XCircle} size="lg" color="#EF4444" />
<IconWrapper icon={AlertTriangle} size="lg" color="#F59E0B" />
<IconWrapper icon={Info} size="lg" color="#3B82F6" />
<IconWrapper icon={Zap} size="lg" color="#8B5CF6" />`}
          />
        </div>
      </DocSection>

      {/* Con SVG Personalizado */}
      <DocSection title="Con SVG Personalizado (src)">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Usa la prop{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">src</code>{" "}
            para cargar SVGs personalizados importados como URL. Vite maneja la
            importación automáticamente.
          </p>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <IconWrapper src={EscudoArgentina} size="xs" alt="Escudo Argentina" />
              <span className="text-xs text-slate-500">xs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper src={EscudoArgentina} size="sm" alt="Escudo Argentina" />
              <span className="text-xs text-slate-500">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper src={EscudoArgentina} size="md" alt="Escudo Argentina" />
              <span className="text-xs text-slate-500">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper src={EscudoArgentina} size="lg" alt="Escudo Argentina" />
              <span className="text-xs text-slate-500">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconWrapper src={EscudoArgentina} size="xl" alt="Escudo Argentina" />
              <span className="text-xs text-slate-500">xl</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`// Importar SVG como URL
import EscudoArgentina from './assets/icons/escudo-de-la-rep-argentina.svg';

// Usar con la prop src
<IconWrapper src={EscudoArgentina} size="xs" alt="Escudo Argentina" />
<IconWrapper src={EscudoArgentina} size="sm" alt="Escudo Argentina" />
<IconWrapper src={EscudoArgentina} size="md" alt="Escudo Argentina" />
<IconWrapper src={EscudoArgentina} size="lg" alt="Escudo Argentina" />
<IconWrapper src={EscudoArgentina} size="xl" alt="Escudo Argentina" />`}
          />
        </div>
      </DocSection>

      {/* Uso con Botones */}
      <DocSection title="Uso con Botones">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            El IconWrapper es ideal para agregar iconos a botones y otros
            componentes.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="primary">
              <IconWrapper icon={CheckCircle} size="sm" color="white" />
              <span className="ml-2">Confirmar</span>
            </Button>
            <Button variant="destructive">
              <IconWrapper icon={XCircle} size="sm" color="white" />
              <span className="ml-2">Eliminar</span>
            </Button>
            <Button variant="outline">
              <IconWrapper icon={Settings} size="sm" />
              <span className="ml-2">Configuración</span>
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Button variant="primary">
  <IconWrapper icon={CheckCircle} size="sm" color="white" />
  <span className="ml-2">Confirmar</span>
</Button>

<Button variant="destructive">
  <IconWrapper icon={XCircle} size="sm" color="white" />
  <span className="ml-2">Eliminar</span>
</Button>`}
          />
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={iconWrapperDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
