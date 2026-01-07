import { ButtonGroup, Button } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function ButtonGroupPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/components" className="hover:text-[#FF9100]">
          Components
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">ButtonGroup</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">ButtonGroup</h1>
        <p className="text-lg text-slate-600">
          Agrupa múltiples botones con espaciado y alineación consistente.
          Perfecto para acciones relacionadas en formularios y diálogos.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { ButtonGroup, Button } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Alignment */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Alineación</h2>
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
            code={`
              <ButtonGroup align="left">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
              </ButtonGroup>

              <ButtonGroup align="center">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
              </ButtonGroup>

              <ButtonGroup align="right">
                <Button variant="outline">Cancelar</Button>
                <Button variant="primary">Guardar</Button>
              </ButtonGroup>
            `}
          />
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Espaciado</h2>
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
            code={`
              <ButtonGroup spacing="sm">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
              </ButtonGroup>

              <ButtonGroup spacing="md">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
              </ButtonGroup>
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
                    align
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"left" | "center" | "right"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"left"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Alineación horizontal del grupo
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    spacing
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"sm" | "md" | "lg"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Espaciado entre botones
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    direction
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"row" | "column"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"row"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Dirección del layout
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
                  Botones a agrupar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
