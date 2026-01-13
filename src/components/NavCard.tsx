import { Link } from "react-router-dom";

interface NavCardProps {
  title: string;
  description: string;
  icon: string;
  to: string;
  accentColor?: string;
}

export function NavCard({
  title,
  description,
  icon,
  to,
  accentColor = "#282D86",
}: NavCardProps) {
  return (
    <Link
      to={to}
      className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all block"
      style={{
        borderColor: "rgb(226, 232, 240)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgb(226, 232, 240)";
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3
        className="font-bold text-xl mb-2 text-slate-900 transition-colors"
        style={{
          color: "rgb(15, 23, 42)",
        }}
        onMouseEnter={(e) => {
          if (e.currentTarget.parentElement?.matches(":hover")) {
            e.currentTarget.style.color = accentColor;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgb(15, 23, 42)";
        }}
      >
        {title}
      </h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <div
        className="text-sm font-medium transition-colors"
        style={{ color: accentColor }}
      >
        Ver documentación →
      </div>
    </Link>
  );
}
