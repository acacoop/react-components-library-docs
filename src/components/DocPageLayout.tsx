/**
 * DocPageLayout
 * Layout reutilizable para páginas de documentación
 */
import { Link } from "react-router-dom";
import { Header } from "@acacoop/react-components-library/components";
import { Card } from "@acacoop/react-components-library";
import { CodeBlock } from "./CodeBlock";
import type { PropDefinition } from "../data/primitives";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface DocPageLayoutProps {
  /** Título de la página */
  title: string;
  /** Descripción de la página */
  description: string;
  /** Color de acento para breadcrumb hover */
  accentColor: string;
  /** Items del breadcrumb */
  breadcrumbs: BreadcrumbItem[];
  /** Código de importación */
  importCode: string;
  /** Contenido principal de la página */
  children: React.ReactNode;
}

export function DocPageLayout({
  title,
  description,
  accentColor,
  breadcrumbs,
  importCode,
  children,
}: DocPageLayoutProps) {
  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600">
        {breadcrumbs.map((item, index) => (
          <span key={item.path}>
            <Link
              to={item.path}
              className="transition-colors"
              style={{ color: "inherit" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              {item.label}
            </Link>
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
        {" / "}
        <span className="text-slate-900 font-medium">{title}</span>
      </nav>

      {/* Header */}
      <Header
        title={title}
        subtitle={description}
        width="full"
        paddingSize="sm"
        titleSize="3xl"
        subtitleSize="md"
      />

      {/* Import Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock language="tsx" code={importCode} />
      </section>

      {/* Content */}
      {children}
    </div>
  );
}

interface DocSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
      {description && <p className="text-slate-600 mb-6">{description}</p>}
      {children}
    </section>
  );
}

interface DocDemoCardProps {
  children: React.ReactNode;
  code?: string;
}

export function DocDemoCard({ children, code }: DocDemoCardProps) {
  return (
    <div className="space-y-4">
      <Card variant="flat" width="full" padding="lg">
        <div className="bg-slate-50 rounded-xl p-8">{children}</div>
      </Card>
      {code && <CodeBlock language="tsx" code={code} />}
    </div>
  );
}

interface PropsTableProps {
  props: PropDefinition[];
  title?: string;
}

export function PropsTable({ props, title }: PropsTableProps) {
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      )}
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
            {props.map((prop) => (
              <tr key={prop.name}>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    {prop.name}
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">{prop.type}</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">{prop.default}</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
