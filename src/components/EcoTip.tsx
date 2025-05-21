
import * as React from "react";
import { Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EcoTipProps {
  title: string;
  content: string;
}

export function EcoTip({ title, content }: EcoTipProps) {
  return (
    <Card className="border-eco-medium bg-eco-light p-4">
      <div className="flex items-start space-x-3">
        <div className="rounded-full bg-eco-deep p-1.5 text-white">
          <Leaf className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-eco-dark">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{content}</p>
        </div>
      </div>
    </Card>
  );
}
