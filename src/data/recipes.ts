
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  prepTime: number;
  totalTime: number;
  servings: number;
  sustainabilityScore: number;
  dietaryTags: string[];
  ingredients: string[];
  instructions: string[];
  tips: { title: string; content: string }[];
  carbonFootprint: {
    value: number;
    unit: string;
    comparison: string;
  };
  seasonal: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Seasonal Vegetable Buddha Bowl",
    description: "A nutritious and colorful bowl filled with seasonal vegetables, whole grains, and plant-based protein.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cookTime: 15,
    prepTime: 15,
    totalTime: 30,
    servings: 2,
    sustainabilityScore: 92,
    dietaryTags: ["vegan", "gluten-free"],
    ingredients: [
      "1 cup cooked quinoa",
      "2 cups mixed seasonal vegetables (carrots, broccoli, cauliflower)",
      "1 cup chickpeas, rinsed and drained",
      "1 avocado, sliced",
      "2 tbsp olive oil",
      "1 lemon, juiced",
      "1 tbsp tahini",
      "Salt and pepper to taste",
      "Fresh herbs (parsley, cilantro)"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
      "Roast vegetables for 15 minutes until tender",
      "Divide quinoa between two bowls",
      "Top with roasted vegetables, chickpeas, and avocado",
      "Whisk together remaining olive oil, lemon juice, and tahini",
      "Drizzle dressing over bowls and garnish with fresh herbs"
    ],
    tips: [
      {
        title: "Seasonal Adaptation",
        content: "Adapt this recipe by using whatever vegetables are in season in your region for the lowest carbon footprint."
      },
      {
        title: "Food Waste Reduction",
        content: "Use veggie scraps to make homemade vegetable broth for future recipes."
      },
      {
        title: "Water Conservation",
        content: "Rinse your chickpeas and vegetables in a bowl of water rather than under running water to conserve resources."
      }
    ],
    carbonFootprint: {
      value: 0.7,
      unit: "kg CO2e",
      comparison: "75% lower than average meal"
    },
    seasonal: true
  },
  {
    id: "2",
    title: "Plant-Based Beyond Burger",
    description: "A delicious plant-based burger that mimics the taste and texture of a traditional beef burger while being more environmentally friendly.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cookTime: 10,
    prepTime: 5,
    totalTime: 15,
    servings: 4,
    sustainabilityScore: 78,
    dietaryTags: ["vegan", "dairy-free"],
    ingredients: [
      "4 plant-based burger patties",
      "4 whole grain buns",
      "1 tomato, sliced",
      "1 red onion, sliced",
      "4 lettuce leaves",
      "4 tbsp plant-based mayo",
      "1 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat olive oil in a skillet over medium heat",
      "Cook plant-based patties according to package instructions (about 3-4 minutes each side)",
      "Toast buns lightly",
      "Assemble burgers with plant-based mayo, lettuce, tomato, and onion"
    ],
    tips: [
      {
        title: "Climate Impact",
        content: "Plant-based meat alternatives produce significantly fewer greenhouse gas emissions compared to beef burgers."
      },
      {
        title: "Packaging Reduction",
        content: "Buy produce without plastic packaging when possible, and consider making your own plant-based patties to reduce packaging waste."
      },
      {
        title: "Local Sourcing",
        content: "Look for locally produced plant-based burgers to reduce transportation emissions."
      }
    ],
    carbonFootprint: {
      value: 2.2,
      unit: "kg CO2e",
      comparison: "50% lower than beef burger"
    },
    seasonal: false
  },
  {
    id: "3",
    title: "Zero-Waste Vegetable Soup",
    description: "A hearty and nutritious soup that uses the whole vegetable, including parts that are typically thrown away, to minimize food waste.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    cookTime: 40,
    prepTime: 15,
    totalTime: 55,
    servings: 6,
    sustainabilityScore: 95,
    dietaryTags: ["vegetarian", "gluten-free"],
    ingredients: [
      "2 onions, including skins for stock",
      "3 carrots with tops",
      "2 celery stalks with leaves",
      "1 parsnip",
      "2 potatoes, unpeeled",
      "2 cloves garlic",
      "1 tsp dried herbs (thyme, rosemary)",
      "6 cups water",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1 lemon, zest and juice"
    ],
    instructions: [
      "Clean vegetables thoroughly",
      "Separate vegetable scraps (onion skins, carrot tops, celery leaves) and simmer in water for 20 minutes to create stock",
      "Strain stock and set aside",
      "Dice all remaining vegetables",
      "In a large pot, heat olive oil and sauté onion and garlic until translucent",
      "Add remaining vegetables and cook for 5 minutes",
      "Add homemade vegetable stock, herbs, salt, and pepper",
      "Simmer for 30 minutes until vegetables are tender",
      "Finish with lemon zest and juice before serving"
    ],
    tips: [
      {
        title: "Composting",
        content: "Any remaining vegetable scraps that can't be used in the soup should be composted rather than thrown away."
      },
      {
        title: "Storage Optimization",
        content: "Store soup in glass containers rather than plastic for better food preservation and environmental benefits."
      },
      {
        title: "Energy Saving",
        content: "Use a lid while simmering to reduce energy use and cooking time."
      }
    ],
    carbonFootprint: {
      value: 0.5,
      unit: "kg CO2e",
      comparison: "85% lower than average meal"
    },
    seasonal: true
  },
  {
    id: "4",
    title: "Local Harvest Grain Bowl",
    description: "A nutritious grain bowl featuring locally sourced ingredients that support regional farmers and reduce transportation emissions.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    cookTime: 25,
    prepTime: 15,
    totalTime: 40,
    servings: 4,
    sustainabilityScore: 88,
    dietaryTags: ["vegetarian", "nut-free"],
    ingredients: [
      "2 cups locally grown farro or barley",
      "4 cups water or vegetable broth",
      "2 local seasonal squash, diced",
      "1 bunch local kale, chopped",
      "1 local onion, diced",
      "2 tbsp olive oil",
      "2 tbsp apple cider vinegar (locally produced if possible)",
      "1 tbsp local honey or maple syrup",
      "Salt and pepper to taste",
      "¼ cup local seeds (sunflower, pumpkin)"
    ],
    instructions: [
      "Cook farro or barley according to package instructions",
      "In a large skillet, heat 1 tbsp olive oil and sauté onion until translucent",
      "Add diced squash and cook until tender, about 10 minutes",
      "Add chopped kale and cook until wilted, about 3 minutes",
      "In a small bowl, whisk together remaining olive oil, vinegar, honey, salt, and pepper",
      "Combine cooked grains and vegetables in a large bowl",
      "Drizzle with dressing and top with local seeds"
    ],
    tips: [
      {
        title: "Local Sourcing",
        content: "Shopping at farmers markets reduces food miles and supports local agricultural economies."
      },
      {
        title: "Seasonal Awareness",
        content: "Using in-season produce ensures the lowest environmental impact and highest nutritional value."
      },
      {
        title: "Bulk Buying",
        content: "Purchase grains from bulk bins using reusable containers to minimize packaging waste."
      }
    ],
    carbonFootprint: {
      value: 0.8,
      unit: "kg CO2e",
      comparison: "70% lower than average meal"
    },
    seasonal: true
  },
  {
    id: "5",
    title: "Mediterranean Lentil Salad",
    description: "A protein-rich salad featuring lentils and fresh vegetables in a light Mediterranean dressing.",
    image: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cookTime: 20,
    prepTime: 10,
    totalTime: 30,
    servings: 4,
    sustainabilityScore: 90,
    dietaryTags: ["vegan", "gluten-free"],
    ingredients: [
      "2 cups green lentils, rinsed",
      "4 cups water",
      "1 cucumber, diced",
      "1 red bell pepper, diced",
      "1 small red onion, finely diced",
      "½ cup fresh parsley, chopped",
      "¼ cup olive oil",
      "2 tbsp lemon juice",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
      "Optional: ¼ cup olives"
    ],
    instructions: [
      "Cook lentils in water until tender but still firm, about 20 minutes",
      "Drain lentils and let cool",
      "In a large bowl, combine lentils, cucumber, bell pepper, red onion, and parsley",
      "Whisk together olive oil, lemon juice, oregano, salt, and pepper",
      "Pour dressing over salad and toss to combine",
      "Refrigerate for at least 30 minutes before serving to allow flavors to meld",
      "Add olives before serving if desired"
    ],
    tips: [
      {
        title: "Protein Alternative",
        content: "Lentils provide a high-protein alternative to animal products with a fraction of the environmental impact."
      },
      {
        title: "Water Efficiency",
        content: "Lentils require significantly less water to produce than animal proteins, making them an eco-friendly choice."
      },
      {
        title: "Batch Cooking",
        content: "Cook extra lentils and freeze them in portions for quick future meals, saving energy and time."
      }
    ],
    carbonFootprint: {
      value: 0.6,
      unit: "kg CO2e",
      comparison: "80% lower than average meal"
    },
    seasonal: true
  },
  {
    id: "6",
    title: "Sustainable Fish Tacos",
    description: "Delicious tacos featuring sustainably sourced fish with fresh toppings and homemade slaw.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cookTime: 15,
    prepTime: 15,
    totalTime: 30,
    servings: 4,
    sustainabilityScore: 75,
    dietaryTags: ["dairy-free"],
    ingredients: [
      "1 lb MSC-certified white fish (cod, haddock)",
      "8 corn tortillas",
      "1 avocado, sliced",
      "1 lime, cut into wedges",
      "¼ cup cilantro, chopped",
      "For the slaw:",
      "2 cups red and green cabbage, shredded",
      "1 carrot, grated",
      "2 tbsp apple cider vinegar",
      "1 tbsp olive oil",
      "For the seasoning:",
      "1 tsp cumin",
      "1 tsp paprika",
      "½ tsp garlic powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Mix cumin, paprika, garlic powder, salt, and pepper",
      "Rub fish with spice mixture",
      "Heat a skillet over medium-high heat with a small amount of oil",
      "Cook fish for about 3-4 minutes per side until flaky",
      "Meanwhile, prepare slaw by combining cabbage, carrot, vinegar, and oil",
      "Warm tortillas briefly in a dry pan",
      "Assemble tacos with fish, slaw, avocado, cilantro, and lime wedges"
    ],
    tips: [
      {
        title: "Sustainable Seafood",
        content: "Choose fish certified by the Marine Stewardship Council (MSC) to ensure it comes from sustainable fisheries."
      },
      {
        title: "Plastic Reduction",
        content: "Buy fish from a counter using your own container rather than pre-packaged options to reduce plastic waste."
      },
      {
        title: "Avocado Alternatives",
        content: "If avocados aren't local to your region, consider substituting with a local seasonal vegetable spread to reduce transportation emissions."
      }
    ],
    carbonFootprint: {
      value: 1.5,
      unit: "kg CO2e",
      comparison: "40% lower than beef tacos"
    },
    seasonal: false
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getFilteredRecipes = (filters: {
  query?: string;
  sustainabilityScore?: number;
  dietaryPreferences?: string[];
  seasonal?: boolean;
  prepTime?: number;
}): Recipe[] => {
  return recipes.filter(recipe => {
    // Filter by search query
    if (filters.query && !recipe.title.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }

    // Filter by sustainability score
    if (typeof filters.sustainabilityScore === 'number' && recipe.sustainabilityScore < filters.sustainabilityScore) {
      return false;
    }

    // Filter by dietary preferences
    if (filters.dietaryPreferences && filters.dietaryPreferences.length > 0) {
      const hasAllPreferences = filters.dietaryPreferences.every(pref => 
        recipe.dietaryTags.includes(pref)
      );
      if (!hasAllPreferences) {
        return false;
      }
    }

    // Filter by seasonal
    if (filters.seasonal && !recipe.seasonal) {
      return false;
    }

    // Filter by prep time
    if (typeof filters.prepTime === 'number' && recipe.prepTime + recipe.cookTime > filters.prepTime) {
      return false;
    }

    return true;
  });
};
