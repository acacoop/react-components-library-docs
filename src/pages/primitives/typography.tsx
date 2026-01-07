import {
  Heading,
  Text,
  Caption,
  Label,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function TypographyPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/primitives" className="hover:text-[#282D86]">
          Primitives
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Typography</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Typography</h1>
        <p className="text-lg text-slate-600">
          Componentes de texto para construir jerarquías tipográficas
          consistentes. Incluye Heading, Text, Caption y Label.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { Heading, Text, Caption, Label } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Heading */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Heading</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="space-y-4">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
            `}
          />
        </div>
      </section>

      {/* Text */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Text</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="space-y-3">
            <Text size="lg">Text Large - Para párrafos destacados</Text>
            <Text size="md">Text Medium - Para párrafos normales</Text>
            <Text size="sm">Text Small - Para texto secundario</Text>
          </div>
          <div className="space-y-2">
            <Text color="primary">Color Primary</Text>
            <Text color="secondary">Color Secondary</Text>
            <Text color="muted">Color Muted</Text>
            <Text color="success">Color Success</Text>
            <Text color="error">Color Error</Text>
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Text size="lg">Large text</Text>
              <Text size="md">Medium text</Text>
              <Text size="sm">Small text</Text>
              
              <Text color="primary">Primary color</Text>
              <Text color="error">Error color</Text>
            `}
          />
        </div>
      </section>

      {/* Caption & Label */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Caption & Label
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="space-y-3">
            <Caption>Caption - Para texto pequeño y descriptivo</Caption>
            <Label>Label - Para etiquetas de formularios</Label>
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Caption>Small caption text</Caption>
              <Label>Form label</Label>
            `}
          />
        </div>
      </section>

      {/* Props Tables */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Props</h2>

        <div className="space-y-8">
          {/* Heading Props */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Heading
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Prop
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Tipo
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Default
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Descripción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4">
                      <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                        level
                      </code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">1 | 2 | 3 | 4 | 5 | 6</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">1</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Nivel del heading (h1 a h6)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                        children
                      </code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">ReactNode</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">-</td>
                    <td className="p-4 text-sm text-slate-600">
                      Contenido del heading
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Text Props */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Text</h3>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Prop
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Tipo
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Default
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-900">
                      Descripción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4">
                      <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                        size
                      </code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">"sm" | "md" | "lg"</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">"md"</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Tamaño del texto
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                        color
                      </code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">TypographyColor</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">"primary"</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Color del texto: primary, secondary, muted, success,
                      error, warning
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                        children
                      </code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <code className="text-xs">ReactNode</code>
                    </td>
                    <td className="p-4 text-sm text-slate-600">-</td>
                    <td className="p-4 text-sm text-slate-600">
                      Contenido del texto
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
