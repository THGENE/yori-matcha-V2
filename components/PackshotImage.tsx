import React from "react";

type PackshotImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  overlay?: boolean;
};

export default function PackshotImage({ overlay = true, ...props }: PackshotImageProps) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img {...props} style={{ display: "block", width: "100%", ...props.style }} />
      {overlay && (
        <img
          src="/images/matcha-overlay.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      )}
    </div>
  );
}
