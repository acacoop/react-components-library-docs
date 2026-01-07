import { NavCard } from "../../components/NavCard";

export function ComponentsPage() {
  const components = [
    {
      name: "ButtonGroup",
      path: "/components/button-group",
      description: "Agrupa botones con espaciado y alineación consistente",
      icon: "🔲",
    },
    {
      name: "Card",
      path: "/components/card",
      description: "Contenedor con header, content y footer personalizables",
      icon: "🗂️",
    },
    {
      name: "StatCard",
      path: "/components/stat-card",
      description: "Tarjeta para mostrar estadísticas y métricas",
      icon: "📊",
    },
    {
      name: "LoadingOverlay",
      path: "/components/loading-overlay",
      description: "Overlay de carga fullscreen o sobre contenedor específico",
      icon: "⏱️",
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Components</h1>
        <p className="text-lg text-slate-600">
          Componentes compuestos listos para usar. Construidos combinando
          primitives y ofreciendo funcionalidad completa out-of-the-box.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <NavCard
            key={component.path}
            title={component.name}
            description={component.description}
            icon={component.icon}
            to={component.path}
            accentColor="#FF9100"
          />
        ))}
      </section>
    </div>
  );
}
