import { Header } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { headerDoc } from "../../data/components";
import { Plus, Download, Settings, Search, RefreshCw } from "lucide-react";

export function HeaderPage() {
  return (
    <DocPageLayout
      title={headerDoc.name}
      description={headerDoc.description}
      accentColor={headerDoc.accentColor}
      breadcrumbs={[
        { label: headerDoc.parentName, path: headerDoc.parentPath },
      ]}
      importCode={headerDoc.importCode}
    >
      {/* Uso Básico */}
      <DocSection title="Uso Básico">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <Header
            title="Turnos"
            subtitle="Visualiza y gestiona todos los turnos registrados en el sistema."
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={headerDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Con Botón de Acción */}
      <DocSection title="Con Botón de Acción">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-6">
          <Header
            title="Turnos"
            subtitle="Visualiza y gestiona todos los turnos registrados."
            actionButton={{
              label: "Agregar turno",
              icon: Plus as any,
              variant: "primary",
              onClick: () => alert("Agregar turno clicked!"),
            }}
          />
          <div className="border-t border-slate-200 pt-6">
            <Header
              title="Reportes"
              subtitle="Descarga los reportes del sistema."
              actionButton={{
                label: "Exportar",
                icon: Download as any,
                variant: "outline",
                onClick: () => alert("Exportar clicked!"),
              }}
            />
          </div>
          <div className="border-t border-slate-200 pt-6">
            <Header
              title="Configuración"
              subtitle="Ajusta las preferencias del sistema."
              actionButton={{
                label: "Configurar",
                icon: Settings as any,
                variant: "secondary",
                onClick: () => alert("Configurar clicked!"),
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={headerDoc.sections[1].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Anchos */}
      <DocSection title="Anchos">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-6">
          <div>
            <p className="text-sm text-slate-500 mb-2">width="sm" (640px)</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Header Small"
                subtitle="Ancho máximo de 640px"
                width="sm"
                paddingSize="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">width="md" (768px)</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Header Medium"
                subtitle="Ancho máximo de 768px"
                width="md"
                paddingSize="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">width="lg" (1024px)</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Header Large"
                subtitle="Ancho máximo de 1024px"
                width="lg"
                paddingSize="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">width="full" (100%)</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Header Full"
                subtitle="Ancho completo del contenedor"
                width="full"
                paddingSize="md"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Header title="Header Small" width="sm" />
<Header title="Header Medium" width="md" />
<Header title="Header Large" width="lg" />
<Header title="Header Full" width="full" />`}
          />
        </div>
      </DocSection>

      {/* Tamaños de Texto */}
      <DocSection title="Tamaños de Texto">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-6">
          <div>
            <p className="text-sm text-slate-500 mb-2">
              titleSize="sm" / subtitleSize="sm"
            </p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Título Pequeño"
                subtitle="Subtítulo pequeño"
                titleSize="sm"
                subtitleSize="sm"
                paddingSize="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">
              titleSize="xl" / subtitleSize="md"
            </p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Título Extra Large"
                subtitle="Subtítulo mediano"
                titleSize="xl"
                subtitleSize="md"
                paddingSize="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">
              titleSize="3xl" / subtitleSize="lg"
            </p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Título Muy Grande"
                subtitle="Subtítulo grande para mayor énfasis"
                titleSize="3xl"
                subtitleSize="lg"
                paddingSize="md"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={headerDoc.sections[2].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Padding */}
      <DocSection title="Padding">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-6">
          <div>
            <p className="text-sm text-slate-500 mb-2">paddingSize="sm"</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Padding Small"
                subtitle="Padding interno pequeño"
                paddingSize="sm"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">paddingSize="md"</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Padding Medium"
                subtitle="Padding interno mediano"
                paddingSize="md"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">paddingSize="lg"</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Padding Large"
                subtitle="Padding interno grande"
                paddingSize="lg"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">paddingSize="xl"</p>
            <div className="bg-white rounded border border-slate-200">
              <Header
                title="Padding Extra Large"
                subtitle="Padding interno extra grande"
                paddingSize="xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Header title="Padding Small" paddingSize="sm" />
<Header title="Padding Medium" paddingSize="md" />
<Header title="Padding Large" paddingSize="lg" />
<Header title="Padding XL" paddingSize="xl" />`}
          />
        </div>
      </DocSection>

      {/* Variantes de Botón */}
      <DocSection title="Variantes de Botón de Acción">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-6">
          <div className="bg-white rounded border border-slate-200">
            <Header
              title="Botón Primary"
              subtitle="Acción principal destacada"
              paddingSize="md"
              actionButton={{
                label: "Crear nuevo",
                icon: Plus as any,
                variant: "primary",
              }}
            />
          </div>
          <div className="bg-white rounded border border-slate-200">
            <Header
              title="Botón Secondary"
              subtitle="Acción secundaria"
              paddingSize="md"
              actionButton={{
                label: "Buscar",
                icon: Search as any,
                variant: "secondary",
              }}
            />
          </div>
          <div className="bg-white rounded border border-slate-200">
            <Header
              title="Botón Outline"
              subtitle="Acción con menor énfasis"
              paddingSize="md"
              actionButton={{
                label: "Actualizar",
                icon: RefreshCw as any,
                variant: "outline",
              }}
            />
          </div>
          <div className="bg-white rounded border border-slate-200">
            <Header
              title="Botón Ghost"
              subtitle="Acción sutil"
              paddingSize="md"
              actionButton={{
                label: "Configurar",
                icon: Settings as any,
                variant: "ghost",
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Header
  title="Título"
  actionButton={{
    label: "Crear nuevo",
    icon: Plus,
    variant: "primary", // "primary" | "secondary" | "outline" | "ghost"
  }}
/>`}
          />
        </div>
      </DocSection>

      {/* Estados del Botón */}
      <DocSection title="Estados del Botón">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-6">
          <div className="bg-white rounded border border-slate-200">
            <Header
              title="Botón en Carga"
              subtitle="El botón muestra un spinner mientras procesa"
              paddingSize="md"
              actionButton={{
                label: "Guardando...",
                variant: "primary",
                loading: true,
              }}
            />
          </div>
          <div className="bg-white rounded border border-slate-200">
            <Header
              title="Botón Deshabilitado"
              subtitle="El botón no responde a interacciones"
              paddingSize="md"
              actionButton={{
                label: "No disponible",
                icon: Plus as any,
                variant: "primary",
                disabled: true,
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Header
  title="Cargando"
  actionButton={{
    label: "Guardando...",
    loading: true,
  }}
/>

<Header
  title="Deshabilitado"
  actionButton={{
    label: "No disponible",
    disabled: true,
  }}
/>`}
          />
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={headerDoc.props} />

        {/* HeaderActionButton Props */}
        {headerDoc.subComponentProps?.map((subComponent) => (
          <div key={subComponent.name}>
            <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">
              {subComponent.name}
            </h3>
            <PropsTable props={subComponent.props} />
          </div>
        ))}
      </DocSection>
    </DocPageLayout>
  );
}
