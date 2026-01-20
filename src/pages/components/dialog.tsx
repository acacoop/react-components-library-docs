import { Dialog, Button } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { useState } from "react";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { dialogDoc } from "../../data/components";
import { AlertTriangle, Trash2, CheckCircle, Info, LogOut } from "lucide-react";

export function DialogPage() {
  const [showBasic, setShowBasic] = useState(false);
  const [showDestructive, setShowDestructive] = useState(false);
  const [showWithIcon, setShowWithIcon] = useState(false);
  const [showSmall, setShowSmall] = useState(false);
  const [showLarge, setShowLarge] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showNoCancel, setShowNoCancel] = useState(false);
  const [showCustomContent, setShowCustomContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmWithLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* Todos los modales fuera del layout para evitar estilos de space-y */}
      <Dialog
        isOpen={showBasic}
        title="Confirmar acción"
        message="¿Estás seguro de que deseas continuar con esta acción?"
        onConfirm={() => setShowBasic(false)}
        onCancel={() => setShowBasic(false)}
      />
      <Dialog
        isOpen={showDestructive}
        title="¿Eliminar elemento?"
        message="Esta acción no se puede deshacer. El elemento será eliminado permanentemente."
        confirmText="Eliminar"
        cancelText="Cancelar"
        confirmVariant="destructive"
        onConfirm={() => setShowDestructive(false)}
        onCancel={() => setShowDestructive(false)}
        icon={<Trash2 size={20} />}
      />
      <Dialog
        isOpen={showWithIcon}
        title="Información importante"
        message="Esta es una notificación importante que requiere tu atención."
        confirmText="Entendido"
        showCancelButton={false}
        onConfirm={() => setShowWithIcon(false)}
        onCancel={() => setShowWithIcon(false)}
        icon={<Info size={20} />}
      />
      <Dialog
        isOpen={showSmall}
        title="Modal Pequeño"
        message="Este es un modal de tamaño pequeño."
        size="sm"
        onConfirm={() => setShowSmall(false)}
        onCancel={() => setShowSmall(false)}
      />
      <Dialog
        isOpen={showLarge}
        title="Modal Grande"
        message="Este es un modal de tamaño grande, ideal para mostrar más contenido o formularios extensos."
        size="lg"
        onConfirm={() => setShowLarge(false)}
        onCancel={() => setShowLarge(false)}
      />
      <Dialog
        isOpen={showLoading}
        title="Guardar cambios"
        message="¿Deseas guardar los cambios realizados?"
        confirmText="Guardar"
        isLoading={isLoading}
        onConfirm={handleConfirmWithLoading}
        onCancel={() => setShowLoading(false)}
        icon={<CheckCircle size={20} />}
      />
      <Dialog
        isOpen={showNoCancel}
        title="Sesión expirada"
        message="Tu sesión ha expirado. Por favor, inicia sesión nuevamente."
        confirmText="Ir al login"
        showCancelButton={false}
        onConfirm={() => setShowNoCancel(false)}
        onCancel={() => setShowNoCancel(false)}
        icon={<LogOut size={20} />}
      />
      <Dialog
        isOpen={showCustomContent}
        title="Términos y Condiciones"
        confirmText="Acepto"
        cancelText="No acepto"
        onConfirm={() => setShowCustomContent(false)}
        onCancel={() => setShowCustomContent(false)}
      >
        <div className="space-y-3">
          <p className="text-slate-600">
            Al continuar, aceptas los siguientes términos:
          </p>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li>Uso responsable del servicio</li>
            <li>Protección de datos personales</li>
            <li>No compartir credenciales de acceso</li>
          </ul>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
            <AlertTriangle
              size={16}
              className="text-amber-600 mt-0.5 flex-shrink-0"
            />
            <span className="text-sm text-amber-800">
              Esta acción es irreversible y vinculante.
            </span>
          </div>
        </div>
      </Dialog>

      <DocPageLayout
        title={dialogDoc.name}
        description={dialogDoc.description}
        accentColor={dialogDoc.accentColor}
        breadcrumbs={[
          {
            label: dialogDoc.parentName,
            path: dialogDoc.parentPath,
          },
        ]}
        importCode={dialogDoc.importCode}
      >
        {/* Uso Básico */}
        <DocSection title="Uso Básico">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              El modal básico incluye un título, mensaje y botones de
              confirmar/cancelar.
            </p>
            <Button onClick={() => setShowBasic(true)}>
              Abrir Modal Básico
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[0].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Variante Destructiva */}
        <DocSection title="Variante Destructiva">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Usa la variante{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                destructive
              </code>{" "}
              para acciones peligrosas como eliminar elementos.
            </p>
            <Button
              variant="destructive"
              onClick={() => setShowDestructive(true)}
            >
              Eliminar elemento
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[1].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Con Ícono */}
        <DocSection title="Con Ícono">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Puedes agregar un ícono para dar contexto visual al tipo de
              confirmación.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setShowWithIcon(true)}>
                Modal con Ícono de Info
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[2].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Tamaños */}
        <DocSection title="Tamaños">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              El modal está disponible en tres tamaños:{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">sm</code>
              ,{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">md</code>{" "}
              y{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">lg</code>
              .
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" onClick={() => setShowSmall(true)}>
                Modal Pequeño (sm)
              </Button>
              <Button variant="outline" onClick={() => setShowLarge(true)}>
                Modal Grande (lg)
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[3].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Estado de Carga */}
        <DocSection title="Estado de Carga">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Usa{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                isLoading
              </code>{" "}
              para mostrar un estado de carga mientras se procesa la acción.
            </p>
            <Button onClick={() => setShowLoading(true)}>
              Guardar con confirmación
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[4].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Sin Botón Cancelar */}
        <DocSection title="Sin Botón Cancelar">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Oculta el botón de cancelar para modales de solo confirmación.
            </p>
            <Button onClick={() => setShowNoCancel(true)}>
              Modal solo confirmación
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[5].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Contenido Personalizado */}
        <DocSection title="Contenido Personalizado">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Usa{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                children
              </code>{" "}
              para pasar contenido personalizado en lugar del mensaje de texto.
            </p>
            <Button onClick={() => setShowCustomContent(true)}>
              Modal con contenido custom
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              language="tsx"
              code={dialogDoc.sections[6].codeExamples?.[0].code || ""}
            />
          </div>
        </DocSection>

        {/* Props */}
        <DocSection title="Props">
          <PropsTable props={dialogDoc.props} />
        </DocSection>
      </DocPageLayout>
    </>
  );
}
