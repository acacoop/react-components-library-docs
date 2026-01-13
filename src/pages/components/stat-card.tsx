import { StatCard } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { statCardDoc } from "../../data/components";

export function StatCardPage() {
  return (
    <DocPageLayout
      title={statCardDoc.name}
      description={statCardDoc.description}
      accentColor={statCardDoc.accentColor}
      breadcrumbs={[
        { label: statCardDoc.parentName, path: statCardDoc.parentPath },
      ]}
      importCode={statCardDoc.importCode}
    >
      {/* Basic */}
      <DocSection title="Uso Básico">
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
            code={statCardDoc.sections[0].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Severities */}
      <DocSection title="Severidades">
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
            code={statCardDoc.sections[1].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* With Icon */}
      <DocSection title="Con Ícono">
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
            code={statCardDoc.sections[2].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Loading State */}
      <DocSection title="Estado de Carga">
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
            code={statCardDoc.sections[3].codeExamples?.[0].code || ""}
          />
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={statCardDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
