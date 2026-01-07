import { CodeBlock } from "../../components/CodeBlock";

export function ConstantsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Constants</h1>
        <p className="text-lg text-slate-600">
          Brand colors, icons, images, and other constants following ACA&apos;s
          brand guidelines.
        </p>
      </div>

      {/* Brand Colors */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Brand Colors</h2>
        <p className="text-slate-600 mb-6">
          Official ACA brand colors from the brand manual.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div
              className="h-32 rounded-lg mb-4 shadow-md"
              style={{ backgroundColor: "#FF9100" }}
            ></div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">
              Primary - ACA Orange
            </h3>
            <p className="text-sm text-slate-600 font-mono bg-slate-100 px-3 py-2 rounded inline-block">
              #FF9100
            </p>
            <p className="text-sm text-slate-600 mt-2">PANTONE 137C</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div
              className="h-32 rounded-lg mb-4 shadow-md"
              style={{ backgroundColor: "#282D87" }}
            ></div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">
              Secondary - ACA Blue
            </h3>
            <p className="text-sm text-slate-600 font-mono bg-slate-100 px-3 py-2 rounded inline-block">
              #282D87
            </p>
            <p className="text-sm text-slate-600 mt-2">PANTONE 2736C</p>
          </div>
        </div>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Import</h2>
        <CodeBlock
          code="import { colors } from '@acacoop/components-library/constants';"
          language="tsx"
        />
      </section>
    </div>
  );
}
