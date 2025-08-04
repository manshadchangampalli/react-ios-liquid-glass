import React from "react";
import "./style.css";
interface ILiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    width?: string;
    height?: string;
    borderRadius?: string;
    blur?: string;
    brightness?: string;
    padding?: string;
    style?: React.CSSProperties;
}
export declare const LiquidGlass: ({ children, width, height, borderRadius, blur, brightness, padding, style, ...props }: ILiquidGlassProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=GlassBox.d.ts.map