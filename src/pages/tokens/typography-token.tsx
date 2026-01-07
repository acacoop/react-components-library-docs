import {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function TypographyPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/tokens" className="hover:text-[#43A047]">
          Tokens
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Typography</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Typography</h1>
        <p className="text-lg text-slate-600">
          Sistema tipográfico consistente. Incluye familias de fuente, tamaños,
          pesos y alturas de línea.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { typography } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Font Families */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Familias de Fuente
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Primary
              </p>
              <p
                style={{
                  fontFamily: fontFamily.sans,
                  fontSize: "18px",
                  color: "#1f2937",
                }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <code className="text-sm text-slate-600 mt-1 block">
                {fontFamily.sans}
              </code>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-2">Mono</p>
              <p
                style={{
                  fontFamily: fontFamily.mono,
                  fontSize: "18px",
                  color: "#1f2937",
                }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <code className="text-sm text-slate-600 mt-1 block">
                {fontFamily.mono}
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              fontFamily.sans  // "${fontFamily.sans}"
              fontFamily.mono     // "${fontFamily.mono}"
            `}
          />
        </div>
      </section>

      {/* Font Sizes */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Tamaños de Fuente
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-4">
            {Object.entries(fontSize).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded min-w-[60px]">
                    {key}
                  </code>
                  <span className="text-sm text-slate-600">{value}px</span>
                </div>
                <div
                  style={{
                    fontSize: value,
                    fontFamily: fontFamily.sans,
                    color: "#1f2937",
                  }}
                >
                  The quick brown fox
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              fontSize.xs      // ${fontSize.xs}px
              fontSize.sm      // ${fontSize.sm}px
              fontSize.md      // ${fontSize.md}px
              fontSize.lg      // ${fontSize.lg}px
              fontSize.xl      // ${fontSize.xl}px
              fontSize['2xl']  // ${fontSize["2xl"]}px
              fontSize['3xl']  // ${fontSize["3xl"]}px
              fontSize['4xl']  // ${fontSize["4xl"]}px
              fontSize['5xl']  // ${fontSize["5xl"]}px
            `}
          />
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Pesos de Fuente
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-4">
            {Object.entries(fontWeight).map(([key, value]) => (
              <div key={key} className="py-3">
                <div className="flex items-center gap-4 mb-2">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded min-w-[80px]">
                    {key}
                  </code>
                  <span className="text-sm text-slate-600">{value}</span>
                </div>
                <p
                  style={{
                    fontWeight: value,
                    fontFamily: fontFamily.sans,
                    fontSize: "18px",
                    color: "#1f2937",
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              fontWeight.light    // ${fontWeight.light}
              fontWeight.normal   // ${fontWeight.normal}
              fontWeight.medium   // ${fontWeight.medium}
              fontWeight.semibold // ${fontWeight.semibold}
              fontWeight.bold     // ${fontWeight.bold}
            `}
          />
        </div>
      </section>

      {/* Line Heights */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Alturas de Línea
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-6">
            {Object.entries(lineHeight).map(([key, value]) => (
              <div key={key} className="py-3">
                <div className="flex items-center gap-4 mb-2">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded min-w-[80px]">
                    {key}
                  </code>
                  <span className="text-sm text-slate-600">{value}</span>
                </div>
                <div
                  style={{
                    lineHeight: value,
                    fontFamily: fontFamily.sans,
                    fontSize: "16px",
                    color: "#1f2937",
                    border: "1px solid #e2e8f0",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              lineHeight.tight   // ${lineHeight.tight}
              lineHeight.normal  // ${lineHeight.normal}
              lineHeight.relaxed // ${lineHeight.relaxed}
              lineHeight.loose   // ${lineHeight.loose}
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
          <div className="space-y-6">
            {/* Heading Example */}
            <div>
              <h3
                style={{
                  fontFamily: fontFamily.sans,
                  fontSize: fontSize["5xl"],
                  fontWeight: fontWeight.bold,
                  lineHeight: lineHeight.tight,
                  color: "#1f2937",
                  marginBottom: "8px",
                }}
              >
                Título Principal
              </h3>
              <p
                style={{
                  fontFamily: fontFamily.sans,
                  fontSize: fontSize.md,
                  fontWeight: fontWeight.normal,
                  lineHeight: lineHeight.normal,
                  color: "#6b7280",
                }}
              >
                Este es un párrafo descriptivo con tipografía consistente.
              </p>
            </div>

            {/* Code Example */}
            <div>
              <p
                style={{
                  fontFamily: fontFamily.sans,
                  fontSize: fontSize.sm,
                  fontWeight: fontWeight.medium,
                  color: "#1f2937",
                  marginBottom: "8px",
                }}
              >
                Código fuente:
              </p>
              <code
                style={{
                  fontFamily: fontFamily.mono,
                  fontSize: fontSize.sm,
                  backgroundColor: "#f8fafc",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  color: "#1f2937",
                }}
              >
                const greeting = "Hello, World!";
              </code>
            </div>

            {/* Button Text */}
            <div>
              <button
                style={{
                  fontFamily: fontFamily.sans,
                  fontSize: fontSize.sm,
                  fontWeight: fontWeight.medium,
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Botón de Acción
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              // Título principal
              <h1 style={{
                fontFamily: fontFamily.sans,
                fontSize: fontSize['5xl'],
                fontWeight: fontWeight.bold,
                lineHeight: lineHeight.tight
              }}>
                Título
              </h1>

              // Texto del cuerpo
              <p style={{
                fontFamily: fontFamily.sans,
                fontSize: fontSize.md,
                fontWeight: fontWeight.normal,
                lineHeight: lineHeight.normal
              }}>
                Contenido del párrafo
              </p>

              // Código fuente
              <code style={{
                fontFamily: fontFamily.mono,
                fontSize: fontSize.sm
              }}>
                const code = "example";
              </code>
            `}
          />
        </div>
      </section>
    </div>
  );
}
