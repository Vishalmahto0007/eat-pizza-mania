import { CartItem } from "../cart/types";

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
}
