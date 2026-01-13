import { spacing } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { DocPageLayout, DocSection } from "../../components/DocPageLayout";
import { spacingDoc } from "../../data/tokens";

export function SpacingPage() {
  return (
    <DocPageLayout
      title={spacingDoc.name}
      description={spacingDoc.description}
      accentColor={spacingDoc.accentColor}
      breadcrumbs={[
        { label: spacingDoc.parentName, path: spacingDoc.parentPath },
      ]}
      importCode={spacingDoc.importCode}
    >
      {/* Spacing Scale */}
      <DocSection title="Escala de Espaciado">
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
            code={spacingDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Padding */}
      <DocSection title="Padding">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
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
      </DocSection>

      {/* Gap */}
      <DocSection title="Gap">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
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
          <p className="text-sm text-slate-600 mt-2">gap: spacing[3]</p>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={spacingDoc.sections[2].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>
    </DocPageLayout>
  );
}
