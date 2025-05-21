
import * as React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-eco-deep" />
              <span className="font-bold">EcoRecipe</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover sustainable cooking methods and eco-friendly recipes that are good for you and the planet.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/recipes" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/seasonal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Seasonal Ingredients
                </Link>
              </li>
              <li>
                <Link to="/low-impact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Low Impact Meals
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability Guide
                </Link>
              </li>
              <li>
                <Link to="/food-waste" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reducing Food Waste
                </Link>
              </li>
              <li>
                <Link to="/local-sourcing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Local Sourcing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            © 2025 EcoRecipe. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
