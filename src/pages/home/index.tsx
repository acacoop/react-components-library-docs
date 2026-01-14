import { Link } from "react-router-dom";
import { CodeBlock } from "../../components/CodeBlock";
import {
  Button,
  Card,
  COLORS,
  Heading,
  Text,
  ButtonGroup,
} from "@acacoop/react-components-library";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import {
  structureItems,
  quickLinks,
  installationSteps,
  heroData,
} from "../../data/home";

export function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero Section - Minimalista */}
      <section
        style={{
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "120px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Badge Version */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 500,
              marginBottom: "32px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#fff",
            }}
          >
            <Sparkles size={14} style={{ color: COLORS.secondary }} />
            <Text size="sm" color="secondary">
              {heroData.version} • {heroData.versionLabel}
            </Text>
          </div>

          {/* Título Principal */}
          <div style={{ marginBottom: "24px" }}>
            <Heading
              level={1}
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              {heroData.title}
            </Heading>
            <Heading
              level={1}
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.primary} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {heroData.subtitle}
            </Heading>
          </div>

          {/* Descripción */}
          <Text
            size="lg"
            color="secondary"
            style={{
              maxWidth: "600px",
              margin: "0 auto 16px",
              lineHeight: 1.6,
            }}
          >
            {heroData.description}
          </Text>

          <Text
            size="md"
            style={{
              maxWidth: "500px",
              margin: "0 auto 40px",
              fontStyle: "italic",
              color: COLORS.secondary,
            }}
          >
            {heroData.highlight}
          </Text>

          {/* CTA Buttons */}
          <ButtonGroup spacing="md" align="center">
            <Link to="/primitives" style={{ textDecoration: "none" }}>
              <Button variant="secondary" size="lg">
                Comenzar
                <ArrowRight size={18} style={{ marginLeft: "8px" }} />
              </Button>
            </Link>
            <a
              href="https://github.com/acacoop/react-components-library"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button variant="outline" size="lg">
                <Github size={18} style={{ marginRight: "8px" }} />
                GitHub
              </Button>
            </a>
          </ButtonGroup>
        </div>
      </section>

      {/* Quick Access Grid - Minimalista */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {structureItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <Card
                  variant="outlined"
                  width="md"
                  padding="lg"
                  hoverable
                  clickable
                  style={{
                    height: "100%",
                    transition: "all 0.2s ease",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${item.color}15`,
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={24} style={{ color: item.color }} />
                  </div>
                  <Heading level={4} style={{ marginBottom: "8px" }}>
                    {item.title}
                  </Heading>
                  <Text size="sm" color="secondary" style={{ lineHeight: 1.5 }}>
                    {item.description}
                  </Text>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Installation - Clean */}
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 16px 80px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <Heading level={2} style={{ marginBottom: "12px" }}>
            Instalación rápida
          </Heading>
          <Text size="md" color="secondary">
            Integra los componentes en tu proyecto en minutos
          </Text>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {installationSteps.map((step, index) => (
            <div
              key={step.step}
              style={{
                position: "relative",
                paddingLeft: "48px",
                paddingBottom:
                  index < installationSteps.length - 1 ? "24px" : "0",
                borderLeft:
                  index < installationSteps.length - 1
                    ? "2px solid #e2e8f0"
                    : "none",
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  position: "absolute",
                  left: "-13px",
                  top: 0,
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: COLORS.secondary,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {step.step}
              </div>

              {/* Content */}
              <div>
                <Heading level={4} style={{ marginBottom: "8px" }}>
                  {step.title}
                </Heading>
                {step.description && (
                  <Text
                    size="sm"
                    color="secondary"
                    style={{ marginBottom: "12px" }}
                  >
                    {step.description}
                  </Text>
                )}
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <CodeBlock language={step.language} code={step.code} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Links - Minimal Cards */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 16px 80px",
        }}
      >
        <Heading
          level={2}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          Explorar documentación
        </Heading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              style={{ textDecoration: "none" }}
            >
              <Card
                variant="outlined"
                width="auto"
                padding="lg"
                height="xs"
                hoverable
                clickable
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div>
                  <Heading level={4} style={{ marginBottom: "4px" }}>
                    {link.title}
                  </Heading>
                  <Text size="sm" color="secondary">
                    {link.description}
                  </Text>
                </div>
                <ArrowRight
                  size={20}
                  style={{
                    color: "#94a3b8",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                />
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 16px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <Text size="sm" color="secondary">
          Desarrollado por{" "}
          <span style={{ color: COLORS.primary, fontWeight: 500 }}>
            ACA Coop
          </span>
        </Text>
        <Text size="sm" color="secondary" style={{ marginTop: "8px" }}>
          React • TypeScript • CSS-in-JS
        </Text>
      </footer>
    </div>
  );
}
