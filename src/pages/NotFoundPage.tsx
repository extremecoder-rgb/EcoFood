
import * as React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center bg-eco-light">
        <div className="container max-w-lg mx-auto px-4 py-16 text-center">
          <Leaf className="h-16 w-16 mx-auto text-eco-deep mb-6" />
          
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button>Go to Homepage</Button>
            </Link>
            <Link to="/recipes">
              <Button variant="outline">Browse Recipes</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;
