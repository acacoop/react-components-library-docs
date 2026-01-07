import { NavCard } from "../../components/NavCard";

export function PrimitivesPage() {
  const primitives = [
    {
      name: "Button",
      path: "/primitives/button",
      description: "Botón base con múltiples variantes y estados",
      icon: "🔘",
    },
    {
      name: "Typography",
      path: "/primitives/typography",
      description: "Heading, Text, Caption y Label para composición de texto",
      icon: "📝",
    },
    {
      name: "Spinner",
      path: "/primitives/spinner",
      description: "Indicador de carga animado con tamaños y colores",
      icon: "⏳",
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Primitives</h1>
        <p className="text-lg text-slate-600">
          Bloques de construcción elementales para interfaces de usuario.
          Componentes simples y reutilizables que forman la base del design
          system.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {primitives.map((primitive) => (
          <NavCard
            key={primitive.path}
            title={primitive.name}
            description={primitive.description}
            icon={primitive.icon}
            to={primitive.path}
            accentColor="#282D86"
          />
        ))}
      </section>
    </div>
  );
}
