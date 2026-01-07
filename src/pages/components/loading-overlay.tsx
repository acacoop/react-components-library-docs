import { LoadingOverlay, Button } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";
import { useState } from "react";

export function LoadingOverlayPage() {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showContainer, setShowContainer] = useState(false);

  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/components" className="hover:text-[#FF9100]">
          Components
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">LoadingOverlay</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          LoadingOverlay
        </h1>
        <p className="text-lg text-slate-600">
          Overlay de carga que puede cubrir toda la pantalla o un contenedor
          específico, bloqueando la interacción durante procesos asíncronos.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { LoadingOverlay } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Fullscreen */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Pantalla Completa
        </h2>
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
            code={`
              const [isLoading, setIsLoading] = useState(false);

              <Button onClick={() => setIsLoading(true)}>
                Cargar datos
              </Button>

              {isLoading && (
                <LoadingOverlay message="Cargando datos..." />
              )}
            `}
          />
        </div>
      </section>

      {/* Container */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Sobre Contenedor
        </h2>
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
            code={`
              <div style={{ position: 'relative', minHeight: '300px' }}>
                <h3>Contenido...</h3>
                <p>Más contenido...</p>

                {isLoading && (
                  <LoadingOverlay
                    fullScreen={false}
                    message="Procesando..."
                  />
                )}
              </div>
            `}
          />
        </div>
      </section>

      {/* With Custom Message */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Mensaje Personalizado
        </h2>
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
            code={`
              <LoadingOverlay message="Guardando cambios..." />
              <LoadingOverlay />
            `}
          />
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Props</h2>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-900">
                  Prop
                </th>
                <th className="text-left p-4 font-semibold text-slate-900">
                  Tipo
                </th>
                <th className="text-left p-4 font-semibold text-slate-900">
                  Default
                </th>
                <th className="text-left p-4 font-semibold text-slate-900">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    fullScreen
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">boolean</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">true</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Si cubre toda la pantalla o solo el contenedor
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    message
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Texto descriptivo del proceso
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    opacity
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">number</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">0.5</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Opacidad del fondo (0-1)
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    spinnerSize
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"sm" | "md" | "lg"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Tamaño del spinner
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    spinnerColor
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"primary"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Color del spinner
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
