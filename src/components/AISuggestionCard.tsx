
import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AISuggestionCardProps {
  recipeTitle: string;
}

export function AISuggestionCard({ recipeTitle }: AISuggestionCardProps) {
  const [loading, setLoading] = React.useState(false);
  const [suggestion, setSuggestion] = React.useState<string | null>(null);

  // For demo purposes, we'll use mock suggestions
  const mockSuggestions = [
    "Try using seasonal vegetables to reduce carbon footprint. Right now, bell peppers, zucchini, and tomatoes are in season.",
    "Consider substituting dairy milk with oat milk for a more sustainable option that uses less water and produces fewer emissions.",
    "Reduce food waste by using broccoli stems (not just florets) - they're delicious when peeled and sliced thin.",
    "Swap beef for lentils or mushrooms to significantly lower the carbon footprint of this dish.",
    "Consider air-drying your herbs instead of using the oven to preserve them, saving energy.",
  ];

  const getAISuggestion = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const randomSuggestion = mockSuggestions[Math.floor(Math.random() * mockSuggestions.length)];
      setSuggestion(randomSuggestion);
      setLoading(false);
    }, 1000);
  };

  const handleCopy = () => {
    if (suggestion) {
      navigator.clipboard.writeText(suggestion);
      toast.success("Suggestion copied to clipboard!");
    }
  };

  return (
    <Card className="border-eco-medium">
      <CardHeader className="bg-eco-mild pb-2">
        <CardTitle className="text-lg text-eco-dark">
          Eco-Friendly AI Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {suggestion ? (
          <p className="text-sm">{suggestion}</p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Get AI-powered suggestions to make "{recipeTitle}" more sustainable.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          disabled={!suggestion}
          onClick={handleCopy}
        >
          Copy
        </Button>
        <Button
          onClick={getAISuggestion}
          disabled={loading}
          size="sm"
        >
          {loading ? "Getting suggestions..." : suggestion ? "New Suggestion" : "Get Suggestions"}
        </Button>
      </CardFooter>
    </Card>
  );
}
