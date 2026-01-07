import { StatCard } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function StatCardPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/components" className="hover:text-[#FF9100]">
          Components
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">StatCard</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">StatCard</h1>
        <p className="text-lg text-slate-600">
          Muestra métricas y estadísticas importantes con soporte para íconos,
          severidades y estados de carga.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { StatCard } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Basic */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Uso Básico</h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Total Usuarios" count="1,234" />
            <StatCard label="Ingresos" count="$45,678" />
            <StatCard label="Conversión" count="23.5%" />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <StatCard label="Total Usuarios" count="1,234" />
              <StatCard label="Ingresos" count="$45,678" />
              <StatCard label="Conversión" count="23.5%" />
            `}
          />
        </div>
      </section>

      {/* With Subtitle */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Con Severidad
        </h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Uptime del sistema" count="99.9%" severity="low" />
            <StatCard label="Tareas pendientes" count="23" severity="medium" />
            <StatCard label="Errores activos" count="5" severity="high" />
            <StatCard label="Notificaciones" count="12" severity="neutral" />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <StatCard
                label="Uptime del sistema"
                count="99.9%"
                severity="low"
              />
            `}
          />
        </div>
      </section>

      {/* Severities */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Severidades</h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Todo bien" count="98%" severity="low" />
            <StatCard label="Atención" count="23" severity="medium" />
            <StatCard label="Crítico" count="5" severity="high" />
            <StatCard label="Información" count="142" severity="neutral" />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <StatCard
                label="Todo bien"
                count="98%"
                severity="low"
              />

              <StatCard
                label="Atención"
                count="23"
                severity="medium"
              />

              <StatCard
                label="Crítico"
                count="5"
                severity="high"
              />

              <StatCard
                label="Información"
                count="142"
                severity="neutral"
              />
            `}
          />
        </div>
      </section>

      {/* With Icon */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Con Ícono</h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label="Usuarios activos"
              count="3,421"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              }
              severity="low"
            />
            <StatCard
              label="Ventas totales"
              count="$89,542"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              severity="neutral"
            />
            <StatCard
              label="Tareas pendientes"
              count="47"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              }
              severity="medium"
            />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <StatCard
                label="Usuarios activos"
                count="3,421"
                icon={<UsersIcon />}
                severity="low"
              />
            `}
          />
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Estado de Carga
        </h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Cargando datos..." count="--" loading={true} />
            <StatCard label="Procesando..." count="--" loading={true} />
            <StatCard
              label="Sincronizando..."
              count="--"
              loading={true}
              severity="neutral"
            />
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              <StatCard
                label="Cargando datos..."
                count="--"
                loading={true}
              />
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
                    label
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Etiqueta principal de la estadística
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    count
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string | number</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Valor numérico a mostrar
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    subtitle
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Texto descriptivo adicional
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    severity
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    "high" | "medium" | "low" | "neutral"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Nivel de severidad visual
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    icon
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">ReactNode</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Ícono opcional a mostrar
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
                  Muestra spinner de carga
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
      </section>
    </div>
  );
}
