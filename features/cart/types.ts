export type PizzaSize = "small" | "medium" | "large";
export type ExtraIngredient =
  | "Garlic Sauce"
  | "Spicy Sauce"
  | "Extra Cheese"
  | "Double Ingredients"
  | "Extra Toppings";

export interface CartItem {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  size: PizzaSize;
  extras: string[];
  quantity: number;
  finalPrice: number;
  uniqueGeneratedID: string;
}
