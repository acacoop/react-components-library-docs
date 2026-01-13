import { useEffect, useState } from "react";
import { brandAssets } from "@acacoop/react-components-library";
import { Card } from "@acacoop/react-components-library";
import { Check, X, Info } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";
import { DocPageLayout, DocSection } from "../../components/DocPageLayout";
import {
  assetsDoc,
  assetsList,
  usageExamples,
  guidelines,
} from "../../data/assets";

// ============ Utilidades de contraste ============
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
        } catch {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = src;
    } catch {
      resolve(null);
    }
  });
}

// ============ Componentes auxiliares ============
interface ContrastBadgeProps {
  imageSrc: string;
  bgHex: string;
}

function ContrastBadge({ imageSrc, bgHex }: ContrastBadgeProps) {
  const [ratio, setRatio] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const avg = await getImageAverageColor(imageSrc);
      if (!mounted) return;
      if (!avg) return setRatio(null);
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

  if (ratio === null) {
    return <span className="text-xs text-slate-400">Calculando...</span>;
  }

  const passAA = ratio >= 4.5;
  const passAALarge = ratio >= 3.0;

  return (
    <div className="flex items-center gap-1.5 mt-2">
      <span className="text-xs text-slate-500">{ratio}:1</span>
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
          passAALarge
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {passAA ? "AA" : passAALarge ? "AA Large" : "Bajo"}
      </span>
    </div>
  );
}

interface AssetPreviewProps {
  src: string;
  alt: string;
  variant: "light" | "dark";
}

function AssetPreview({ src, alt, variant }: AssetPreviewProps) {
  const bgClass = variant === "light" ? "bg-slate-100" : "bg-slate-800";
  const bgHex = variant === "light" ? "#f1f5f9" : "#1e293b";

  return (
    <div
      className={`${bgClass} rounded-lg p-6 flex flex-col items-center justify-center min-h-[120px]`}
    >
      <img src={src} alt={alt} className="max-h-16 max-w-full object-contain" />
      <ContrastBadge imageSrc={src} bgHex={bgHex} />
    </div>
  );
}

// ============ Componente principal ============
export function AssetsPage() {
  const assets: Record<string, string> = {
    logoIcon: brandAssets.logoIcon,
    logoFullDark: brandAssets.logoFullDark,
    logoFullLight: brandAssets.logoFullLight,
  };

  return (
    <DocPageLayout
      title={assetsDoc.name}
      description={assetsDoc.description}
      accentColor={assetsDoc.accentColor}
      breadcrumbs={[
        { label: assetsDoc.parentName, path: assetsDoc.parentPath },
      ]}
      importCode={assetsDoc.importCode}
    >
      {/* Logos de Marca */}
      <DocSection title="Logos de Marca">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assetsList.map((asset) => (
            <Card key={asset.id} variant="flat" width="full" padding="md">
              <div className="space-y-4">
                {/* Preview del asset */}
                {asset.usage === "both" ? (
                  <div className="grid grid-cols-2 gap-3">
                    <AssetPreview
                      src={assets[asset.id]}
                      alt={`${asset.name} light`}
                      variant="light"
                    />
                    <AssetPreview
                      src={assets[asset.id]}
                      alt={`${asset.name} dark`}
                      variant="dark"
                    />
                  </div>
                ) : (
                  <AssetPreview
                    src={assets[asset.id]}
                    alt={asset.name}
                    variant={asset.usage === "light" ? "light" : "dark"}
                  />
                )}

                {/* Info del asset */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900">{asset.name}</h3>
                  <p className="text-sm text-slate-600">{asset.description}</p>
                  <code className="inline-block text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">
                    {asset.codePath}
                  </code>
                </div>

                {/* Tamaños recomendados */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500 mb-2">
                    Tamaños recomendados
                  </p>
                  <ul className="space-y-1">
                    {asset.recommendedSizes.map((size, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-600 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </DocSection>

      {/* Formato Base64 */}
      <DocSection title="Formato Base64">
        <Card variant="flat" width="full" padding="lg">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Info className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-2">
                Imágenes embebidas en código
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Los assets se exportan como{" "}
                <strong>strings base64 embebidos</strong> en el código. No son
                URLs a archivos externos - la imagen está codificada
                directamente en formato{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                  data:image/[tipo];base64,...
                </code>{" "}
                dentro del JavaScript. Funcionan sin configuración adicional y
                no hay archivos externos que copiar.
              </p>
            </div>
          </div>
        </Card>
      </DocSection>

      {/* Ejemplos de Uso */}
      <DocSection title="Ejemplos de Uso">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">
              Uso en img tags
            </h3>
            <CodeBlock language="tsx" code={usageExamples.imgTag} />
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">
              Como background-image
            </h3>
            <CodeBlock language="tsx" code={usageExamples.backgroundImage} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                Favicon
              </h3>
              <CodeBlock language="html" code={usageExamples.favicon} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                Logo Responsive
              </h3>
              <CodeBlock language="tsx" code={usageExamples.responsiveLogo} />
            </div>
          </div>
        </div>
      </DocSection>

      {/* Guías de Uso */}
      <DocSection title="Guías de Uso">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do */}
          <Card variant="flat" width="full" padding="lg">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 rounded-full">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-700">Hacer</h3>
              </div>
              <ul className="space-y-2.5">
                {guidelines.do.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Don't */}
          <Card variant="flat" width="full" padding="lg">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-red-100 rounded-full">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-700">No hacer</h3>
              </div>
              <ul className="space-y-2.5">
                {guidelines.dont.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </DocSection>

      {/* Accesibilidad */}
      <DocSection title="Accesibilidad">
        <Card variant="flat" width="full" padding="lg">
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Las tarjetas de logos muestran la{" "}
              <strong>relación de contraste</strong> entre el logo y el fondo.
              Los valores se calculan según las pautas WCAG 2.1:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">
                    AA
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    4.5:1
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Texto normal, logos pequeños
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">
                    AA Large
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    3.0:1
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Texto grande, logos grandes
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">
                    AAA
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    7.0:1
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Máximo contraste requerido
                </p>
              </div>
            </div>
          </div>
        </Card>
      </DocSection>
    </DocPageLayout>
  );
}
