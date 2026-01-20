import { Breadcrumbs, IconWrapper } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { breadcrumbsDoc } from "../../data/primitives";
import { Home, ChevronRight, Folder, File, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export function BreadcrumbsPage() {
  return (
    <DocPageLayout
      title={breadcrumbsDoc.name}
      description={breadcrumbsDoc.description}
      accentColor={breadcrumbsDoc.accentColor}
      breadcrumbs={[
        {
          label: breadcrumbsDoc.parentName,
          path: breadcrumbsDoc.parentPath,
        },
      ]}
      importCode={breadcrumbsDoc.importCode}
    >
      {/* Uso Básico */}
      <DocSection title="Uso Básico">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Los Breadcrumbs muestran la ubicación actual del usuario dentro de
            la jerarquía del sitio.
          </p>
          <Breadcrumbs
            items={[
              { label: "Home", href: "#" },
              { label: "Products", href: "#" },
              { label: "Category", href: "#" },
              { label: "Current Page" },
            ]}
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { Breadcrumbs } from '@acacoop/react-components-library';

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Current Page' }
  ]}
/>`}
          />
        </div>
      </DocSection>

      {/* Tamaños */}
      <DocSection title="Tamaños">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <p className="text-slate-600">
            Tres tamaños disponibles para diferentes contextos.
          </p>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Small (sm)
              </span>
              <Breadcrumbs
                size="sm"
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Medium (md) - Default
              </span>
              <Breadcrumbs
                size="md"
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Large (lg)
              </span>
              <Breadcrumbs
                size="lg"
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Breadcrumbs size="sm" items={items} />
<Breadcrumbs size="md" items={items} />  // default
<Breadcrumbs size="lg" items={items} />`}
          />
        </div>
      </DocSection>

      {/* Con Iconos */}
      <DocSection title="Con Iconos">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Agrega iconos a los items para mejor contexto visual.
          </p>
          <Breadcrumbs
            items={[
              {
                label: "Home",
                href: "#",
                icon: <IconWrapper icon={Home} size="xs" />,
              },
              {
                label: "Documents",
                href: "#",
                icon: <IconWrapper icon={Folder} size="xs" />,
              },
              {
                label: "Projects",
                href: "#",
                icon: <IconWrapper icon={Folder} size="xs" />,
              },
              {
                label: "Report.pdf",
                icon: <IconWrapper icon={File} size="xs" />,
              },
            ]}
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { Home, Folder, File } from 'lucide-react';

<Breadcrumbs
  items={[
    { label: 'Home', href: '/', icon: <IconWrapper icon={Home} size="xs" /> },
    { label: 'Documents', href: '/docs', icon: <IconWrapper icon={Folder} size="xs" /> },
    { label: 'Report.pdf', icon: <IconWrapper icon={File} size="xs" /> }
  ]}
/>`}
          />
        </div>
      </DocSection>

      {/* Separadores Personalizados */}
      <DocSection title="Separadores Personalizados">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <p className="text-slate-600">
            Personaliza el separador entre items.
          </p>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-slate-500 mb-2 block">Chevron</span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
                separator={
                  <IconWrapper icon={ChevronRight} size="xs" color="#9CA3AF" />
                }
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">Arrow</span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
                separator={<span style={{ color: "#9CA3AF" }}>→</span>}
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">Dot</span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
                separator={<span style={{ color: "#9CA3AF" }}>•</span>}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { ChevronRight } from 'lucide-react';

// Con icono
<Breadcrumbs
  items={items}
  separator={<IconWrapper icon={ChevronRight} size="xs" color="#9CA3AF" />}
/>

// Con texto
<Breadcrumbs items={items} separator="→" />
<Breadcrumbs items={items} separator="•" />`}
          />
        </div>
      </DocSection>

      {/* Colores Personalizados */}
      <DocSection title="Colores Personalizados">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <p className="text-slate-600">
            Personaliza los colores para adaptarse a tu diseño.
          </p>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-slate-500 mb-2 block">Default</span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Primary Theme
              </span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
                hoverColor="#282D86"
                activeColor="#282D86"
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Secondary Theme
              </span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Section", href: "#" },
                  { label: "Page" },
                ]}
                hoverColor="#FE9000"
                activeColor="#FE9000"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { COLORS } from '@acacoop/react-components-library';

<Breadcrumbs
  items={items}
  color={COLORS.textSecondary}
  activeColor={COLORS.primary}
  hoverColor={COLORS.primary}
/>`}
          />
        </div>
      </DocSection>

      {/* Con React Router */}
      <DocSection title="Con React Router">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Usa{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              linkComponent
            </code>{" "}
            para integrar con React Router u otras librerías de routing.
          </p>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Primitivos", href: "/primitives" },
              { label: "Breadcrumbs" },
            ]}
            hoverColor="#282D86"
            linkComponent={({
              href,
              children,
              style,
              onMouseEnter,
              onMouseLeave,
            }) => (
              <Link
                to={href}
                style={style}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {children}
              </Link>
            )}
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { Link } from 'react-router-dom';

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page' }
  ]}
  linkComponent={({ href, children, style, onMouseEnter, onMouseLeave }) => (
    <Link
      to={href}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  )}
/>`}
          />
        </div>
      </DocSection>

      {/* Con onClick */}
      <DocSection title="Con onClick">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
          <p className="text-slate-600">
            Usa{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              onClick
            </code>{" "}
            como alternativa a href para manejar la navegación
            programáticamente.
          </p>
          <Breadcrumbs
            items={[
              { label: "Home", onClick: () => alert("Navigate to Home") },
              {
                label: "Settings",
                onClick: () => alert("Navigate to Settings"),
              },
              { label: "Profile" },
            ]}
          />
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Breadcrumbs
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Settings', onClick: () => navigate('/settings') },
    { label: 'Profile' }
  ]}
/>`}
          />
        </div>
      </DocSection>

      {/* Colapso de Items */}
      <DocSection title="Colapso de Items">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <p className="text-slate-600">
            Usa{" "}
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              maxItems
            </code>{" "}
            para colapsar rutas largas mostrando ellipsis.
          </p>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Sin colapso (6 items)
              </span>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "#" },
                  { label: "Documents", href: "#" },
                  { label: "Projects", href: "#" },
                  { label: "2024", href: "#" },
                  { label: "Q4", href: "#" },
                  { label: "Report.pdf" },
                ]}
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-2 block">
                Con maxItems=4
              </span>
              <Breadcrumbs
                maxItems={4}
                items={[
                  { label: "Home", href: "#" },
                  { label: "Documents", href: "#" },
                  { label: "Projects", href: "#" },
                  { label: "2024", href: "#" },
                  { label: "Q4", href: "#" },
                  { label: "Report.pdf" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Breadcrumbs
  maxItems={4}
  items={[
    { label: 'Home', href: '/' },
    { label: 'Documents', href: '/docs' },
    { label: 'Projects', href: '/docs/projects' },
    { label: '2024', href: '/docs/projects/2024' },
    { label: 'Q4', href: '/docs/projects/2024/q4' },
    { label: 'Report.pdf' }
  ]}
/>
// Resultado: Home / ... / 2024 / Q4 / Report.pdf`}
          />
        </div>
      </DocSection>

      {/* Casos de Uso */}
      <DocSection title="Casos de Uso">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
          <div>
            <p className="text-slate-600 mb-3 font-medium">
              Panel de Administración:
            </p>
            <Breadcrumbs
              items={[
                {
                  label: "Dashboard",
                  href: "#",
                  icon: <IconWrapper icon={Home} size="xs" />,
                },
                {
                  label: "Users",
                  href: "#",
                  icon: <IconWrapper icon={User} size="xs" />,
                },
                { label: "John Doe" },
              ]}
              separator={
                <IconWrapper icon={ChevronRight} size="xs" color="#9CA3AF" />
              }
              hoverColor="#282D86"
            />
          </div>
          <div>
            <p className="text-slate-600 mb-3 font-medium">Configuración:</p>
            <Breadcrumbs
              items={[
                {
                  label: "Settings",
                  href: "#",
                  icon: <IconWrapper icon={Settings} size="xs" />,
                },
                { label: "Account", href: "#" },
                { label: "Security" },
              ]}
              hoverColor="#282D86"
            />
          </div>
          <div>
            <p className="text-slate-600 mb-3 font-medium">E-commerce:</p>
            <Breadcrumbs
              size="sm"
              items={[
                { label: "Home", href: "#" },
                { label: "Electronics", href: "#" },
                { label: "Smartphones", href: "#" },
                { label: "iPhone 15 Pro" },
              ]}
              separator="›"
              hoverColor="#FE9000"
            />
          </div>
        </div>
      </DocSection>

      {/* Props */}
      <DocSection title="Props">
        <PropsTable props={breadcrumbsDoc.props} />
      </DocSection>
    </DocPageLayout>
  );
}
