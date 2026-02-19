import React from "react";
import { motion } from "framer-motion";

type PackshotImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  overlay?: boolean;
  flipX?: boolean;
};

export default function PackshotImage({ overlay = true, flipX = false, ...props }: PackshotImageProps) {
  const mergedTransform = `${flipX ? "scaleX(-1)" : ""}${props.style?.transform ? ` ${props.style.transform}` : ""}`.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      <img
        {...props}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: mergedTransform || undefined,
          ...props.style,
        }}
      />
      {overlay && (
        <img
          src="/images/matcha-overlay.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "58%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 2,
            objectFit: "cover",
            opacity: 0.95,
            filter: "hue-rotate(-8deg) saturate(1.08) brightness(0.94)",
          }}
        />
      )}
    </motion.div>
  );
}
