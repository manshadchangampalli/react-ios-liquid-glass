import React from "react";
import "./style.css";

export const LiquidGlass = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="liquid-glass__container">{children}</div>
            <svg style={{ display: "none" }}> 
                <filter id="displacementFilter">
                    <feImage
                        preserveAspectRatio="none"
                        href="data:image/png;base64,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"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        scale="150"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
        </>
    );
};
