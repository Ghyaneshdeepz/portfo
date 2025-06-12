function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export function convertNodeToTailwind(node) {
  // Convert fills to background color
  const getFillColor = (fills) => {
    const color = fills?.[0]?.color;
    return color ? rgbToHex(color.r * 255, color.g * 255, color.b * 255) : null;
  };

  const getTextColor = (fills) => {
    const color = fills?.[0]?.color;
    return color ? `text-[${rgbToHex(color.r * 255, color.g * 255, color.b * 255)}]` : "text-black";
  };

  const childrenOutput =
    node.children?.map((child) => convertNodeToTailwind(child)).join("\n") || "";

  // TEXT node
  if (node.type === "TEXT") {
    const fontSize = node.style?.fontSize || 16;
    const fontWeight = node.style?.fontWeight ? `font-[${node.style.fontWeight}]` : "";
    const lineHeight = node.style?.lineHeightPx ? `leading-[${node.style.lineHeightPx}px]` : "";
    const textColor = getTextColor(node.fills);

    return `<p className=\"text-[${fontSize}px] ${fontWeight} ${lineHeight} ${textColor}\">${node.characters}</p>`;
  }

 
  if (node.type === "RECTANGLE" || node.type === "FRAME" || node.type === "COMPONENT") {
    const width = node.absoluteBoundingBox?.width || 100;
    const height = node.absoluteBoundingBox?.height || 100;
    const bgColor = getFillColor(node.fills);
    const layout = node.layoutMode === "HORIZONTAL" ? "flex-row" : node.layoutMode === "VERTICAL" ? "flex-col" : "";
    const justify = node.primaryAxisAlignItems ? `justify-${node.primaryAxisAlignItems.toLowerCase()}` : "";
    const items = node.counterAxisAlignItems ? `items-${node.counterAxisAlignItems.toLowerCase()}` : "";

    return `<div className=\"w-[${width}px] h-[${height}px] ${bgColor ? `bg-[${bgColor}]` : ""} ${layout ? `flex ${layout}` : ""} ${justify} ${items}\">\n${childrenOutput}\n</div>`;
  }

  // Default wrapper if unknown type with children
  if (node.children && node.children.length > 0) {
    return `<div className=\"relative\">\n${childrenOutput}\n</div>`;
  }

  return "";
}
