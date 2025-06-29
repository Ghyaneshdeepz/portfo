import React from "react";
import { cn } from "./lib/utils";

export default function Bglines() {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none -z-10",
        "bg-white dark:bg-black",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]",
        "dark:[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
      )}
    />
  );
}
