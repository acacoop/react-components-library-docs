import {
  Toast,
  Button,
  ToastVariant,
  ToastPosition,
  IconWrapper,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { useState, useCallback } from "react";
import {
  DocPageLayout,
  DocSection,
  PropsTable,
} from "../../components/DocPageLayout";
import { toastDoc } from "../../data/components";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Sparkles,
} from "lucide-react";

// Estado centralizado para el Toast
interface ToastState {
  isVisible: boolean;
  message: string;
  variant: ToastVariant;
  title?: string;
  position: ToastPosition;
  duration: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

const initialToastState: ToastState = {
  isVisible: false,
  message: "",
  variant: "info",
  title: undefined,
  position: "top-right",
  duration: 3000,
  icon: undefined,
};

export function ToastPage() {
  const [toast, setToast] = useState<ToastState>(initialToastState);

  // Función para mostrar un toast (cierra el anterior automáticamente)
  const showToast = useCallback(
    (config: Partial<Omit<ToastState, "isVisible">>) => {
      // Primero ocultar cualquier toast existente
      setToast((prev) => ({ ...prev, isVisible: false }));

      // Pequeño delay para permitir la animación de salida
      setTimeout(() => {
        setToast({
          ...initialToastState,
          ...config,
          isVisible: true,
        });
      }, 100);
    },
    [],
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return (
    <>
      {/* Toast único centralizado */}
      <Toast
        message={toast.message}
        variant={toast.variant}
        title={toast.title}
        position={toast.position}
        duration={toast.duration}
        icon={toast.icon}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <DocPageLayout
        title={toastDoc.name}
        description={toastDoc.description}
        accentColor={toastDoc.accentColor}
        breadcrumbs={[
          {
            label: toastDoc.parentName,
            path: toastDoc.parentPath,
          },
        ]}
        importCode={toastDoc.importCode}
      >
        {/* Uso Básico */}
        <DocSection title="Uso Básico">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              El Toast es ideal para mostrar notificaciones de feedback al
              usuario después de una acción, como guardar datos, errores de
              validación, etc.
            </p>
            <Button
              onClick={() =>
                showToast({
                  message: "La operación se completó exitosamente",
                  variant: "success",
                })
              }
            >
              Mostrar Toast de Éxito
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`const [showToast, setShowToast] = useState(false);

<Toast
  message="La operación se completó exitosamente"
  variant="success"
  isVisible={showToast}
  onClose={() => setShowToast(false)}
/>

<Button onClick={() => setShowToast(true)}>
  Mostrar Toast
</Button>`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Variantes */}
        <DocSection title="Variantes">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              El Toast tiene 4 variantes que cambian el color según el tipo de
              mensaje:
              <strong> success</strong> (verde) para operaciones exitosas,
              <strong> error</strong> (rojo) para errores,
              <strong> warning</strong> (naranja) para advertencias, e
              <strong> info</strong> (azul) para información general.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() =>
                  showToast({
                    message: "La operación se completó exitosamente",
                    variant: "success",
                  })
                }
              >
                <CheckCircle size={16} className="mr-2" />
                Success
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  showToast({
                    message: "Ocurrió un error al procesar la solicitud",
                    variant: "error",
                  })
                }
              >
                <XCircle size={16} className="mr-2" />
                Error
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  showToast({
                    message: "Advertencia: Los cambios no se han guardado",
                    variant: "warning",
                  })
                }
              >
                <AlertTriangle size={16} className="mr-2" />
                Warning
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    message:
                      "Información: El sistema se actualizará en 5 minutos",
                    variant: "info",
                  })
                }
              >
                <Info size={16} className="mr-2" />
                Info
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`// Success - Para operaciones exitosas
<Toast message="Datos guardados" variant="success" ... />

// Error - Para errores
<Toast message="Error al guardar" variant="error" ... />

// Warning - Para advertencias
<Toast message="Cambios sin guardar" variant="warning" ... />

// Info - Para información
<Toast message="Sistema actualizado" variant="info" ... />`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Con Título */}
        <DocSection title="Con Título">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Puedes agregar un título para dar más contexto al mensaje.
            </p>
            <Button
              onClick={() =>
                showToast({
                  title: "¡Datos guardados!",
                  message:
                    "Todos los cambios se han guardado correctamente en el servidor",
                  variant: "success",
                })
              }
            >
              Toast con Título
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`<Toast
  title="¡Datos guardados!"
  message="Todos los cambios se han guardado correctamente en el servidor"
  variant="success"
  isVisible={isVisible}
  onClose={() => setIsVisible(false)}
/>`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Posiciones */}
        <DocSection title="Posiciones">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              El Toast puede posicionarse en diferentes lugares de la pantalla.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    message: "Toast en la esquina superior izquierda",
                    variant: "info",
                    position: "top-left",
                  })
                }
              >
                Top Left
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    message: "Toast centrado arriba",
                    variant: "success",
                    position: "top-center",
                  })
                }
              >
                Top Center
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    message: "Toast en la esquina superior derecha",
                    variant: "info",
                    position: "top-right",
                  })
                }
              >
                Top Right (default)
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    message: "Toast en la esquina inferior derecha",
                    variant: "warning",
                    position: "bottom-right",
                  })
                }
              >
                Bottom Right
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showToast({
                    message: "Toast centrado abajo",
                    variant: "error",
                    position: "bottom-center",
                  })
                }
              >
                Bottom Center
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`<Toast position="top-left" ... />
<Toast position="top-center" ... />
<Toast position="top-right" ... />  // default
<Toast position="bottom-left" ... />
<Toast position="bottom-center" ... />
<Toast position="bottom-right" ... />`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Duración */}
        <DocSection title="Duración (Auto-cerrar)">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Por defecto, el Toast se cierra automáticamente después de 3
              segundos. Puedes personalizar este tiempo o desactivarlo
              completamente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() =>
                  showToast({
                    message: "Este toast se cierra en 2 segundos",
                    variant: "success",
                    duration: 2000,
                  })
                }
              >
                Cierra en 2s
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  showToast({
                    message: "Este toast no se cierra automáticamente",
                    variant: "warning",
                    duration: 0,
                  })
                }
              >
                Sin auto-cerrar
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`// Se cierra automáticamente después de 2 segundos
<Toast
  message="Mensaje rápido"
  duration={2000}
  ...
/>

// No se cierra automáticamente (el usuario debe cerrarlo)
<Toast
  message="Debes cerrar manualmente"
  duration={0}
  ...
/>`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Ícono Personalizado */}
        <DocSection title="Ícono Personalizado">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Puedes usar un ícono personalizado en lugar del ícono por defecto
              de la variante. Usa el componente{" "}
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                IconWrapper
              </code>{" "}
              para manejar iconos de forma consistente.
            </p>
            <Button
              onClick={() =>
                showToast({
                  message: "¡Nueva funcionalidad disponible!",
                  variant: "info",
                  icon: <IconWrapper icon={Sparkles} size="md" />,
                })
              }
            >
              Toast con Ícono Personalizado
            </Button>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`import { IconWrapper } from '@acacoop/react-components-library';
import { Sparkles } from 'lucide-react';

<Toast
  message="¡Nueva funcionalidad disponible!"
  variant="info"
  isVisible={isVisible}
  onClose={handleClose}
  icon={<IconWrapper icon={Sparkles} size="md" />}
/>`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Caso de Uso: Feedback de Formulario */}
        <DocSection title="Caso de Uso: Feedback de Formulario">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-4">
            <p className="text-slate-600">
              Ejemplo típico de uso para mostrar feedback después de enviar un
              formulario.
            </p>
          </div>
          <div className="mt-4">
            <CodeBlock
              code={`function FormExample() {
  const [toast, setToast] = useState({ 
    show: false, 
    variant: 'info', 
    message: '' 
  });

  const handleSubmit = async (data) => {
    try {
      await saveData(data);
      setToast({
        show: true,
        variant: 'success',
        message: 'Los datos se guardaron correctamente'
      });
    } catch (error) {
      setToast({
        show: true,
        variant: 'error',
        message: 'Error al guardar los datos. Intenta nuevamente.'
      });
    }
  };

  return (
    <>
      <Toast
        message={toast.message}
        variant={toast.variant}
        isVisible={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
      <form onSubmit={handleSubmit}>
        {/* ... campos del formulario ... */}
      </form>
    </>
  );
}`}
              language="tsx"
            />
          </div>
        </DocSection>

        {/* Props */}
        <DocSection title="Props">
          <PropsTable props={toastDoc.props} />
        </DocSection>
      </DocPageLayout>
    </>
  );
}
