import { NavCard } from "../../components/NavCard";

export function TokensPage() {
  const tokens = [
    {
      name: "Colors",
      path: "/tokens/colors",
      description: "Paleta de colores: brand, status, text y neutral",
      icon: "🎨",
    },
    {
      name: "Spacing",
      path: "/tokens/spacing",
      description: "Sistema de espaciado, padding, margin y gaps",
      icon: "📐",
    },
    {
      name: "Typography",
      path: "/tokens/typography",
      description: "Fuentes, tamaños, pesos y estilos de texto",
      icon: "✍️",
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Design Tokens
        </h1>
        <p className="text-lg text-slate-600">
          Tokens de diseño para mantener consistencia visual en todos los
          proyectos. Valores reutilizables para colores, espaciado, tipografía y
          más.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token) => (
          <NavCard
            key={token.path}
            title={token.name}
            description={token.description}
            icon={token.icon}
            to={token.path}
            accentColor="#43A047"
          />
        ))}
      </section>
    </div>
  );
}
