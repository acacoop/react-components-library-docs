import {
  Heading,
  Text,
  Caption,
  Label,
} from "@acacoop/react-components-library";
import {
  DocPageLayout,
  DocSection,
  DocDemoCard,
  PropsTable,
} from "../../components/DocPageLayout";
import { typographyDoc } from "../../data/primitives";

export function TypographyPage() {
  return (
    <DocPageLayout
      title={typographyDoc.name}
      description={typographyDoc.description}
      accentColor={typographyDoc.accentColor}
      breadcrumbs={[
        { label: typographyDoc.parentName, path: typographyDoc.parentPath },
      ]}
      importCode={typographyDoc.importCode}
    >
      {/* Heading */}
      <DocSection
        title="Heading"
        description={typographyDoc.sections[0].description}
      >
        <DocDemoCard code={typographyDoc.sections[0].codeExamples?.[0].code}>
          <div className="space-y-4">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Text */}
      <DocSection
        title="Text"
        description={typographyDoc.sections[1].description}
      >
        <DocDemoCard code={typographyDoc.sections[1].codeExamples?.[0].code}>
          <div className="space-y-3">
            <Text size="lg">Text Large - Para párrafos destacados</Text>
            <Text size="md">Text Medium - Para párrafos normales</Text>
            <Text size="sm">Text Small - Para texto secundario</Text>
          </div>
          <div className="space-y-2 mt-6">
            <Text color="primary">Color Primary</Text>
            <Text color="secondary">Color Secondary</Text>
            <Text color="muted">Color Muted</Text>
            <Text color="success">Color Success</Text>
            <Text color="error">Color Error</Text>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Caption */}
      <DocSection
        title="Caption"
        description={typographyDoc.sections[2].description}
      >
        <DocDemoCard code={typographyDoc.sections[2].codeExamples?.[0].code}>
          <div className="space-y-3">
            <Caption>Caption - Para texto pequeño y descriptivo</Caption>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Label */}
      <DocSection
        title="Label"
        description={typographyDoc.sections[3].description}
      >
        <DocDemoCard code={typographyDoc.sections[3].codeExamples?.[0].code}>
          <div className="space-y-3">
            <Label>Label - Para etiquetas de formularios</Label>
          </div>
        </DocDemoCard>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={typographyDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
