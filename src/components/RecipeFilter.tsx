
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RecipeFilterProps {
  onFilterChange: (filters: RecipeFilters) => void;
}

export interface RecipeFilters {
  sustainabilityScore: number;
  dietaryPreferences: string[];
  seasonal: boolean;
  prepTime: number;
}

export function RecipeFilter({ onFilterChange }: RecipeFilterProps) {
  const [filters, setFilters] = React.useState<RecipeFilters>({
    sustainabilityScore: 0,
    dietaryPreferences: [],
    seasonal: false,
    prepTime: 60,
  });

  const dietaryOptions = [
    { id: "vegan", label: "Vegan" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "gluten-free", label: "Gluten Free" },
    { id: "dairy-free", label: "Dairy Free" },
    { id: "nut-free", label: "Nut Free" },
  ];

  const handleDietaryChange = (id: string, checked: boolean) => {
    setFilters(prev => {
      const newPreferences = checked
        ? [...prev.dietaryPreferences, id]
        : prev.dietaryPreferences.filter(pref => pref !== id);
        
      const newFilters = {
        ...prev,
        dietaryPreferences: newPreferences,
      };
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleSustainabilityChange = (value: number[]) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        sustainabilityScore: value[0],
      };
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePrepTimeChange = (value: number[]) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        prepTime: value[0],
      };
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleSeasonalChange = (checked: boolean) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        seasonal: checked,
      };
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const resetFilters = () => {
    const defaultFilters = {
      sustainabilityScore: 0,
      dietaryPreferences: [],
      seasonal: false,
      prepTime: 60,
    };
    
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Recipe Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="sustainability">Sustainability Score</Label>
            <span className="text-sm text-muted-foreground">
              {filters.sustainabilityScore}+
            </span>
          </div>
          <Slider
            id="sustainability"
            min={0}
            max={100}
            step={10}
            value={[filters.sustainabilityScore]}
            onValueChange={handleSustainabilityChange}
            className="[&_[role=slider]]:bg-eco-deep"
          />
        </div>

        <div className="space-y-2">
          <Label>Dietary Preferences</Label>
          <div className="grid grid-cols-2 gap-2">
            {dietaryOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={filters.dietaryPreferences.includes(option.id)}
                  onCheckedChange={(checked) => 
                    handleDietaryChange(option.id, Boolean(checked))
                  }
                />
                <Label htmlFor={option.id} className="text-sm font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="prepTime">Max Prep Time</Label>
            <span className="text-sm text-muted-foreground">
              {filters.prepTime} min
            </span>
          </div>
          <Slider
            id="prepTime"
            min={10}
            max={120}
            step={5}
            value={[filters.prepTime]}
            onValueChange={handlePrepTimeChange}
            className="[&_[role=slider]]:bg-eco-deep"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="seasonal"
            checked={filters.seasonal}
            onCheckedChange={(checked) => handleSeasonalChange(Boolean(checked))}
          />
          <Label htmlFor="seasonal" className="font-normal">
            Seasonal ingredients only
          </Label>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}
