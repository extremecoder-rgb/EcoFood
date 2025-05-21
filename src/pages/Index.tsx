
import * as React from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/RecipeCard";
import { EcoTip } from "@/components/EcoTip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, Leaf, Carrot } from "lucide-react";
import { recipes } from "@/data/recipes";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Select featured recipes (highest sustainability scores)
  const featuredRecipes = [...recipes]
    .sort((a, b) => b.sustainabilityScore - a.sustainabilityScore)
    .slice(0, 3);
  
  // Select random eco tips
  const ecoTips = [
    {
      title: "Reduce Food Waste",
      content: "Store fruits and vegetables properly to extend their life. Keep most fruits in the fridge, except for bananas, potatoes, and onions."
    },
    {
      title: "Eat Seasonally",
      content: "Seasonal produce requires less energy to grow and transport, resulting in a smaller carbon footprint."
    },
    {
      title: "Choose Plant-Based",
      content: "Replacing just one beef-based meal per week with a plant-based alternative can save the equivalent of 320 miles of driving in greenhouse gas emissions."
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Searching for recipes",
        description: `Looking for "${searchQuery}" recipes...`,
      });
      // In a real app, this would redirect to the search results page
      window.location.href = `/recipes?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-eco-light py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-eco-deep p-3">
              <Leaf className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-eco-dark mb-6 animate-fade-in">
            Sustainable Cooking for a Healthier Planet
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover recipes that are good for you and the planet. Lower your carbon footprint one delicious meal at a time.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-md mx-auto mb-8 animate-fade-in">
            <Input
              type="search"
              placeholder="Search for sustainable recipes..."
              className="pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            <Button 
              type="submit" 
              className="absolute right-1.5 top-1.5"
            >
              Search
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/recipes">
              <Button size="lg">Browse All Recipes</Button>
            </Link>
            <Link to="/sustainability">
              <Button variant="outline" size="lg">Sustainability Tips</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Eco-Friendly Recipes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                cookTime={recipe.cookTime + recipe.prepTime}
                sustainabilityScore={recipe.sustainabilityScore}
                dietaryTags={recipe.dietaryTags}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/recipes">
              <Button variant="outline">View All Recipes</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Sustainable Cooking Section */}
      <section className="py-16 px-4 bg-eco-mild">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Carrot className="h-8 w-8 mr-3 text-eco-deep" />
            <h2 className="text-3xl font-bold">Why Sustainable Cooking Matters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Reduce Carbon Footprint</h3>
                <p className="text-muted-foreground">
                  Food production accounts for 26% of global greenhouse gas emissions. Plant-based meals can reduce your carbon footprint by up to 73%.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Minimize Food Waste</h3>
                <p className="text-muted-foreground">
                  One-third of all food produced is wasted. Learning to use all parts of ingredients and proper storage can make a huge difference.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Support Local Ecosystems</h3>
                <p className="text-muted-foreground">
                  Seasonal and locally sourced ingredients support biodiversity, reduce transportation emissions, and help local farmers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Eco Tips Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Sustainable Cooking Tips</h2>
          
          <div className="grid gap-6">
            {ecoTips.map((tip, index) => (
              <EcoTip
                key={index}
                title={tip.title}
                content={tip.content}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/sustainability">
              <Button>
                More Sustainability Tips
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-eco-deep text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Sustainable Cooking Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of home cooks making a positive impact on the planet through delicious, eco-friendly recipes.
          </p>
          <Link to="/recipes">
            <Button size="lg" variant="secondary">
              Explore All Eco-Friendly Recipes
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
