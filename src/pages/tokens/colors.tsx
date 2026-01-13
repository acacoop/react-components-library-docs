import { colors } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { DocPageLayout, DocSection } from "../../components/DocPageLayout";
import { colorsDoc } from "../../data/tokens";

export function ColorsPage() {
  return (
    <DocPageLayout
      title={colorsDoc.name}
      description={colorsDoc.description}
      accentColor={colorsDoc.accentColor}
      breadcrumbs={[
        { label: colorsDoc.parentName, path: colorsDoc.parentPath },
      ]}
      importCode={colorsDoc.importCode}
    >
      {/* Brand Colors */}
      <DocSection title="Colores de Marca">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div
                style={{
                  backgroundColor: colors.brand.primary,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Primary</p>
              <code className="text-sm text-slate-600">
                {colors.brand.primary}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.brand.secondary,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Secondary</p>
              <code className="text-sm text-slate-600">
                {colors.brand.secondary}
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={colorsDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Status Colors */}
      <DocSection title="Colores de Estado">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div
                style={{
                  backgroundColor: colors.status.success,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Success</p>
              <code className="text-sm text-slate-600">
                {colors.status.success}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.status.warning,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Warning</p>
              <code className="text-sm text-slate-600">
                {colors.status.warning}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.status.error,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Error</p>
              <code className="text-sm text-slate-600">
                {colors.status.error}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.status.info,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Info</p>
              <code className="text-sm text-slate-600">
                {colors.status.info}
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={colorsDoc.sections[1].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Text Colors */}
      <DocSection title="Colores de Texto">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.primary,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Primary</p>
              <code className="text-sm text-slate-600">
                {colors.text.primary}
              </code>
            </div>
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.secondary,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Secondary</p>
              <code className="text-sm text-slate-600">
                {colors.text.secondary}
              </code>
            </div>
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.muted,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Muted</p>
              <code className="text-sm text-slate-600">
                {colors.text.muted}
              </code>
            </div>
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.inverse,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Inverse</p>
              <code className="text-sm text-slate-600">
                {colors.text.inverse}
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={colorsDoc.sections[2].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Neutral Colors */}
      <DocSection title="Colores Neutrales">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(colors.neutral).map(([key, value]) => (
              <div key={key}>
                <div
                  style={{
                    backgroundColor: value,
                    height: "80px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <p className="font-semibold text-slate-900 mt-2 text-sm capitalize">
                  {key}
                </p>
                <code className="text-xs text-slate-600">{value}</code>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={colorsDoc.sections[3].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>
    </DocPageLayout>
  );
}
