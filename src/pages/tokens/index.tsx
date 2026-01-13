import { Card, CardFooter } from "@acacoop/react-components-library";
import { Palette, Ruler, Type } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export function TokensPage() {
  const tokens: {
    name: string;
    path: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      name: "Colors",
      path: "/tokens/colors",
      description: "Paleta de colores: brand, status, text y neutral",
      icon: Palette,
    },
    {
      name: "Spacing",
      path: "/tokens/spacing",
      description: "Sistema de espaciado, padding, margin y gaps",
      icon: Ruler,
    },
    {
      name: "Typography",
      path: "/tokens/typography",
      description: "Fuentes, tamaños, pesos y estilos de texto",
      icon: Type,
    },
  ];

  return (
    <div className="space-y-16 min-h-[60vh]">
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
          <Link key={token.path} to={token.path}>
            <Card
              title={token.name}
              subtitle={token.description}
              variant="outlined"
              width="sm"
              icon={token.icon}
              iconPosition="top-left"
              iconSize="lg"
              iconColor="#43A047"
              height="auto"
              padding="xl"
              hoverable
              clickable
            >
              <CardFooter textColor="#43A047">Ver documentación →</CardFooter>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
