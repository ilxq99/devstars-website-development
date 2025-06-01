import React from "react";
import { LucideIcon, CircleAlert } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = (Icons as any)[name] as LucideIcon;
  const FallbackIcon = (Icons as any)[fallback] as LucideIcon;

  if (!IconComponent) {
    return <FallbackIcon size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
