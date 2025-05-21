
import * as React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Recycle, Carrot, Utensils } from "lucide-react";

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-eco-light py-12">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-eco-medium rounded-full mb-4">
              <Leaf className="h-6 w-6 text-eco-dark" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Cooking Guide</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to reduce your environmental impact in the kitchen with these practical tips and strategies for more sustainable cooking.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <Tabs defaultValue="food-choices">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="food-choices">Food Choices</TabsTrigger>
                <TabsTrigger value="waste-reduction">Reducing Waste</TabsTrigger>
                <TabsTrigger value="energy-water">Energy & Water</TabsTrigger>
                <TabsTrigger value="shopping">Shopping Tips</TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="food-choices" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Carrot className="h-5 w-5 mr-2 text-eco-deep" />
                        <h2 className="text-2xl font-medium">Sustainable Food Choices</h2>
                      </div>
                      
                      <p className="mb-6">
                        The food you choose to eat has a significant impact on the environment. Here's how to make more sustainable choices:
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Choose Plant-Based More Often</h3>
                          <p className="text-muted-foreground">
                            Plant-based foods generally have a much lower environmental footprint than animal products. Even replacing a few meals per week can make a difference.
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Eat Seasonally</h3>
                          <p className="text-muted-foreground">
                            Seasonal produce requires less energy for growing and transportation. It's also often fresher and more flavorful.
                          </p>
                          
                          <div className="mt-4 bg-eco-mild p-4 rounded-md">
                            <h4 className="font-medium mb-2">Seasonal Produce Guide</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium">Spring</h5>
                                <p className="text-sm text-muted-foreground">
                                  Asparagus, Peas, Radishes, Rhubarb, Spinach, Strawberries
                                </p>
                              </div>
                              <div>
                                <h5 className="font-medium">Summer</h5>
                                <p className="text-sm text-muted-foreground">
                                  Bell Peppers, Berries, Corn, Cucumber, Eggplant, Tomatoes, Zucchini
                                </p>
                              </div>
                              <div>
                                <h5 className="font-medium">Fall</h5>
                                <p className="text-sm text-muted-foreground">
                                  Apples, Brussels Sprouts, Cauliflower, Pears, Pumpkin, Sweet Potatoes
                                </p>
                              </div>
                              <div>
                                <h5 className="font-medium">Winter</h5>
                                <p className="text-sm text-muted-foreground">
                                  Citrus Fruits, Kale, Leeks, Potatoes, Turnips, Winter Squash
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Choose Sustainable Seafood</h3>
                          <p className="text-muted-foreground">
                            If you eat seafood, look for certifications like MSC (Marine Stewardship Council) or ASC (Aquaculture Stewardship Council) that ensure sustainable fishing practices.
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Diversify Your Protein Sources</h3>
                          <p className="text-muted-foreground">
                            Try incorporating more beans, lentils, tofu, tempeh, and other plant proteins into your diet. They're not only environmentally friendly but also nutritious and affordable.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="waste-reduction" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Recycle className="h-5 w-5 mr-2 text-eco-deep" />
                        <h2 className="text-2xl font-medium">Reducing Food Waste</h2>
                      </div>
                      
                      <p className="mb-6">
                        About one-third of all food produced globally is wasted. Here's how you can minimize waste in your kitchen:
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Plan Your Meals</h3>
                          <p className="text-muted-foreground">
                            Create a weekly meal plan and shopping list to avoid buying more than you need. Check your pantry and refrigerator before shopping to avoid duplicates.
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Store Food Properly</h3>
                          <p className="text-muted-foreground">
                            Learn the best storage methods for different foods to maximize freshness. Use airtight containers for pantry goods and proper containers for refrigerated items.
                          </p>
                          
                          <div className="mt-4 bg-eco-mild p-4 rounded-md">
                            <h4 className="font-medium mb-2">Storage Tips for Common Foods</h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                              <li>
                                <span className="font-medium">Herbs:</span> Store in a glass with water like flowers, or wrap in damp paper towel
                              </li>
                              <li>
                                <span className="font-medium">Berries:</span> Don't wash until ready to eat; store in ventilated containers
                              </li>
                              <li>
                                <span className="font-medium">Leafy Greens:</span> Wrap in slightly damp paper towels and place in airtight containers
                              </li>
                              <li>
                                <span className="font-medium">Root Vegetables:</span> Store in a cool, dark place; don't refrigerate potatoes
                              </li>
                              <li>
                                <span className="font-medium">Bread:</span> Freeze what you won't eat in 2-3 days
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Use Everything</h3>
                          <p className="text-muted-foreground">
                            Learn to use parts of food typically thrown away: broccoli stems, vegetable peels, stale bread, etc. Save vegetable scraps to make stock.
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Understand Expiration Dates</h3>
                          <p className="text-muted-foreground">
                            "Best by" and "use by" dates often indicate quality, not safety. Use your senses to determine if food is still good rather than automatically discarding it.
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Compost</h3>
                          <p className="text-muted-foreground">
                            Any food waste that can't be used should be composted rather than sent to landfill. Even apartment dwellers can use small composting systems.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="energy-water" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Utensils className="h-5 w-5 mr-2 text-eco-deep" />
                        <h2 className="text-2xl font-medium">Energy & Water Efficiency</h2>
                      </div>
                      
                      <p className="mb-6">
                        How you cook is just as important as what you cook. These tips can help reduce your kitchen's energy and water usage:
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Energy-Efficient Cooking</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>Match pot and pan sizes to burner sizes</li>
                            <li>Use lids when boiling water to reduce energy use by up to 75%</li>
                            <li>Turn off electric burners a few minutes before cooking is complete</li>
                            <li>Use a toaster oven or microwave for smaller items instead of heating a full oven</li>
                            <li>Batch cook multiple items when using the oven</li>
                          </ul>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Water Conservation</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>Use a basin for washing produce instead of running water</li>
                            <li>Collect water used for rinsing fruits and vegetables to water plants</li>
                            <li>Run the dishwasher only when full</li>
                            <li>Use the appropriate amount of water when cooking pasta or rice</li>
                            <li>Fix leaky faucets promptly</li>
                          </ul>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Refrigerator Efficiency</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>Keep your refrigerator between 35-38°F and freezer at 0°F</li>
                            <li>Don't leave the refrigerator door open</li>
                            <li>Let hot foods cool before refrigerating</li>
                            <li>Keep refrigerator coils clean</li>
                            <li>Check door seals to ensure they're tight</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="shopping" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Leaf className="h-5 w-5 mr-2 text-eco-deep" />
                        <h2 className="text-2xl font-medium">Sustainable Shopping</h2>
                      </div>
                      
                      <p className="mb-6">
                        Your shopping habits have a significant impact on the environment. Here's how to make more sustainable choices:
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Reduce Packaging</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>Bring reusable produce bags and shopping bags</li>
                            <li>Choose products with minimal or recyclable packaging</li>
                            <li>Buy in bulk for pantry staples (flour, rice, beans, etc.)</li>
                            <li>Use glass jars or containers for bulk items</li>
                            <li>Choose loose produce over pre-packaged when possible</li>
                          </ul>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Shop Locally</h3>
                          <p className="text-muted-foreground">
                            Farmers markets and community-supported agriculture (CSA) programs provide fresh, local produce with minimal transportation emissions. You'll also be supporting local farmers and the local economy.
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Choose Organic When Possible</h3>
                          <p className="text-muted-foreground">
                            Organic farming practices generally have a lower environmental impact than conventional methods. If your budget is limited, prioritize organic for the "dirty dozen" (foods with highest pesticide residues).
                          </p>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Check for Certifications</h3>
                          <p className="text-muted-foreground mb-4">
                            Look for certifications that indicate sustainable practices:
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium">Environmental Certifications</h4>
                              <ul className="text-sm text-muted-foreground">
                                <li>USDA Organic</li>
                                <li>Rainforest Alliance</li>
                                <li>Marine Stewardship Council</li>
                                <li>Non-GMO Project Verified</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium">Social Impact Certifications</h4>
                              <ul className="text-sm text-muted-foreground">
                                <li>Fair Trade Certified</li>
                                <li>Equal Exchange</li>
                                <li>B Corporation</li>
                                <li>Direct Trade</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
