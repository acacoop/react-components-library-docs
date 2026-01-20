import { Chip, IconWrapper } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { chipDoc } from "../../data/primitives";
import {
  Star,
  Check,
  X,
  User,
  Tag,
  Clock,
  Mail,
  Bell,
  Heart,
  Zap,
} from "lucide-react";
import { useState } from "react";

export function ChipPage() {
  const [tags, setTags] = useState(["React", "TypeScript", "Vite", "Tailwind"]);

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <DocPageLayout
      title={chipDoc.name}
      description={chipDoc.description}
      accentColor={chipDoc.accentColor}
      breadcrumbs={[
        {
          label: chipDoc.parentName,
          path: chipDoc.parentPath,
        },
      ]}
      importCode={chipDoc.importCode}
    >
      {/* Uso Básico */}
      <DocSection title="Uso Básico">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            El Chip es un componente compacto para mostrar información en forma
            de etiqueta.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Chip>Default</Chip>
            <Chip variant="primary">Primary</Chip>
            <Chip variant="secondary">Secondary</Chip>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { Chip } from '@acacoop/react-components-library';

<Chip>Default</Chip>
<Chip variant="primary">Primary</Chip>
<Chip variant="secondary">Secondary</Chip>`}
          />
        </div>
      </DocSection>

      {/* Variantes */}
      <DocSection title="Variantes">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            El Chip soporta múltiples variantes para diferentes contextos
            semánticos.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Chip variant="default">Default</Chip>
            <Chip variant="primary">Primary</Chip>
            <Chip variant="secondary">Secondary</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
            <Chip variant="error">Error</Chip>
            <Chip variant="info">Info</Chip>
            <Chip variant="outline">Outline</Chip>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Chip variant="default">Default</Chip>
<Chip variant="primary">Primary</Chip>
<Chip variant="secondary">Secondary</Chip>
<Chip variant="success">Success</Chip>
<Chip variant="warning">Warning</Chip>
<Chip variant="error">Error</Chip>
<Chip variant="info">Info</Chip>
<Chip variant="outline">Outline</Chip>`}
          />
        </div>
      </DocSection>

      {/* Tamaños */}
      <DocSection title="Tamaños">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Tres tamaños disponibles para diferentes necesidades de UI.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Chip variant="primary" size="sm">
                Small
              </Chip>
              <span className="text-xs text-slate-500">sm (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Chip variant="primary" size="md">
                Medium
              </Chip>
              <span className="text-xs text-slate-500">md (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Chip variant="primary" size="lg">
                Large
              </Chip>
              <span className="text-xs text-slate-500">lg (40px)</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Chip size="sm">Small</Chip>   // 24px altura
<Chip size="md">Medium</Chip>  // 32px altura (default)
<Chip size="lg">Large</Chip>   // 40px altura`}
          />
        </div>
      </DocSection>

      {/* Con Iconos */}
      <DocSection title="Con Iconos">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Agrega iconos al inicio o al final del chip para mayor contexto
            visual.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Chip
              variant="primary"
              startIcon={<IconWrapper icon={User} size="xs" />}
            >
              Usuario
            </Chip>
            <Chip
              variant="success"
              startIcon={<IconWrapper icon={Check} size="xs" color="#43A047" />}
            >
              Completado
            </Chip>
            <Chip
              variant="error"
              startIcon={<IconWrapper icon={X} size="xs" color="#E53935" />}
            >
              Cancelado
            </Chip>
            <Chip
              variant="warning"
              startIcon={<IconWrapper icon={Clock} size="xs" color="#FB8C00" />}
            >
              Pendiente
            </Chip>
            <Chip
              variant="info"
              startIcon={<IconWrapper icon={Mail} size="xs" color="#039BE5" />}
            >
              3 nuevos
            </Chip>
          </div>
          <div className="flex items-center gap-3 flex-wrap mt-4">
            <Chip
              variant="secondary"
              endIcon={<IconWrapper icon={Star} size="xs" color="#FE9000" />}
            >
              Favorito
            </Chip>
            <Chip
              variant="outline"
              endIcon={<IconWrapper icon={Zap} size="xs" />}
            >
              Pro
            </Chip>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { Chip, IconWrapper } from '@acacoop/react-components-library';
import { User, Check, Star } from 'lucide-react';

// Con icono al inicio
<Chip variant="primary" startIcon={<IconWrapper icon={User} size="xs" />}>
  Usuario
</Chip>

// Con icono al final
<Chip variant="secondary" endIcon={<IconWrapper icon={Star} size="xs" color="#FE9000" />}>
  Favorito
</Chip>`}
          />
        </div>
      </DocSection>

      {/* Chips Eliminables */}
      <DocSection title="Chips Eliminables">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Usa{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              onDelete
            </code>{" "}
            para hacer chips eliminables. Ideal para filtros y tags.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {tags.map((tag) => (
              <Chip
                key={tag}
                variant="primary"
                startIcon={<IconWrapper icon={Tag} size="xs" />}
                onDelete={() => handleDeleteTag(tag)}
              >
                {tag}
              </Chip>
            ))}
            {tags.length === 0 && (
              <span className="text-slate-400 text-sm">
                ¡Todos los tags fueron eliminados!
              </span>
            )}
          </div>
          {tags.length < 4 && (
            <button
              onClick={() =>
                setTags(["React", "TypeScript", "Vite", "Tailwind"])
              }
              className="text-sm text-blue-600 hover:underline"
            >
              Restaurar tags
            </button>
          )}
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`const [tags, setTags] = useState(['React', 'TypeScript', 'Vite']);

{tags.map((tag) => (
  <Chip
    key={tag}
    variant="primary"
    onDelete={() => setTags(tags.filter(t => t !== tag))}
  >
    {tag}
  </Chip>
))}`}
          />
        </div>
      </DocSection>

      {/* Chips Clickeables */}
      <DocSection title="Chips Clickeables">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Usa{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              onClick
            </code>{" "}
            para hacer chips interactivos.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Chip
              variant="outline"
              onClick={() => alert("¡Click en Tecnología!")}
              startIcon={<IconWrapper icon={Tag} size="xs" />}
            >
              Tecnología
            </Chip>
            <Chip
              variant="outline"
              onClick={() => alert("¡Click en Diseño!")}
              startIcon={<IconWrapper icon={Heart} size="xs" />}
            >
              Diseño
            </Chip>
            <Chip
              variant="outline"
              onClick={() => alert("¡Click en Noticias!")}
              startIcon={<IconWrapper icon={Bell} size="xs" />}
            >
              Noticias
            </Chip>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Chip variant="outline" onClick={() => console.log('clicked')}>
  Clickeable
</Chip>`}
          />
        </div>
      </DocSection>

      {/* Estados */}
      <DocSection title="Estados">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Los chips pueden estar deshabilitados para prevenir interacción.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Chip variant="primary">Normal</Chip>
            <Chip variant="primary" disabled>
              Disabled
            </Chip>
            <Chip variant="primary" onClick={() => {}} disabled>
              Click Disabled
            </Chip>
            <Chip variant="primary" onDelete={() => {}} disabled>
              Delete Disabled
            </Chip>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Chip variant="primary">Normal</Chip>
<Chip variant="primary" disabled>Disabled</Chip>
<Chip variant="primary" onClick={() => {}} disabled>Click Disabled</Chip>
<Chip variant="primary" onDelete={() => {}} disabled>Delete Disabled</Chip>`}
          />
        </div>
      </DocSection>

      {/* Casos de Uso */}
      <DocSection title="Casos de Uso">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div>
            <p className="text-slate-600 mb-3 font-medium">
              Estados de pedido:
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip
                variant="warning"
                startIcon={
                  <IconWrapper icon={Clock} size="xs" color="#FB8C00" />
                }
              >
                Pendiente
              </Chip>
              <Chip
                variant="info"
                startIcon={<IconWrapper icon={Zap} size="xs" color="#039BE5" />}
              >
                En proceso
              </Chip>
              <Chip
                variant="success"
                startIcon={
                  <IconWrapper icon={Check} size="xs" color="#43A047" />
                }
              >
                Entregado
              </Chip>
              <Chip
                variant="error"
                startIcon={<IconWrapper icon={X} size="xs" color="#E53935" />}
              >
                Cancelado
              </Chip>
            </div>
          </div>
          <div>
            <p className="text-slate-600 mb-3 font-medium">Categorías:</p>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip variant="primary" size="sm">
                Frontend
              </Chip>
              <Chip variant="secondary" size="sm">
                Backend
              </Chip>
              <Chip variant="outline" size="sm">
                DevOps
              </Chip>
              <Chip variant="info" size="sm">
                Mobile
              </Chip>
            </div>
          </div>
          <div>
            <p className="text-slate-600 mb-3 font-medium">Usuarios y roles:</p>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip
                variant="primary"
                startIcon={<IconWrapper icon={User} size="xs" />}
              >
                Admin
              </Chip>
              <Chip
                variant="outline"
                startIcon={<IconWrapper icon={User} size="xs" />}
              >
                Editor
              </Chip>
              <Chip
                variant="default"
                startIcon={<IconWrapper icon={User} size="xs" />}
              >
                Viewer
              </Chip>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={chipDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
