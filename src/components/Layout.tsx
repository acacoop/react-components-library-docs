import { brandAssets, COLORS, Text } from "@acacoop/react-components-library";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/primitives", label: "Primitivos" },
    { path: "/components", label: "Componentes" },
    { path: "/tokens", label: "Tokens" },
    { path: "/assets", label: "Assets" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid #e2e8f0",
          backgroundColor: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <img
                src={brandAssets.logoIconDark}
                alt="Logo"
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: COLORS.secondary,
                }}
              >
                Components
              </Text>
            </Link>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
              className="desktop-nav"
            >
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path !== "/" &&
                    location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: isActive ? COLORS.secondary : "#64748b",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      !isActive && (e.currentTarget.style.color = "#0f172a")
                    }
                    onMouseLeave={(e) =>
                      !isActive && (e.currentTarget.style.color = "#64748b")
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://github.com/acacoop/react-components-library"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64748b",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                <Github size={20} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                padding: "8px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#64748b",
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav
              style={{
                display: "none",
                flexDirection: "column",
                gap: "16px",
                paddingTop: "16px",
                borderTop: "1px solid #e2e8f0",
                marginTop: "16px",
              }}
              className="mobile-nav"
            >
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path !== "/" &&
                    location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: isActive ? COLORS.secondary : "#64748b",
                      padding: "8px 0",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://github.com/acacoop/react-components-library"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 0",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                <Github size={20} />
                GitHub
              </a>
            </nav>
          )}
        </div>

        <style>{`
          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-menu-btn {
              display: none !important;
            }
          }
          @media (max-width: 767px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
            .mobile-nav {
              display: flex !important;
            }
          }
        `}</style>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #e2e8f0",
          backgroundColor: "#fff",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "32px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: "4px",
                }}
              >
                ACA Components
              </Text>
              <Text size="sm" color="secondary">
                v0.2.0 • React & TypeScript
              </Text>
            </div>
            <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
              <a
                href="https://github.com/acacoop/react-components-library"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.secondary)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
