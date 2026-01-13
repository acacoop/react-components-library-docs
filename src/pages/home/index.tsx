import { Link } from "react-router-dom";
import { CodeBlock } from "../../components/CodeBlock";
import {
  Button,
  brandAssets,
  Card,
  COLORS,
} from "@acacoop/react-components-library";
import { Header } from "@acacoop/react-components-library/components";
import { ArrowRight } from "lucide-react";
import {
  structureItems,
  quickLinks,
  installationSteps,
  heroData,
} from "../../data/home";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center py-12">
        <div className="mx-auto mb-6 w-48 h-20 flex items-center justify-center">
          <img
            src={brandAssets.logoFullDark}
            alt="ACA Logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            backgroundColor: `${COLORS.secondary}15`,
            color: COLORS.secondary,
          }}
        >
          {heroData.version} - {heroData.versionLabel}
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          {heroData.title} <br />
          <span style={{ color: COLORS.secondary }}>{heroData.highlight}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          {heroData.description}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            variant="primary"
            onClick={() => (window.location.hash = "#/primitives")}
          >
            Ver Primitives
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => (window.location.hash = "#/components")}
          >
            Ver Components
          </Button>
        </div>
      </section>

      {/* Structure */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Estructura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {structureItems.map((item) => (
            <Card
              key={item.id}
              variant="flat"
              width="full"
              padding="lg"
              hoverable
              clickable
              onClick={() => (window.location.hash = `#${item.path}`)}
              icon={item.icon as any}
              iconPosition="top-left"
              iconSize="md"
              iconColor="#fff"
              iconBgColor={item.color}
              title={item.title}
              subtitle={item.description}
            />
          ))}
        </div>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Instalación</h2>
        <Card variant="flat" width="full" padding="lg">
          <div className="space-y-8">
            {installationSteps.map((step) => (
              <div key={step.step}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <div className="ml-11">
                  {step.description && (
                    <p className="text-slate-600 mb-3 text-sm">
                      {step.description}
                    </p>
                  )}
                  <CodeBlock language={step.language} code={step.code} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Explorar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="group relative overflow-hidden rounded-xl transition-all duration-200"
            >
              <Card
                variant="flat"
                width="full"
                height="sm"
                padding="lg"
                hoverable
                backgroundColor="#fff"
              >
                <Header
                  title={link.title}
                  subtitle={link.description}
                  width="full"
                  paddingSize="sm"
                  titleSize="lg"
                  subtitleSize="sm"
                  actionButton={{
                    label: "",
                    icon: ArrowRight as any,
                    variant: "ghost",
                    size: "sm",
                  }}
                />
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer info */}
      <section className="text-center pb-8">
        <p className="text-sm text-slate-500">
          Desarrollado por{" "}
          <span style={{ color: COLORS.primary }} className="font-medium">
            ACA Coop
          </span>{" "}
          • React + TypeScript • CSS-in-JS
        </p>
      </section>
    </div>
  );
}
