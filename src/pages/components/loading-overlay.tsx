import { LoadingOverlay, Button } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { useState } from "react";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { loadingOverlayDoc } from "../../data/components";

export function LoadingOverlayPage() {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showContainer, setShowContainer] = useState(false);

  return (
    <DocPageLayout
      title={loadingOverlayDoc.name}
      description={loadingOverlayDoc.description}
      accentColor={loadingOverlayDoc.accentColor}
      breadcrumbs={[
        {
          label: loadingOverlayDoc.parentName,
          path: loadingOverlayDoc.parentPath,
        },
      ]}
      importCode={loadingOverlayDoc.importCode}
    >
      {/* Fullscreen */}
      <DocSection title="Pantalla Completa">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Por defecto, el overlay cubre toda la pantalla y bloquea toda la
            interacción con la aplicación.
          </p>
          <Button
            onClick={() => {
              setShowFullscreen(true);
              setTimeout(() => setShowFullscreen(false), 2000);
            }}
          >
            Mostrar Fullscreen (2s)
          </Button>
          {showFullscreen && <LoadingOverlay message="Cargando datos..." />}
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={loadingOverlayDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Container */}
      <DocSection title="Sobre Contenedor">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Con{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              fullscreen=false
            </code>
            , el overlay solo cubre el contenedor padre (que debe tener{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              position: relative
            </code>
            ).
          </p>
          <Button
            onClick={() => {
              setShowContainer(true);
              setTimeout(() => setShowContainer(false), 2000);
            }}
          >
            Mostrar en Contenedor (2s)
          </Button>
          <div
            style={{
              position: "relative",
              minHeight: "300px",
              backgroundColor: "#f8fafc",
              border: "2px dashed #cbd5e1",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <h3 className="text-lg font-semibold mb-2">
              Contenedor con contenido
            </h3>
            <p className="text-slate-600 mb-4">
              Este contenido estará bloqueado cuando el overlay esté activo.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">Item 1</div>
              <div className="bg-white p-4 rounded shadow">Item 2</div>
              <div className="bg-white p-4 rounded shadow">Item 3</div>
            </div>
            {showContainer && (
              <LoadingOverlay fullScreen={false} message="Procesando..." />
            )}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={loadingOverlayDoc.sections[1].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* With Custom Message */}
      <DocSection title="Mensaje Personalizado">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              style={{
                position: "relative",
                minHeight: "200px",
                backgroundColor: "#f8fafc",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <p className="text-sm text-slate-600">Con mensaje</p>
              <LoadingOverlay
                fullScreen={false}
                message="Guardando cambios..."
              />
            </div>
            <div
              style={{
                position: "relative",
                minHeight: "200px",
                backgroundColor: "#f8fafc",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <p className="text-sm text-slate-600">Sin mensaje</p>
              <LoadingOverlay fullScreen={false} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={loadingOverlayDoc.sections[2].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={loadingOverlayDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
