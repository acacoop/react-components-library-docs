import { useState } from "react";
import { Button } from "@acacoop/components-library";
import { CodeBlock } from "../../components/CodeBlock";

export function ButtonPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Button</h1>
        <p className="text-lg text-slate-600">
          Highly customizable button component with multiple variants, sizes,
          and states.
        </p>
      </div>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Import</h2>
        <CodeBlock
          code="import { Button } from '@acacoop/components-library';"
          language="tsx"
        />
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Variants</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <CodeBlock
          code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
          language="tsx"
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Sizes</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">→</Button>`}
          language="tsx"
        />
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">States</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </div>
        <CodeBlock code="<Button disabled>Disabled</Button>" language="tsx" />
      </section>

      {/* Interactive Example */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Interactive Example
        </h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <div className="text-center mb-6">
            <p className="text-4xl font-bold text-[#FF9100] mb-2">{count}</p>
            <p className="text-sm text-slate-600">Counter value</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button variant="outline" onClick={() => setCount(count - 1)}>
              Decrement
            </Button>
            <Button variant="destructive" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`const [count, setCount] = useState(0);

<Button onClick={() => setCount(count + 1)}>Increment</Button>
<Button variant="outline" onClick={() => setCount(count - 1)}>Decrement</Button>
<Button variant="destructive" onClick={() => setCount(0)}>Reset</Button>`}
          language="tsx"
        />
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Props</h2>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                  Prop
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                  Type
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900">
                  Default
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                    variant
                  </code>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  default | secondary | destructive | outline | ghost | link
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">default</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                    size
                  </code>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  sm | default | lg | icon
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">default</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                    disabled
                  </code>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                <td className="px-6 py-4 text-sm text-slate-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
