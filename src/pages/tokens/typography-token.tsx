import {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { DocPageLayout, DocSection } from "../../components/DocPageLayout";
import { typographyTokenDoc } from "../../data/tokens";

export function TypographyPage() {
  return (
    <DocPageLayout
      title={typographyTokenDoc.name}
      description={typographyTokenDoc.description}
      accentColor={typographyTokenDoc.accentColor}
      breadcrumbs={[
        {
          label: typographyTokenDoc.parentName,
          path: typographyTokenDoc.parentPath,
        },
      ]}
      importCode={typographyTokenDoc.importCode}
    >
      {/* Font Families */}
      <DocSection title="Familias de Fuente">
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
            code={typographyTokenDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Font Sizes */}
      <DocSection title="Tamaños de Fuente">
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
            code={typographyTokenDoc.sections[1].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Font Weights */}
      <DocSection title="Pesos de Fuente">
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
            code={typographyTokenDoc.sections[2].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Line Heights */}
      <DocSection title="Alturas de Línea">
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
            code={typographyTokenDoc.sections[3].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Usage Examples */}
      <DocSection title="Ejemplos de Uso">
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
            code={typographyTokenDoc.sections[4].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>
    </DocPageLayout>
  );
}
