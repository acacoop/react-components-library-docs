import { Spinner, COLORS } from "@acacoop/react-components-library";
import {
  DocPageLayout,
  DocSection,
  DocDemoCard,
  PropsTable,
} from "../../components/DocPageLayout";
import { spinnerDoc } from "../../data/primitives";

export function SpinnerPage() {
  return (
    <DocPageLayout
      title={spinnerDoc.name}
      description={spinnerDoc.description}
      accentColor={spinnerDoc.accentColor}
      breadcrumbs={[
        { label: spinnerDoc.parentName, path: spinnerDoc.parentPath },
      ]}
      importCode={spinnerDoc.importCode}
    >
      {/* Sizes */}
      <DocSection title="Tamaños">
        <DocDemoCard code={spinnerDoc.sections[0].codeExamples?.[0].code}>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <Spinner size="sm" />
              <p className="text-sm text-slate-500 mt-2">sm</p>
            </div>
            <div className="text-center">
              <Spinner size="md" />
              <p className="text-sm text-slate-500 mt-2">md</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" />
              <p className="text-sm text-slate-500 mt-2">lg</p>
            </div>
            <div className="text-center">
              <Spinner size="xl" />
              <p className="text-sm text-slate-500 mt-2">xl</p>
            </div>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Colors */}
      <DocSection title="Colores">
        <DocDemoCard code={spinnerDoc.sections[1].codeExamples?.[0].code}>
          <div className="flex items-center gap-8">
            <Spinner color={COLORS.primary} />
            <Spinner color={COLORS.secondary} />
            <Spinner color={COLORS.success} />
            <Spinner color={COLORS.error} />
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={spinnerDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
