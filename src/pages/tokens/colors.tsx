import { colors } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router-dom";

export function ColorsPage() {
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600">
        <Link to="/tokens" className="hover:text-[#43A047]">
          Tokens
        </Link>
        {" / "}
        <span className="text-slate-900 font-medium">Colors</span>
      </div>

      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Colors</h1>
        <p className="text-lg text-slate-600">
          Paleta de colores del sistema de diseño. Incluye colores de marca,
          estados, texto y neutrales.
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importación</h2>
        <CodeBlock
          language="tsx"
          code={`
            import { colors } from '@acacoop/react-components-library';
          `}
        />
      </section>

      {/* Brand Colors */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Colores de Marca
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div
                style={{
                  backgroundColor: colors.brand.primary,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Primary</p>
              <code className="text-sm text-slate-600">
                {colors.brand.primary}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.brand.secondary,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Secondary</p>
              <code className="text-sm text-slate-600">
                {colors.brand.secondary}
              </code>
            </div>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`
              colors.brand.primary    // "${colors.brand.primary}"
              colors.brand.secondary  // "${colors.brand.secondary}"
            `}
        />
      </section>

      {/* Status Colors */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Colores de Estado
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div
                style={{
                  backgroundColor: colors.status.success,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Success</p>
              <code className="text-sm text-slate-600">
                {colors.status.success}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.status.warning,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Warning</p>
              <code className="text-sm text-slate-600">
                {colors.status.warning}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.status.error,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Error</p>
              <code className="text-sm text-slate-600">
                {colors.status.error}
              </code>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: colors.status.info,
                  height: "100px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <p className="font-semibold text-slate-900">Info</p>
              <code className="text-sm text-slate-600">
                {colors.status.info}
              </code>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              colors.status.success  // "${colors.status.success}"
              colors.status.warning  // "${colors.status.warning}"
              colors.status.error    // "${colors.status.error}"
              colors.status.info     // "${colors.status.info}"
            `}
          />
        </div>
      </section>

      {/* Text Colors */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Colores de Texto
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.primary,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Primary</p>
              <code className="text-sm text-slate-600">
                {colors.text.primary}
              </code>
              <p
                style={{ color: colors.text.primary }}
                className="text-sm pt-2"
              >
                Texto principal de alta jerarquía
              </p>
            </div>
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.secondary,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Secondary</p>
              <code className="text-sm text-slate-600">
                {colors.text.secondary}
              </code>
              <p
                style={{ color: colors.text.secondary }}
                className="text-sm pt-2"
              >
                Texto secundario con menor énfasis
              </p>
            </div>
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.muted,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Muted</p>
              <code className="text-sm text-slate-600">
                {colors.text.muted}
              </code>
              <p style={{ color: colors.text.muted }} className="text-sm pt-2">
                Texto deshabilitado o inactivo
              </p>
            </div>
            <div className="space-y-3">
              <div
                style={{
                  backgroundColor: colors.text.inverse,
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <p className="font-semibold text-slate-900">Inverse</p>
              <code className="text-sm text-slate-600">
                {colors.text.inverse}
              </code>
              <p
                style={{ color: colors.text.inverse }}
                className="text-sm pt-2"
              >
                Texto sobre fondos oscuros
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              colors.text.primary    // "${colors.text.primary}"
              colors.text.secondary  // "${colors.text.secondary}"
              colors.text.muted      // "${colors.text.muted}"
              colors.text.inverse    // "${colors.text.inverse}"
            `}
          />
        </div>
      </section>

      {/* Neutral Colors */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Colores Neutrales
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(colors.neutral).map(([key, value]) => (
              <div key={key}>
                <div
                  style={{
                    backgroundColor: value,
                    height: "80px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <p className="font-semibold text-slate-900 mt-2 text-sm capitalize">
                  {key}
                </p>
                <code className="text-xs text-slate-600">{value}</code>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              colors.neutral.white       // "${colors.neutral.white}"
              colors.neutral.gray100     // "${colors.neutral.gray100}"
              colors.neutral.gray200     // "${colors.neutral.gray200}"
              colors.neutral.gray300     // "${colors.neutral.gray300}"
              colors.neutral.gray400     // "${colors.neutral.gray400}"
              colors.neutral.gray500     // "${colors.neutral.gray500}"
              colors.neutral.gray600     // "${colors.neutral.gray600}"
              colors.neutral.gray700     // "${colors.neutral.gray700}"
              colors.neutral.gray800     // "${colors.neutral.gray800}"
              colors.neutral.gray900     // "${colors.neutral.gray900}"
              colors.neutral.black       // "${colors.neutral.black}"
            `}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Ejemplos de Uso
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-6">
            <div
              style={{
                backgroundColor: colors.brand.primary,
                color: colors.neutral.white,
                padding: "24px",
                borderRadius: "8px",
              }}
            >
              <h3 className="text-xl font-semibold mb-2">
                Card con color primario
              </h3>
              <p>Contenido con fondo de marca</p>
            </div>

            <div
              style={{
                backgroundColor: colors.status.success,
                color: colors.neutral.white,
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              ✓ Operación completada exitosamente
            </div>

            <div
              style={{
                backgroundColor: colors.neutral.gray100,
                color: colors.text.primary,
                padding: "24px",
                borderRadius: "8px",
              }}
            >
              <h4 className="font-semibold mb-2">Sección con fondo neutral</h4>
              <p style={{ color: colors.text.secondary }}>
                Texto secundario para información complementaria
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`
              // Fondo con color de marca
              <div style={{ backgroundColor: colors.brand.primary }}>
                ...
              </div>

              // Alerta de éxito
              <div style={{ backgroundColor: colors.status.success }}>
                ✓ Operación completada
              </div>

              // Texto con jerarquía
              <h3 style={{ color: colors.text.primary }}>Título</h3>
              <p style={{ color: colors.text.secondary }}>Descripción</p>
            `}
          />
        </div>
      </section>
    </div>
  );
}
