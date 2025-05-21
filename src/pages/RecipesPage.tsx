
import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeFilter, RecipeFilters } from "@/components/RecipeFilter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { getFilteredRecipes } from "@/data/recipes";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const RecipesPage = () => {
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<RecipeFilters>({
    sustainabilityScore: 0,
    dietaryPreferences: [],
    seasonal: false,
    prepTime: 60,
  });
  
  const [filterVisible, setFilterVisible] = useState(!isMobile);
  
  // Apply search and filters
  const recipes = getFilteredRecipes({
    query: searchQuery,
    sustainabilityScore: filters.sustainabilityScore,
    dietaryPreferences: filters.dietaryPreferences,
    seasonal: filters.seasonal,
    prepTime: filters.prepTime,
  });
  
  const handleFilterChange = (newFilters: RecipeFilters) => {
    setFilters(newFilters);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams({});
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Eco-Friendly Recipes</h1>
        <p className="text-muted-foreground mb-6">
          Discover delicious recipes that are good for you and the planet
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-8">
          <Input
            type="search"
            placeholder="Search for recipes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Button 
            type="submit" 
            className="absolute right-1 top-1"
            size="sm"
          >
            Search
          </Button>
        </form>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters - Left Column on Desktop */}
          <div className="md:col-span-1">
            {isMobile && (
              <Button 
                variant="outline" 
                className="w-full mb-4"
                onClick={() => setFilterVisible(!filterVisible)}
              >
                {filterVisible ? "Hide Filters" : "Show Filters"}
              </Button>
            )}
            
            {filterVisible && (
              <RecipeFilter onFilterChange={handleFilterChange} />
            )}
          </div>
          
          {/* Recipe Grid - Right Column on Desktop */}
          <div className="md:col-span-3">
            {recipes.length > 0 ? (
              <>
                <p className="mb-4 text-muted-foreground">
                  Found {recipes.length} recipe{recipes.length !== 1 ? 's' : ''}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recipes.map((recipe) => (
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
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No recipes found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find more recipes.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipesPage;
