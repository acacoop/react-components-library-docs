import { ButtonGroup, Button } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { buttonGroupDoc } from "../../data/components";

export function ButtonGroupPage() {
  return (
    <DocPageLayout
      title={buttonGroupDoc.name}
      description={buttonGroupDoc.description}
      accentColor={buttonGroupDoc.accentColor}
      breadcrumbs={[
        { label: buttonGroupDoc.parentName, path: buttonGroupDoc.parentPath },
      ]}
      importCode={buttonGroupDoc.importCode}
    >
      {/* Alignment */}
      <DocSection title="Alineación">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-2">align="left"</p>
              <ButtonGroup align="left">
                <Button variant="outline">Cancelar</Button>
                <Button variant="primary">Guardar</Button>
              </ButtonGroup>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">align="center"</p>
              <ButtonGroup align="center">
                <Button variant="outline">Cancelar</Button>
                <Button variant="primary">Guardar</Button>
              </ButtonGroup>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">align="right"</p>
              <ButtonGroup align="right">
                <Button variant="outline">Cancelar</Button>
                <Button variant="primary">Guardar</Button>
              </ButtonGroup>
            </div>
          </div>
          <CodeBlock
            language="tsx"
            code={buttonGroupDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Spacing */}
      <DocSection title="Espaciado">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-2">spacing="sm"</p>
              <ButtonGroup spacing="sm">
                <Button>Opción 1</Button>
                <Button>Opción 2</Button>
                <Button>Opción 3</Button>
              </ButtonGroup>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">spacing="md"</p>
              <ButtonGroup spacing="md">
                <Button>Opción 1</Button>
                <Button>Opción 2</Button>
                <Button>Opción 3</Button>
              </ButtonGroup>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">spacing="lg"</p>
              <ButtonGroup spacing="lg">
                <Button>Opción 1</Button>
                <Button>Opción 2</Button>
                <Button>Opción 3</Button>
              </ButtonGroup>
            </div>
          </div>
          <CodeBlock
            language="tsx"
            code={buttonGroupDoc.sections[1].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={buttonGroupDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
