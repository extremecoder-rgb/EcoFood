
import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SustainabilityBadge } from "@/components/SustainabilityBadge";
import { Clock, Salad } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cookTime: number;
  sustainabilityScore: number;
  dietaryTags: string[];
}

export function RecipeCard({ 
  id, 
  title, 
  image, 
  cookTime, 
  sustainabilityScore, 
  dietaryTags 
}: RecipeCardProps) {
  return (
    <Link to={`/recipe/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <SustainabilityBadge score={sustainabilityScore} size="sm" />
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
          <div className="flex items-center mt-2 text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{cookTime} min</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
          {dietaryTags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-eco-mild text-eco-dark">
              {tag === "vegan" && <Salad className="h-3 w-3 mr-1" />}
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
