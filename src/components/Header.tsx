
import * as React from "react";
import { Link } from "react-router-dom";
import { Search, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const isMobile = useIsMobile();
  const [searchVisible, setSearchVisible] = React.useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-eco-deep" />
            <span className="hidden font-bold sm:inline-block text-xl">
              EcoRecipe
            </span>
          </Link>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          {!isMobile || searchVisible ? (
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-[200px] sm:w-[300px] pl-8"
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </form>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchVisible(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
          <nav className="flex items-center space-x-2">
            <Link to="/recipes">
              <Button variant="ghost">Recipes</Button>
            </Link>
            <Link to="/sustainability">
              <Button variant="ghost" className="hidden sm:inline-flex">Sustainability</Button>
            </Link>
            <Link to="/favorites">
              <Button variant="ghost" className="hidden sm:inline-flex">Favorites</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
