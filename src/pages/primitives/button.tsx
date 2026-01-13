import { Button } from "@acacoop/react-components-library";
import {
  DocPageLayout,
  DocSection,
  DocDemoCard,
  PropsTable,
} from "../../components/DocPageLayout";
import { buttonDoc } from "../../data/primitives";

export function ButtonPage() {
  return (
    <DocPageLayout
      title={buttonDoc.name}
      description={buttonDoc.description}
      accentColor={buttonDoc.accentColor}
      breadcrumbs={[
        { label: buttonDoc.parentName, path: buttonDoc.parentPath },
      ]}
      importCode={buttonDoc.importCode}
    >
      {/* Variants */}
      <DocSection title="Variantes">
        <DocDemoCard code={buttonDoc.sections[0].codeExamples?.[0].code}>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Sizes */}
      <DocSection title="Tamaños">
        <DocDemoCard code={buttonDoc.sections[1].codeExamples?.[0].code}>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* States */}
      <DocSection title="Estados">
        <DocDemoCard code={buttonDoc.sections[2].codeExamples?.[0].code}>
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={buttonDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
