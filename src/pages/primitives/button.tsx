import { Button, IconWrapper } from "@acacoop/react-components-library";
import {
  DocPageLayout,
  DocSection,
  DocDemoCard,
  PropsTable,
} from "../../components/DocPageLayout";
import { buttonDoc } from "../../data/primitives";
import { Plus, ArrowRight, Download, Trash2, Settings } from "lucide-react";

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

      {/* Icons */}
      <DocSection title="Con Íconos">
        <DocDemoCard
          code={`import { Plus, ArrowRight, Download, Settings } from 'lucide-react';

<Button icon={<IconWrapper icon={Plus} size="sm" />}>
  Agregar
</Button>
<Button icon={<IconWrapper icon={ArrowRight} size="sm" />} iconPosition="right">
  Continuar
</Button>
<Button variant="outline" icon={<IconWrapper icon={Download} size="sm" />}>
  Descargar
</Button>
<Button variant="destructive" icon={<IconWrapper icon={Trash2} size="sm" />}>
  Eliminar
</Button>
<Button variant="ghost" size="icon" icon={<IconWrapper icon={Settings} size="sm" />} />`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button icon={<IconWrapper icon={Plus} size="sm" color="currentColor" />}>
              Agregar
            </Button>
            <Button
              icon={<IconWrapper icon={ArrowRight} size="sm" color="currentColor" />}
              iconPosition="right"
            >
              Continuar
            </Button>
            <Button
              variant="outline"
              icon={<IconWrapper icon={Download} size="sm" color="currentColor" />}
            >
              Descargar
            </Button>
            <Button
              variant="destructive"
              icon={<IconWrapper icon={Trash2} size="sm" color="currentColor" />}
            >
              Eliminar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              icon={<IconWrapper icon={Settings} size="sm" color="currentColor" />}
            />
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
