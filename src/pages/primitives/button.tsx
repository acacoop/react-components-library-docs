import { Button } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function ButtonPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/primitives" className="hover:text-[#282D86]">
          Primitives
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Button</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Button</h1>
        <p className="text-lg text-slate-600">
          Botón base con múltiples variantes, tamaños y estados. El componente
          más fundamental para interacciones del usuario.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { Button } from '@acacoop/react-components-library';
            // o
            import { Button } from '@acacoop/react-components-library/primitives';
          `}
        />
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Variantes</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            `}
          />
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tamaños</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            `}
          />
        </div>
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Estados</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
            `}
          />
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Props</h2>
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
                    variant
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">ButtonVariant</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"primary"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Estilo visual del botón: primary, secondary, destructive,
                  outline, ghost, link
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    size
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">ButtonSize</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Tamaño del botón: sm, md, lg
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    disabled
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">boolean</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">false</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Deshabilita el botón y previene interacción
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    loading
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">boolean</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">false</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Muestra un spinner y deshabilita el botón
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    onClick
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">() =&gt; void</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Callback cuando se hace click
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
                  Contenido del botón
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
