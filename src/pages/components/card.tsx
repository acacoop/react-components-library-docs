import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";
import {
  Settings,
  User,
  Bell,
  Star,
  Heart,
  Mail,
  Shield,
  Zap,
  Package,
  TrendingUp,
} from "lucide-react";

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
          Contenedor flexible para agrupar información relacionada con soporte
          para íconos, múltiples layouts y dimensiones personalizables.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`import { Card, CardHeader, CardContent, CardFooter } from '@acacoop/react-components-library';
import { Settings } from 'lucide-react'; // Para usar íconos`}
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
            code={`<Card variant="elevated">...</Card>
<Card variant="outlined">...</Card>
<Card variant="flat">...</Card>`}
          />
        </div>
      </section>

      {/* Icon Positions */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Posiciones de Ícono
        </h2>
        <p className="text-slate-600 mb-6">
          Las cards pueden incluir íconos de Lucide React en diferentes
          posiciones para crear layouts variados.
        </p>

        {/* Top Center */}
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Top Center
        </h3>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[400px] md:min-w-[400px] md:w-1/2">
            <Card
              icon={Settings}
              iconPosition="top-center"
              iconSize="xl"
              iconColor="#282D86"
              title="Configuración"
              subtitle="Ajusta las preferencias del sistema"
              width="sm"
              padding="lg"
            />
          </div>
          <div className="md:w-1/2">
            <CodeBlock
              language="tsx"
              code={`<Card
  icon={Settings}
  iconPosition="top-center"
  iconSize="xl"
  iconColor="#282D86"
  title="Configuración"
  subtitle="Ajusta las preferencias del sistema"
  width="sm"
  padding="lg"
/>`}
            />
          </div>
        </div>

        {/* Top Left */}
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Left</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[400px] md:min-w-[400px] md:w-1/2">
            <Card
              icon={User}
              iconPosition="top-left"
              iconSize="lg"
              iconColor="#FE9000"
              title="Perfil de Usuario"
              subtitle="Información personal"
              width="md"
            />
          </div>
          <div className="md:w-1/2">
            <CodeBlock
              language="tsx"
              code={`<Card
  icon={User}
  iconPosition="top-left"
  iconSize="lg"
  iconColor="#FE9000"
  title="Perfil de Usuario"
  subtitle="Información personal"
  width="md"
/>`}
            />
          </div>
        </div>

        {/* Inline Left */}
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Inline Left
        </h3>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[400px] md:min-w-[400px] md:w-1/2">
            <Card
              icon={Bell}
              iconPosition="inline-left"
              iconSize="md"
              iconColor="#EF4444"
              title="Notificaciones"
              subtitle="Tienes 5 mensajes sin leer"
              width="md"
            >
              <p className="text-slate-600 mt-3">
                Revisa tu bandeja de entrada para ver los últimos mensajes.
              </p>
            </Card>
          </div>
          <div className="md:w-1/2">
            <CodeBlock
              language="tsx"
              code={`<Card
  icon={Bell}
  iconPosition="inline-left"
  iconSize="md"
  iconColor="#EF4444"
  title="Notificaciones"
  subtitle="Tienes 5 mensajes sin leer"
  width="md"
>
  <p>Contenido adicional...</p>
</Card>`}
            />
          </div>
        </div>

        {/* Inline Right */}
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Inline Right
        </h3>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[400px] md:min-w-[400px] md:w-1/2">
            <Card
              icon={Star}
              iconPosition="inline-right"
              iconSize="lg"
              iconColor="#F59E0B"
              title="Favoritos"
              subtitle="Tus elementos guardados"
              width="md"
            />
          </div>
          <div className="md:w-1/2">
            <CodeBlock
              language="tsx"
              code={`<Card
  icon={Star}
  iconPosition="inline-right"
  iconSize="lg"
  iconColor="#F59E0B"
  title="Favoritos"
  subtitle="Tus elementos guardados"
  width="md"
/>`}
            />
          </div>
        </div>

        {/* Left */}
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Left</h3>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <Card
            icon={Shield}
            iconPosition="left"
            iconSize="xl"
            iconColor="#fff"
            iconBgColor="#282D86"
            title="Seguridad Activa"
            subtitle="Tu cuenta está protegida"
            width="lg"
          >
            <p className="text-slate-600 ">
              Todas las verificaciones de seguridad están habilitadas.
            </p>
          </Card>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card
  icon={Shield}
  iconPosition="left"
  iconSize="xl"
  iconColor="#fff"
  iconBgColor="#282D86"
  title="Seguridad Activa"
  subtitle="Tu cuenta está protegida"
  width="lg"
>
  <p>Contenido adicional...</p>
</Card>`}
        />

        {/* Right */}
        <h3 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
          Right
        </h3>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <Card
            icon={TrendingUp}
            iconPosition="right"
            iconSize="xl"
            iconColor="#8B5CF6"
            title="Estadísticas"
            subtitle="Resumen del mes"
            width="lg"
          >
            <p className="text-slate-600 mt-2">
              Has incrementado tu productividad un 25% este mes.
            </p>
          </Card>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card
  icon={TrendingUp}
  iconPosition="right"
  iconSize="xl"
  iconColor="#8B5CF6"
  title="Estadísticas"
  subtitle="Resumen del mes"
  width="lg"
>
  <p>Contenido adicional...</p>
</Card>`}
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tamaños</h2>

        <h3 className="text-lg font-semibold text-slate-900 mb-4">Width</h3>
        <div className="bg-slate-50 rounded-xl p-8 mb-4 space-y-4">
          <Card width="xs" variant="outlined">
            <CardContent>
              <p className="text-sm text-slate-600">width="xs" (200px)</p>
            </CardContent>
          </Card>
          <Card width="sm" variant="outlined">
            <CardContent>
              <p className="text-sm text-slate-600">width="sm" (280px)</p>
            </CardContent>
          </Card>
          <Card width="md" variant="outlined">
            <CardContent>
              <p className="text-sm text-slate-600">width="md" (360px)</p>
            </CardContent>
          </Card>
          <Card width="lg" variant="outlined">
            <CardContent>
              <p className="text-sm text-slate-600">width="lg" (480px)</p>
            </CardContent>
          </Card>
          <Card width="full" variant="outlined">
            <CardContent>
              <p className="text-sm text-slate-600">width="full" (100%)</p>
            </CardContent>
          </Card>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card width="xs">...</Card>  // 200px
<Card width="sm">...</Card>  // 280px
<Card width="md">...</Card>  // 360px
<Card width="lg">...</Card>  // 480px
<Card width="xl">...</Card>  // 640px
<Card width="full">...</Card> // 100%
<Card width="auto">...</Card> // auto (default)`}
        />

        <h3 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
          Height
        </h3>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <div className="flex gap-4 items-start">
            <Card width="xs" height="xs" variant="outlined">
              <CardContent>
                <p className="text-xs text-slate-600">height="xs"</p>
              </CardContent>
            </Card>
            <Card width="xs" height="sm" variant="outlined">
              <CardContent>
                <p className="text-xs text-slate-600">height="sm"</p>
              </CardContent>
            </Card>
            <Card width="xs" height="md" variant="outlined">
              <CardContent>
                <p className="text-xs text-slate-600">height="md"</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card height="xs">...</Card>  // 120px
<Card height="sm">...</Card>  // 180px
<Card height="md">...</Card>  // 240px
<Card height="lg">...</Card>  // 320px
<Card height="xl">...</Card>  // 400px
<Card height="full">...</Card> // 100%
<Card height="auto">...</Card> // auto (default)`}
        />
      </section>

      {/* Padding */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Padding</h2>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <div className="flex flex-wrap gap-4">
            <Card padding="none" variant="outlined" width="xs">
              <p className="text-xs text-slate-600">padding="none"</p>
            </Card>
            <Card padding="xs" variant="outlined" width="xs">
              <p className="text-xs text-slate-600">padding="xs"</p>
            </Card>
            <Card padding="sm" variant="outlined" width="xs">
              <p className="text-xs text-slate-600">padding="sm"</p>
            </Card>
            <Card padding="md" variant="outlined" width="xs">
              <p className="text-xs text-slate-600">padding="md"</p>
            </Card>
            <Card padding="lg" variant="outlined" width="xs">
              <p className="text-xs text-slate-600">padding="lg"</p>
            </Card>
            <Card padding="xl" variant="outlined" width="xs">
              <p className="text-xs text-slate-600">padding="xl"</p>
            </Card>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card padding="none">...</Card>
<Card padding="xs">...</Card>
<Card padding="sm">...</Card>
<Card padding="md">...</Card>  // default
<Card padding="lg">...</Card>
<Card padding="xl">...</Card>`}
        />
      </section>

      {/* Icon with Background */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Ícono con Fondo
        </h2>
        <p className="text-slate-600 mb-6">
          Usa{" "}
          <code className="bg-slate-100 px-2 py-1 rounded text-sm">
            iconBgColor
          </code>{" "}
          para agregar un fondo al contenedor del ícono.
        </p>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              icon={Zap}
              iconPosition="top-center"
              iconSize="lg"
              iconColor="#F59E0B"
              iconBgColor="#FEF3C7"
              title="Rendimiento"
              width="full"
              padding="lg"
            />
            <Card
              icon={Heart}
              iconPosition="top-center"
              iconSize="lg"
              iconColor="#EF4444"
              iconBgColor="#FEE2E2"
              title="Favoritos"
              width="full"
              padding="lg"
            />
            <Card
              icon={Package}
              iconPosition="top-center"
              iconSize="lg"
              iconColor="#3B82F6"
              iconBgColor="#DBEAFE"
              title="Paquetes"
              width="full"
              padding="lg"
            />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card
  icon={Zap}
  iconPosition="top-center"
  iconSize="lg"
  iconColor="#F59E0B"
  iconBgColor="#FEF3C7"
  title="Rendimiento"
/>`}
        />
      </section>

      {/* CardHeader with Icon */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          CardHeader con Ícono
        </h2>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <Card>
            <CardHeader
              title="Configuración de Cuenta"
              subtitle="Administra tu perfil y preferencias"
              icon={Settings}
              iconSize="md"
              iconColor="#FF9100"
            />
            <CardContent>
              <p className="text-slate-600">
                Desde aquí puedes modificar toda la información de tu cuenta.
              </p>
            </CardContent>
          </Card>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card>
  <CardHeader
    title="Configuración de Cuenta"
    subtitle="Administra tu perfil y preferencias"
    icon={Settings}
    iconSize="md"
    iconColor="#FF9100"
  />
  <CardContent>
    <p>Contenido...</p>
  </CardContent>
</Card>`}
        />
      </section>

      {/* Hoverable */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Hoverable</h2>
        <div className="bg-slate-50 rounded-xl p-8 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              hoverable
              icon={Mail}
              iconPosition="top-center"
              iconSize="lg"
              iconColor="#3B82F6"
              title="Mensajes"
              subtitle="12 sin leer"
              width="full"
            />
            <Card
              hoverable
              icon={Bell}
              iconPosition="top-center"
              iconSize="lg"
              iconColor="#EF4444"
              title="Alertas"
              subtitle="3 pendientes"
              width="full"
            />
            <Card
              hoverable
              icon={Star}
              iconPosition="top-center"
              iconSize="lg"
              iconColor="#F59E0B"
              title="Favoritos"
              subtitle="8 guardados"
              width="full"
            />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Card
  hoverable
  icon={Mail}
  iconPosition="top-center"
  iconSize="lg"
  iconColor="#3B82F6"
  title="Mensajes"
  subtitle="12 sin leer"
/>`}
        />
      </section>

      {/* With Header */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Con Header y Footer
        </h2>
        <div className="bg-slate-50 rounded-xl p-8">
          <Card>
            <CardHeader title="Título del Card" subtitle="Subtítulo opcional" />
            <CardContent>
              <p className="text-slate-600">
                El header se puede usar para mostrar títulos, acciones o
                cualquier contenido que necesites separar visualmente.
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
            code={`<Card>
  <CardHeader
    title="Título del Card"
    subtitle="Subtítulo opcional"
  />
  <CardContent>
    <p>Contenido principal...</p>
  </CardContent>
  <CardFooter>
    <button>Cancelar</button>
    <button>Confirmar</button>
  </CardFooter>
</Card>`}
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
                  <code className="text-xs">
                    "xs" | "sm" | "md" | "lg" | "xl" | "none"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Padding interno</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    width
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"auto"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Ancho del card</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    height
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"auto"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Alto del card</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    icon
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    LucideIcon | React.ComponentType
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Componente de ícono
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    iconPosition
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    "top-center" | "top-left" | "top-right" | "left" | "right" |
                    "inline-left" | "inline-right"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"top-center"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Posición del ícono
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    iconSize
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    "xs" | "sm" | "md" | "lg" | "xl"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">"md"</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Tamaño del ícono</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    iconColor
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">primary</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Color del ícono</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    iconBgColor
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Color de fondo del ícono
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    title
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">-</td>
                <td className="p-4 text-sm text-slate-600">
                  Título para layouts con ícono
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
                  Subtítulo para layouts con ícono
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
                  Efecto hover con elevación
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CardHeader Props */}
        <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">
          CardHeader Props
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
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    title
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Título del header (requerido)
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
                <td className="p-4 text-sm text-slate-600">
                  Subtítulo opcional
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    action
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">ReactNode</code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  Elemento de acción a la derecha
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    icon
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">LucideIcon</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Ícono del header</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    iconSize
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">
                    "xs" | "sm" | "md" | "lg" | "xl"
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">Tamaño del ícono</td>
              </tr>
              <tr>
                <td className="p-4">
                  <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                    iconColor
                  </code>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <code className="text-xs">string</code>
                </td>
                <td className="p-4 text-sm text-slate-600">Color del ícono</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
