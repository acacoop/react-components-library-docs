import { spacing } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function SpacingPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/tokens" className="hover:text-[#43A047]">
          Tokens
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Spacing</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Spacing</h1>
        <p className="text-lg text-slate-600">
          Sistema de espaciado consistente. Incluye valores para padding,
          margin, gap y otros espaciados.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { spacing } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Spacing Scale */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Escala de Espaciado
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-6">
            {Object.entries(spacing).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-20 text-sm font-mono text-slate-600">
                  {key}: {value}px
                </div>
                <div
                  style={{
                    width: `${value}px`,
                    height: "24px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "4px",
                  }}
                />
                <div className="text-sm text-slate-600">{value}px de ancho</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              spacing[1]   // ${spacing[1]} (xs)
              spacing[2]   // ${spacing[2]} (sm)
              spacing[3]   // ${spacing[3]} (md)
              spacing[4]   // ${spacing[4]} (lg)
              spacing[6]   // ${spacing[6]} (xl)
              spacing[8]   // ${spacing[8]} (xxl)
            `}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Ejemplos de Uso
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-8">
            {/* Padding */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Padding
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  style={{
                    padding: `${spacing[2]}px`,
                    backgroundColor: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                >
                  <p className="text-sm text-slate-600">padding: spacing[2]</p>
                </div>
                <div
                  style={{
                    padding: `${spacing[3]}px`,
                    backgroundColor: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                >
                  <p className="text-sm text-slate-600">padding: spacing[3]</p>
                </div>
                <div
                  style={{
                    padding: `${spacing[4]}px`,
                    backgroundColor: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                >
                  <p className="text-sm text-slate-600">padding: spacing[4]</p>
                </div>
              </div>
            </div>

            {/* Margin */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Margin
              </h3>
              <div className="space-y-4">
                <div
                  style={{
                    marginBottom: `${spacing[3]}px`,
                    backgroundColor: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <p className="text-sm text-slate-600">
                    marginBottom: spacing[3]
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <p className="text-sm text-slate-600">Elemento siguiente</p>
                </div>
              </div>
            </div>

            {/* Gap */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Gap</h3>
              <div
                style={{
                  display: "flex",
                  gap: `${spacing[3]}px`,
                  backgroundColor: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "40px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "4px",
                  }}
                />
                <div
                  style={{
                    width: "60px",
                    height: "40px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "4px",
                  }}
                />
                <div
                  style={{
                    width: "60px",
                    height: "40px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <p className="text-sm text-slate-600 mt-2">gap: spacing.md</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              // Padding
              <div style={{ padding: spacing.md }}>
                Contenido con padding
              </div>

              // Margin
              <div style={{ marginBottom: spacing[4] }}>
                Elemento con margen inferior
              </div>

              // Gap en flexbox
              <div style={{ display: 'flex', gap: spacing[2] }}>
                <div>Item 1</div>
                <div>Item 2</div>
              </div>
            `}
          />
        </div>
      </section>

      {/* Component Integration */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Integración con Componentes
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Button con padding personalizado
              </h3>
              <button
                style={{
                  padding: `${spacing[2]}px ${spacing[3]}px`,
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Botón con spacing
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Card con espaciado interno
              </h3>
              <div
                style={{
                  padding: spacing[4],
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              >
                <h4 className="font-semibold text-slate-900 mb-2">
                  Título del Card
                </h4>
                <p className="text-slate-600 text-sm">
                  Contenido del card con padding: spacing[4] ({spacing[4]}px)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              // Botón con padding
              <button style={{
                padding: \`\${spacing[2]}px \${spacing[3]}px\`
              }}>
                Botón
              </button>

              // Card con padding
              <div style={{ padding: spacing[4] }}>
                <h3>Título</h3>
                <p>Contenido</p>
              </div>
            `}
          />
        </div>
      </section>
    </div>
  );
}
