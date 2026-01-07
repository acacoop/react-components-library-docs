import { Link } from "react-router-dom";

export function ComponentsListPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Components</h1>
        <p className="text-lg text-slate-600">
          Browse all available React components. Click on a component to see
          detailed documentation and examples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/components/button"
          className="group bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:border-[#FF9100] hover:shadow-md transition-all"
        >
          <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-[#FF9100] transition-colors">
            Button
          </h3>
          <p className="text-sm text-slate-600">
            Highly customizable button with multiple variants and sizes
          </p>
        </Link>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 opacity-50">
          <h3 className="font-bold text-lg mb-2 text-slate-900">
            More components...
          </h3>
          <p className="text-sm text-slate-600">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
