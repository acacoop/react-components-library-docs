import { Card, CardFooter } from "@acacoop/react-components-library";
import { MousePointerClick, Type, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export function PrimitivesPage() {
  const primitives: {
    name: string;
    path: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      name: "Button",
      path: "/primitives/button",
      description: "Botón base con múltiples variantes y estados",
      icon: MousePointerClick,
    },
    {
      name: "Typography",
      path: "/primitives/typography",
      description: "Heading, Text, Caption y Label para composición de texto",
      icon: Type,
    },
    {
      name: "Spinner",
      path: "/primitives/spinner",
      description: "Indicador de carga animado con tamaños y colores",
      icon: LoaderCircle,
    },
  ];

  return (
    <div className="space-y-16 min-h-[60vh]">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Primitives</h1>
        <p className="text-lg text-slate-600">
          Bloques de construcción elementales para interfaces de usuario.
          Componentes simples y reutilizables que forman la base del design
          system.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {primitives.map((primitive) => (
          <Link key={primitive.path} to={primitive.path}>
            <Card
              title={primitive.name}
              subtitle={primitive.description}
              variant="outlined"
              width="sm"
              icon={primitive.icon}
              iconPosition="top-left"
              iconSize="lg"
              iconColor="#282D86"
              height="auto"
              padding="xl"
              hoverable
              clickable
            >
              <CardFooter textColor="#282D86">Ver documentación →</CardFooter>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
