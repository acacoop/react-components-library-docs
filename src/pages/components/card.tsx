import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function CardPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/components" className="hover:text-[#FF9100]">
          Components
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Card</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Card</h1>
        <p className="text-lg text-slate-600">
          Contenedor flexible para agrupar información relacionada con header,
          contenido y footer opcionales.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { Card } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Variantes</h2>
        <div className="bg-slate-50 rounded-xl p-8 space-y-6">
          <Card variant="elevated">
            <CardContent>
              <h3 className="font-semibold text-lg mb-2">Elevated Card</h3>
              <p className="text-slate-600">Card con sombra elevada.</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <h3 className="font-semibold text-lg mb-2">Outlined Card</h3>
              <p className="text-slate-600">Card con borde más pronunciado.</p>
            </CardContent>
          </Card>

          <Card variant="flat">
            <CardContent>
              <h3 className="font-semibold text-lg mb-2">Flat Card</h3>
              <p className="text-slate-600">Card plano sin sombra ni borde.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <Card variant="elevated">
                <CardContent>
                  <h3>Elevated Card</h3>
                  <p>Contenido...</p>
                </CardContent>
              </Card>

              <Card variant="outlined">
                <CardContent>
                  <h3>Outlined Card</h3>
                  <p>Contenido...</p>
                </CardContent>
              </Card>

              <Card variant="flat">
                <CardContent>
                  <h3>Flat Card</h3>
                  <p>Contenido...</p>
                </CardContent>
              </Card>
            `}
          />
        </div>
      </section>

      {/* With Header */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Con Header</h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <Card>
            <CardHeader title="Título del Card" subtitle="Subtítulo opcional" />
            <CardContent>
              <p className="text-slate-600">
                El header se puede usar para mostrar títulos, acciones o
                cualquier contenido que necesites separar visualmente.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <Card>
                <CardHeader
                  title="Título del Card"
                  subtitle="Subtítulo opcional"
                />
                <CardContent>
                  <p>Contenido principal...</p>
                </CardContent>
              </Card>
            `}
          />
        </div>
      </section>

      {/* With Footer */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Con Footer</h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <Card>
            <CardContent>
              <p className="text-slate-600">
                El footer es ideal para mostrar acciones, botones o información
                complementaria al final del card.
              </p>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
                Cancelar
              </button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Confirmar
              </button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <Card>
                <CardContent>
                  <p>Contenido principal...</p>
                </CardContent>
                <CardFooter>
                  <button>Cancelar</button>
                  <button>Confirmar</button>
                </CardFooter>
              </Card>
            `}
          />
        </div>
      </section>

      {/* Complete Example */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Ejemplo Completo
        </h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <Card variant="elevated">
            <CardHeader
              title="Configuración de Perfil"
              subtitle="Actualiza tu información personal"
            />
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="juan@example.com"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-slate-500 mr-auto">
                Última actualización: hace 2 días
              </span>
              <button className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
                Descartar
              </button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Guardar Cambios
              </button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <Card variant="elevated">
                <CardHeader
                  title="Configuración de Perfil"
                  subtitle="Actualiza tu información personal"
                />
                <CardContent>
                  <div className="space-y-4">
                    {/* Form fields */}
                  </div>
                </CardContent>
                <CardFooter>
                  <span>Última actualización: hace 2 días</span>
                  <button>Descartar</button>
                  <button>Guardar Cambios</button>
                </CardFooter>
              </Card>
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
                  <code className="text-xs">
                    "elevated" | "outlined" | "flat"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"elevated"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Estilo visual del card
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    padding
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"sm" | "md" | "lg" | "none"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Padding interno del card
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    hoverable
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">boolean</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">false</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Si el card responde al hover con elevación
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    className
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Clases CSS adicionales
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Subcomponentes
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-900">CardHeader</h4>
              <p className="text-sm text-slate-600 mb-2">
                Header del card con título y subtítulo opcional
              </p>
              <CodeBlock
                language="tsx"
                code={`
                  <CardHeader title="Título" subtitle="Subtítulo" />
                `}
              />
            </div>
            <div>
              <h4 className="font-medium text-slate-900">CardContent</h4>
              <p className="text-sm text-slate-600 mb-2">
                Contenido principal del card
              </p>
              <CodeBlock
                language="tsx"
                code={`
                  <CardContent>
                    <p>Contenido aquí</p>
                  </CardContent>
                `}
              />
            </div>
            <div>
              <h4 className="font-medium text-slate-900">CardFooter</h4>
              <p className="text-sm text-slate-600 mb-2">
                Footer del card con acciones o información adicional
              </p>
              <CodeBlock
                language="tsx"
                code={`
                  <CardFooter align="right">
                    <button>Acción</button>
                  </CardFooter>
                `}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
