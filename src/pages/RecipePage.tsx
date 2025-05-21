
import * as React from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SustainabilityBadge } from "@/components/SustainabilityBadge";
import { EcoTip } from "@/components/EcoTip";
import { AISuggestionCard } from "@/components/AISuggestionCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, Leaf, Carrot } from "lucide-react";
import { getRecipeById } from "@/data/recipes";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = id ? getRecipeById(id) : null;
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the recipe you were looking for.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recipe Content - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recipe Header */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <SustainabilityBadge score={recipe.sustainabilityScore} />
                {recipe.dietaryTags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
                {recipe.seasonal && (
                  <Badge className="bg-eco-medium text-eco-dark">
                    Seasonal
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Prep: {recipe.prepTime} min</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Cook: {recipe.cookTime} min</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Total: {recipe.totalTime} min</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Serves: {recipe.servings}</span>
                </div>
              </div>
            </div>
            
            {/* Recipe Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-auto object-cover aspect-video" 
              />
              <div className="absolute top-4 right-4">
                <SustainabilityBadge score={recipe.sustainabilityScore} size="lg" />
              </div>
            </div>
            
            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-medium mb-4">Ingredients</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <Carrot className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-eco-deep" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-medium mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="font-medium text-eco-deep mr-3">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Sustainability Impact */}
            <div>
              <h2 className="text-2xl font-medium mb-4">Environmental Impact</h2>
              <div className="bg-eco-light rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 mr-2 text-eco-deep" />
                  <h3 className="text-xl font-medium">Carbon Footprint</h3>
                </div>
                
                <p className="mb-3">
                  <span className="font-medium">{recipe.carbonFootprint.value} {recipe.carbonFootprint.unit}</span> per serving
                </p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  That's {recipe.carbonFootprint.comparison}.
                </p>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-4">Sustainability Tips</h3>
                <div className="space-y-4">
                  {recipe.tips.map((tip, index) => (
                    <EcoTip 
                      key={index}
                      title={tip.title}
                      content={tip.content}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-6">
            <AISuggestionCard recipeTitle={recipe.title} />
            
            {/* Related recipes would go here in a real app */}
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2">Why This Recipe Is Sustainable</h3>
              <p className="text-sm text-muted-foreground">
                This recipe has been rated with a sustainability score of {recipe.sustainabilityScore}/100 based on ingredients, preparation methods, and overall environmental impact.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipePage;
