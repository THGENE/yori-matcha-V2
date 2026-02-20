import React from "react";

type PackshotImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  flipX?: boolean;
};

export const PACKSHOT_PREMIUM_STYLE: React.CSSProperties = {
  objectFit: "contain",
  width: "100%",
  height: "100%",
  padding: "8%",
};

export const PACKSHOT_DAILY_MATCHA_STYLE: React.CSSProperties = {
  ...PACKSHOT_PREMIUM_STYLE,
  padding: "10%",
  objectPosition: "50% 50%",
};

const HOMEPAGE_PACKSHOT_IDS = new Set([
  "daily-matcha",
  "yame-velvet",
  "uji-harmony",
  "yame-heritage",
  "uji-single-garden",
  "discovery",
  "duo-ceremonial",
  "duo-grand-cru",
]);

const PACKSHOT_HOMEPAGE_STYLE_BY_PRODUCT_ID: Record<string, React.CSSProperties> = {
  "daily-matcha": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(1)",
    objectPosition: "50% 50%",
  },
  "yame-velvet": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.84)",
    objectPosition: "50% 49%",
  },
  "uji-harmony": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.84)",
    objectPosition: "50% 49%",
  },
  "yame-heritage": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.78)",
    objectPosition: "50% 49%",
  },
  "uji-single-garden": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.74)",
    objectPosition: "50% 47%",
  },
  discovery: {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.96)",
    objectPosition: "50% 50%",
  },
  "duo-ceremonial": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.96)",
    objectPosition: "50% 50%",
  },
  "duo-grand-cru": {
    ...PACKSHOT_DAILY_MATCHA_STYLE,
    transform: "scale(0.96)",
    objectPosition: "50% 50%",
  },
};

export function getPackshotStyleByProductId(productId?: string): React.CSSProperties {
  if (productId && HOMEPAGE_PACKSHOT_IDS.has(productId)) {
    return PACKSHOT_HOMEPAGE_STYLE_BY_PRODUCT_ID[productId] ?? PACKSHOT_DAILY_MATCHA_STYLE;
  }

  return PACKSHOT_DAILY_MATCHA_STYLE;
}

export default function PackshotImage({ flipX = false, ...props }: PackshotImageProps) {
  const mergedTransform = `${flipX ? "scaleX(-1)" : ""}${props.style?.transform ? ` ${props.style.transform}` : ""}`.trim();

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      <img
        {...props}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          transform: mergedTransform || undefined,
          imageRendering: "auto",
          filter: "none",
          ...props.style,
        }}
      />
    </div>
  );
}
