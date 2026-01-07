import { Spinner, COLORS } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function SpinnerPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/primitives" className="hover:text-[#282D86]">
          Primitives
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Spinner</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Spinner</h1>
        <p className="text-lg text-slate-600">
          Indicador de carga animado. Muestra al usuario que una operación está
          en progreso.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { Spinner, COLORS } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tamaños</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
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
          <CodeBlock
            language="tsx"
            code={`
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            `}
          />
        </div>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Colores</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-8">
            <Spinner color={COLORS.primary} />
            <Spinner color={COLORS.secondary} />
            <Spinner color={COLORS.success} />
            <Spinner color={COLORS.error} />
          </div>
          <CodeBlock
            language="tsx"
            code={`
              <Spinner color={COLORS.primary} />
              <Spinner color={COLORS.secondary} />
              <Spinner color={COLORS.success} />
              <Spinner color="#custom-color" />
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
                    size
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"sm" | "md" | "lg" | "xl"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Tamaño del spinner
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    color
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">COLORS.primary</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Color del spinner (cualquier color CSS válido)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
