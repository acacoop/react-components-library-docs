import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
};

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
          Sistema tipográfico del diseño. Incluye familias de fuente, tamaños,
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
              <p className="text-sm text-slate-500 mb-2">Primary</p>
              <p
                style={{
                  fontFamily: typography.fontFamily.sans,
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <code className="text-sm text-slate-600 mt-2 block">
                {typography.fontFamily.sans}
              </code>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">Mono</p>
              <p
                style={{
                  fontFamily: typography.fontFamily.mono,
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <code className="text-sm text-slate-600 mt-2 block">
                {typography.fontFamily.mono}
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              typography.fontFamily.sans  // "${typography.fontFamily.sans}"
              typography.fontFamily.mono     // "${typography.fontFamily.mono}"
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
            {Object.entries(typography.fontSize).map(([key, value]) => (
              <div key={key} className="flex items-baseline gap-4">
                <div className="w-16 text-sm font-mono text-slate-600">
                  {key}: {value}
                </div>
                <div className="flex-1 overflow-x-auto">
                  <div
                    style={{
                      fontSize: value,
                      fontFamily: typography.fontFamily.sans,
                      lineHeight: typography.lineHeight.normal,
                      whiteSpace: "nowrap",
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              typography.fontSize.xs    // "${typography.fontSize.xs}"
              typography.fontSize.sm    // "${typography.fontSize.sm}"
              typography.fontSize.md    // "${typography.fontSize.md}"
              typography.fontSize.lg    // "${typography.fontSize.lg}"
              typography.fontSize.xl    // "${typography.fontSize.xl}"
              typography.fontSize['2xl'] // "${typography.fontSize["2xl"]}"
              typography.fontSize['3xl'] // "${typography.fontSize["3xl"]}"
              typography.fontSize['4xl'] // "${typography.fontSize["4xl"]}"
              typography.fontSize['5xl'] // "${typography.fontSize["5xl"]}"
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
            {Object.entries(typography.fontWeight).map(([key, value]) => (
              <div key={key} className="flex items-baseline gap-4">
                <div className="w-20 text-sm font-mono text-slate-600">
                  {key}: {value}
                </div>
                <div className="flex-1 overflow-x-auto">
                  <div
                    style={{
                      fontSize: typography.fontSize.lg,
                      fontFamily: typography.fontFamily.sans,
                      fontWeight: value,
                      lineHeight: typography.lineHeight.normal,
                      whiteSpace: "nowrap",
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              typography.fontWeight.light    // ${typography.fontWeight.light}
              typography.fontWeight.normal   // ${typography.fontWeight.normal}
              typography.fontWeight.medium   // ${typography.fontWeight.medium}
              typography.fontWeight.semibold // ${typography.fontWeight.semibold}
              typography.fontWeight.bold     // ${typography.fontWeight.bold}
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
            {Object.entries(typography.lineHeight).map(([key, value]) => (
              <div
                key={key}
                className="border-b border-slate-100 pb-4 last:border-b-0"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-20 text-sm font-mono text-slate-600">
                    {key}: {value}
                  </div>
                  <div className="text-sm text-slate-500">
                    (línea de base visible)
                  </div>
                </div>
                <div
                  style={{
                    fontSize: typography.fontSize.md,
                    fontFamily: typography.fontFamily.sans,
                    lineHeight: value,
                    backgroundImage:
                      "linear-gradient(to bottom, transparent 0%, transparent calc(1em - 1px), #e2e8f0 calc(1em - 1px), #e2e8f0 1em)",
                    backgroundSize: "100% 1em",
                    padding: "8px 0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              typography.lineHeight.tight   // ${typography.lineHeight.tight}
              typography.lineHeight.normal  // ${typography.lineHeight.normal}
              typography.lineHeight.relaxed // ${typography.lineHeight.relaxed}
              typography.lineHeight.loose   // ${typography.lineHeight.loose}
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
            {/* Heading hierarchy */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Jerarquía de Títulos
              </h3>
              <div className="space-y-3">
                <h1
                  style={{
                    fontSize: typography.fontSize["5xl"],
                    fontWeight: typography.fontWeight.bold,
                    lineHeight: typography.lineHeight.tight,
                    fontFamily: typography.fontFamily.sans,
                  }}
                >
                  Título Principal (H1)
                </h1>
                <h2
                  style={{
                    fontSize: typography.fontSize.xl,
                    fontWeight: typography.fontWeight.semibold,
                    lineHeight: typography.lineHeight.tight,
                    fontFamily: typography.fontFamily.sans,
                  }}
                >
                  Subtítulo (H2)
                </h2>
                <h3
                  style={{
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.medium,
                    lineHeight: typography.lineHeight.normal,
                    fontFamily: typography.fontFamily.sans,
                  }}
                >
                  Sección (H3)
                </h3>
              </div>
            </div>

            {/* Body text */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Texto del Cuerpo
              </h3>
              <div className="space-y-3">
                <p
                  style={{
                    fontSize: typography.fontSize.md,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.relaxed,
                    fontFamily: typography.fontFamily.sans,
                  }}
                >
                  Este es un párrafo de texto normal con line-height relajado
                  para mejor legibilidad. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p
                  style={{
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.normal,
                    fontFamily: typography.fontFamily.sans,
                    color: "#64748b",
                  }}
                >
                  Texto secundario más pequeño para información complementaria o
                  captions.
                </p>
              </div>
            </div>

            {/* Code */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Código
              </h3>
              <code
                style={{
                  fontSize: typography.fontSize.sm,
                  fontFamily: typography.fontFamily.mono,
                  backgroundColor: "#f1f5f9",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  color: "#1e293b",
                }}
              >
                const example = "Hello, World!";
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              // Título principal
              <h1 style={{
                fontSize: typography.fontSize['5xl'],
                fontWeight: typography.fontWeight.bold,
                lineHeight: typography.lineHeight.tight
              }}>
                Título
              </h1>

              // Texto del cuerpo
              <p style={{
                fontSize: typography.fontSize.md,
                lineHeight: typography.lineHeight.relaxed
              }}>
                Contenido...
              </p>

              // Código
              <code style={{
                fontFamily: typography.fontFamily.mono,
                fontSize: typography.fontSize.sm
              }}>
                código aquí
              </code>
            `}
          />
        </div>
      </section>
    </div>
  );
}
