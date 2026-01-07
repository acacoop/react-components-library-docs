import { Link } from "react-router-dom";
import { CodeBlock } from "../../components/CodeBlock";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9100]/10 text-[#FF9100] text-sm font-medium mb-6">
          v1.0.4 - Latest
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Build faster with <br />
          <span className="text-[#FF9100]">ACA Components</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Production-ready React components following ACA&apos;s brand
          guidelines. TypeScript support, pre-compiled CSS, and zero
          configuration.
        </p>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Installation</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  1
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Configure npm registry
                </h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-600 mb-3 text-sm">
                  Create a{" "}
                  <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                    .npmrc
                  </code>{" "}
                  file in your project root:
                </p>
                <CodeBlock
                  code={`@acacoop:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN`}
                  language="bash"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  2
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Install the package
                </h3>
              </div>
              <div className="ml-11">
                <CodeBlock
                  code="npm install @acacoop/components-library"
                  language="bash"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  3
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Import styles in your main file
                </h3>
              </div>
              <div className="ml-11">
                <CodeBlock
                  code="import '@acacoop/components-library/styles.css';"
                  language="typescript"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  4
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Start using components
                </h3>
              </div>
              <div className="ml-11">
                <CodeBlock
                  code={`import { Button } from '@acacoop/components-library';

function App() {
  return <Button>Click me</Button>;
}`}
                  language="tsx"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/components"
            className="group bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#FF9100] hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-[#FF9100] transition-colors">
              Components
            </h3>
            <p className="text-slate-600">
              Browse all available React components with examples and API
              documentation
            </p>
          </Link>
          <Link
            to="/constants"
            className="group bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#FF9100] hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-[#FF9100] transition-colors">
              Constants
            </h3>
            <p className="text-slate-600">
              Colors, icons, images, and other constants from the ACA brand
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
