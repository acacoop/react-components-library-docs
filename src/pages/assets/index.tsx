import { useEffect, useState } from "react";
import { brandAssets } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";

function srgbToLinear(v: number) {
  v = v / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function luminance([r, g, b]: number[]) {
  return (
    0.2126 * srgbToLinear(r) +
    0.7152 * srgbToLinear(g) +
    0.0722 * srgbToLinear(b)
  );
}

function contrastRatio(rgb1: number[], rgb2: number[]) {
  const L1 = luminance(rgb1);
  const L2 = luminance(rgb2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

async function getImageAverageColor(src: string): Promise<number[] | null> {
  return new Promise((resolve) => {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const w = 64;
        const h = 64;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(null);
        ctx.drawImage(img, 0, 0, w, h);
        try {
          const data = ctx.getImageData(0, 0, w, h).data;
          let r = 0,
            g = 0,
            b = 0,
            count = 0;
          for (let i = 0; i < data.length; i += 4 * 4) {
            const alpha = data[i + 3];
            if (alpha === 0) continue;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
          }
          if (count === 0) return resolve(null);
          resolve([
            Math.round(r / count),
            Math.round(g / count),
            Math.round(b / count),
          ]);
        } catch (e) {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = src;
    } catch (e) {
      resolve(null);
    }
  });
}

function ContrastBadge({
  imageSrc,
  bgHex,
}: {
  imageSrc: string;
  bgHex: string;
}) {
  const [ratio, setRatio] = useState<number | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      const avg = await getImageAverageColor(imageSrc);
      if (!mounted) return;
      if (!avg) return setRatio(null);
      // parse bgHex like #rrggbb
      const hex = bgHex.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const c = contrastRatio(avg, [r, g, b]);
      setRatio(Number(c.toFixed(2)));
    })();
    return () => {
      mounted = false;
    };
  }, [imageSrc, bgHex]);

  if (ratio === null)
    return (
      <div className="text-xs text-slate-500 mt-2">Contrast: calculando…</div>
    );

  const passAA = ratio >= 4.5;
  const passAALarge = ratio >= 3.0;
  const passAAA = ratio >= 7.0;

  return (
    <div className="mt-2 flex items-center justify-center gap-2">
      <div className="text-xs text-slate-600">Ratio: {ratio}</div>
      <div
        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
          passAA ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}
      >
        AA
      </div>
      <div
        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
          passAALarge
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        AA Large
      </div>
      <div
        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
          passAAA ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}
      >
        AAA
      </div>
    </div>
  );
}

export function AssetsPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Assets</h1>
        <p className="text-lg text-slate-600">
          Logos y assets de marca de ACA para uso en todos los proyectos.
        </p>
      </section>

      {/* Brand Logos */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Logos de Marca
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo Icon (Light + Dark previews) */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-center h-32">
                <div className="flex flex-col items-center">
                  <img
                    src={brandAssets.logoIcon}
                    alt="Logo Icon on light"
                    className="max-w-full max-h-full object-contain"
                  />
                  <ContrastBadge
                    imageSrc={brandAssets.logoIcon}
                    bgHex="#f1f5f9"
                  />
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-center h-32">
                <div className="flex flex-col items-center">
                  <img
                    src={brandAssets.logoIcon}
                    alt="Logo Icon on dark"
                    className="max-w-full max-h-full object-contain bg-transparent"
                  />
                  <ContrastBadge
                    imageSrc={brandAssets.logoIcon}
                    bgHex="#0f172a"
                  />
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">logoIcon</h3>
            <p className="text-sm text-slate-600 mb-4">
              Logo icono cuadrado con las iniciales ACA. Ideal para favicons,
              avatars e iconos en espacios pequeños. Mostramos la misma imagen
              sobre un fondo claro y otro oscuro para verificar contraste — use
              <code className="bg-slate-50 px-1 rounded text-xs">
                logoFullLight
              </code>
              cuando necesite versión clara sobre fondos oscuros.
            </p>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded">
              brandAssets.logoIcon
            </code>
          </div>

          {/* Logo Full Dark */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
            <div className="bg-slate-100 rounded-lg p-8 mb-4 flex items-center justify-center h-40">
              <div className="flex flex-col items-center">
                <img
                  src={brandAssets.logoFullDark}
                  alt="Logo Full Dark"
                  className="max-h-24 max-w-full object-contain"
                />
                <ContrastBadge
                  imageSrc={brandAssets.logoFullDark}
                  bgHex="#f1f5f9"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">logoFullDark</h3>
            <p className="text-sm text-slate-600 mb-4">
              Logo completo versión oscura (azul). Para usar sobre fondos
              claros, neutros o en aplicaciones con tema claro. Usa
              <code className="bg-slate-50 px-1 rounded text-xs">
                object-contain
              </code>
              para mantener proporciones.
            </p>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded">
              brandAssets.logoFullDark
            </code>
          </div>

          {/* Logo Full Light */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
            <div className="bg-slate-800 rounded-lg p-8 mb-4 flex items-center justify-center h-40">
              <div className="flex flex-col items-center">
                <img
                  src={brandAssets.logoFullLight}
                  alt="Logo Full Light"
                  className="max-h-24 max-w-full object-contain"
                />
                <ContrastBadge
                  imageSrc={brandAssets.logoFullLight}
                  bgHex="#0f172a"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">logoFullLight</h3>
            <p className="text-sm text-slate-600 mb-4">
              Logo completo versión clara (blanco). Para usar sobre fondos
              oscuros, coloridos o en aplicaciones con tema oscuro. Usa
              <code className="bg-slate-50 px-1 rounded text-xs">
                object-contain
              </code>
              para mantener proporciones.
            </p>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded">
              brandAssets.logoFullLight
            </code>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Uso</h2>
        <p className="text-slate-600 mb-4">
          Los assets se exportan como <strong>strings base64 embebidos</strong>{" "}
          en el código. No son URLs a archivos externos - la imagen está
          codificada directamente en formato{" "}
          <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">
            data:image/[tipo];base64,...
          </code>{" "}
          dentro del JavaScript. Funcionan sin configuración adicional y no hay
          archivos externos que copiar.
        </p>

        {/* Tamaños Recomendados */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">
            📏 Tamaños Recomendados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-blue-800">logoIcon:</strong>
              <ul className="text-blue-700 mt-1 space-y-1">
                <li>• Favicon: 16x16px - 32x32px</li>
                <li>• Avatar: 24x24px - 48x48px</li>
                <li>• Icono: 20x20px - 40x40px</li>
              </ul>
            </div>
            <div>
              <strong className="text-blue-800">logoFullDark:</strong>
              <ul className="text-blue-700 mt-1 space-y-1">
                <li>• Header: 120x40px - 200x67px</li>
                <li>• Footer: 100x33px - 150x50px</li>
                <li>• Mínimo legible: 80x27px</li>
              </ul>
            </div>
            <div>
              <strong className="text-blue-800">logoFullLight:</strong>
              <ul className="text-blue-700 mt-1 space-y-1">
                <li>• Header oscuro: 120x40px - 200x67px</li>
                <li>• Footer oscuro: 100x33px - 150x50px</li>
                <li>• Mínimo legible: 80x27px</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <CodeBlock
            language="tsx"
            code={`
              import { brandAssets } from '@acacoop/react-components-library';

              // En img tags - siempre usar object-contain para mantener proporciones
              <img
                src={brandAssets.logoIcon}
                alt="ACA Logo"
                className="w-8 h-8 object-contain" // Para favicon 32x32
              />
              <img
                src={brandAssets.logoFullDark}
                alt="ACA Logo"
                className="h-10 object-contain" // Altura fija, ancho automático
              />

              // Como background-image
              <div style={{
                backgroundImage: \`url(\${brandAssets.logoIcon})\`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }} />

              // En CSS/Tailwind
              .logo-favicon { background-image: url(\${brandAssets.logoIcon}); }
              .logo-header { background-image: url(\${brandAssets.logoFullDark}); }
            `}
          />
        </div>
      </section>

      {/* Guidelines */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Guías de Uso</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-green-600 mb-3">✓ Hacer</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  • Usar{" "}
                  <code className="bg-slate-100 px-1 rounded text-xs">
                    object-contain
                  </code>{" "}
                  para mantener proporciones
                </li>
                <li>
                  • Usar logoIcon para favicons (16x16px - 32x32px) y avatars
                </li>
                <li>• Usar logoFullDark sobre fondos claros y neutros</li>
                <li>• Usar logoFullLight sobre fondos oscuros y coloridos</li>
                <li>
                  • Definir altura fija y ancho automático para logos
                  horizontales
                </li>
                <li>• Usar tamaños mínimos recomendados para legibilidad</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3">✗ No hacer</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  • Forzar tamaños fijos (width + height) que deformen la imagen
                </li>
                <li>
                  • Usar{" "}
                  <code className="bg-red-50 px-1 rounded text-xs">
                    object-cover
                  </code>{" "}
                  que recorta la imagen
                </li>
                <li>• Distorsionar o estirar los logos</li>
                <li>• Agregar efectos o sombras adicionales</li>
                <li>• Modificar los colores del logo</li>
                <li>• Usar logos en tamaños muy pequeños (&lt; 16px)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ejemplos de Implementación */}
        <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">
            💡 Ejemplos de Implementación
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-800 mb-2">
                Favicon en HTML:
              </h4>
              <CodeBlock
                language="html"
                code={`<link rel="icon" type="image/png" sizes="32x32" href="${brandAssets.logoIcon}">`}
              />
            </div>
            <div>
              <h4 className="font-medium text-slate-800 mb-2">
                Logo responsive en header:
              </h4>
              <CodeBlock
                language="tsx"
                code={`<img
  src={brandAssets.logoFullDark}
  alt="ACA Logo"
  className="h-8 md:h-10 lg:h-12 object-contain"
/>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
