
import * as React from "react";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface SustainabilityBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SustainabilityBadge({ 
  score, 
  size = "md", 
  className 
}: SustainabilityBadgeProps) {
  // Score ranges from 0-100
  let color = "bg-red-500";
  let textColor = "text-white";
  let label = "High Impact";
  
  if (score >= 80) {
    color = "bg-eco-deep";
    label = "Excellent";
  } else if (score >= 60) {
    color = "bg-green-500";
    label = "Good";
  } else if (score >= 40) {
    color = "bg-yellow-500";
    label = "Average";
  } else if (score >= 20) {
    color = "bg-orange-500";
    label = "Below Average";
  }
  
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-2 px-4"
  };
  
  return (
    <div className={cn(
      "inline-flex items-center rounded-full",
      color,
      textColor,
      sizeClasses[size],
      className
    )}>
      <Leaf className={cn(
        "mr-1",
        size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5"
      )} />
      <span>{label}</span>
    </div>
  );
}
