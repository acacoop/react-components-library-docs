/// <reference types="vite/client" />

// SVG importado como componente React
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

// SVG importado como URL (por defecto en Vite)
declare module "*.svg" {
  const src: string;
  export default src;
}
