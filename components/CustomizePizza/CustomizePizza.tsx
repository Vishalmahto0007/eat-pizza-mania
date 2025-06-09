"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import menuData from "@/public/data/menu.json";
import styles from "./CustomizePizza.module.css";
import { PizzaItem } from "../../types";
import { useAppDispatch } from "@/store/hook";
import pizzaList from "@/public/data/menu.json";
import { generatePizzaId } from "@/features/utils/generatePizzaId";
import { PizzaSize } from "@/features/cart/types";
import { addToCart } from "@/features/cart/cartSlice";

type Ingredient = {
  name: string;
  label: string;
  price: number;
};

const ingredientOptions: Ingredient[] = [
  { name: "doubleIngredients", label: "Double Ingredients", price: 50 },
  { name: "extraCheese", label: "Extra Cheese", price: 40 },
  { name: "spicySauce", label: "Spicy Sauce", price: 30 },
  { name: "garlicSauce", label: "Garlic Sauce", price: 20 },
  { name: "extraToppings", label: "Extra Toppings", price: 60 },
];

const sizes = [
  { label: "Small", price: 0 },
  { label: "Medium", price: 50 },
  { label: "Large", price: 100 },
];

const CustomizePizza = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const pizza: PizzaItem | undefined = menuData.find(
    (p) => p.id === Number(id)
  );

  if (!id || !pizza) {
    return (
      <>
        <div className={styles.pageTitle}>
          <h1>Customize Your Pizza</h1>
        </div>
        <div className={styles.notFound}>
          <p>🍕 Pizza not available. Try another!</p>
        </div>
      </>
    );
  }

  const toggleIngredient = (label: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const handleAddToCart = () => {
    const item = pizzaList.find((i) => i.id === Number(id));
    if (item) {
      const sizeLabel = sizes[selectedSizeIndex].label;
      const sizePrice = sizes[selectedSizeIndex].price;

      const uniqueGeneratedID = generatePizzaId(
        item.id,
        item.name,
        sizeLabel,
        selectedIngredients
      );

      const extrasPrice = selectedIngredients.reduce((sum, ingr) => {
        const ingredient = ingredientOptions.find((i) => i.label === ingr);
        return ingredient ? sum + ingredient.price : sum;
      }, 0);

      const totalPrice = item.basePrice + sizePrice + extrasPrice;

      dispatch(
        addToCart({
          ...item,
          size: sizeLabel as PizzaSize,
          finalPrice: totalPrice,
          extras: selectedIngredients,
          uniqueGeneratedID,
          quantity: 1,
        })
      );
    }
  };

  const sizePrice = sizes[selectedSizeIndex].price;
  const extrasPrice = selectedIngredients.reduce((sum, ingr) => {
    const ingredient = ingredientOptions.find((i) => i.label === ingr);
    return ingredient ? sum + ingredient.price : sum;
  }, 0);

  const totalPrice = pizza.basePrice + sizePrice + extrasPrice;

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Customize Your Pizza</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              src={`/images/pizza${pizza.id}.png`}
              alt={pizza.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className={styles.right}>
          <h2 className={styles.title}>{pizza.name}</h2>
          <p className={styles.desc}>{pizza.description}</p>

          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            {sizes.map((size, index) => (
              <div
                key={size.label}
                className={`${styles.size} ${
                  selectedSizeIndex === index ? styles.selected : ""
                }`}
                onClick={() => setSelectedSizeIndex(index)}
              >
                <Image src="/icons/size.png" layout="fill" alt={size.label} />
                <span className={styles.number}>{size.label}</span>
              </div>
            ))}
          </div>

          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            {ingredientOptions.map(({ name, label, price }) => (
              <div className={styles.option} key={name}>
                <input
                  type="checkbox"
                  id={label}
                  name={label}
                  checked={selectedIngredients.includes(label)}
                  onChange={() => toggleIngredient(label)}
                  className={styles.checkbox}
                />
                <label htmlFor={label}>
                  {label} (+₹{price})
                </label>
              </div>
            ))}
          </div>

          <div className={styles.price}>Total Price: ₹{totalPrice}</div>

          <div className={styles.add}>
            <button className={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizePizza;
