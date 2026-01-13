import { Card, CardFooter } from "@acacoop/react-components-library";
import {
  LayoutGrid,
  FolderOpen,
  BarChart3,
  Loader,
  Heading,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Header } from "@acacoop/react-components-library/components";

export function ComponentsPage() {
  const components: {
    name: string;
    path: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      name: "ButtonGroup",
      path: "/components/button-group",
      description: "Agrupa botones con espaciado y alineación consistente",
      icon: LayoutGrid,
    },
    {
      name: "Card",
      path: "/components/card",
      description: "Contenedor con header, content y footer personalizables",
      icon: FolderOpen,
    },
    {
      name: "StatCard",
      path: "/components/stat-card",
      description: "Tarjeta para mostrar estadísticas y métricas",
      icon: BarChart3,
    },
    {
      name: "LoadingOverlay",
      path: "/components/loading-overlay",
      description: "Overlay de carga fullscreen o sobre contenedor específico",
      icon: Loader,
    },
    {
      name: "Header",
      path: "/components/header",
      description:
        "Componente para encabezados con título, subtítulo y botón de acción.",
      icon: Heading,
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <Header
          title="Components"
          subtitle="Componentes compuestos para construir interfaces de usuario completas y funcionales."
          width="full"
          paddingSize="sm"
          titleSize="3xl"
          subtitleSize="md"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link key={component.path} to={component.path}>
            <Card
              title={component.name}
              subtitle={component.description}
              variant="outlined"
              width="sm"
              icon={component.icon}
              iconPosition="top-left"
              iconSize="lg"
              iconColor="#FE9000"
              height="auto"
              padding="xl"
              hoverable
              clickable
            >
              <CardFooter textColor="#FE9000">Ver documentación →</CardFooter>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
