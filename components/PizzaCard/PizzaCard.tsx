import { useRouter, usePathname } from "next/navigation";

import styles from "./PizzaCard.module.css";
import pizzaList from "@/public/data/menu.json";
import { useAppDispatch } from "@/store/hook";
import { addToCart } from "@/features/cart/cartSlice";
import { PizzaSize } from "@/features/cart/types";
import { generatePizzaId } from "@/features/utils/generatePizzaId";

const Pizza = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.stopPropagation();
    const item = pizzaList.find((p) => p.id === id);
    console.log("item", item);
    console.log("Add to Cart");
    if (item) {
      const { id, name, size } = item;
      const uniqueGeneratedID = generatePizzaId(id, name, size, []);

      dispatch(
        addToCart({
          ...item,
          size: item?.size as PizzaSize,
          finalPrice: item?.basePrice,
          extras: [],
          uniqueGeneratedID: uniqueGeneratedID,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className={styles.pizza}>
      <div className={styles.row}>
        {pizzaList.map((data) => (
          <div
            className={styles["col-4"]}
            key={data?.id}
            onClick={() => handleClick(data?.id)}
          >
            <div className={styles.price}>
              <div className={styles.price__img}>
                <img
                  src={`/images/pizza${data?.id}.png`}
                  alt={`Pizza ${data?.id}`}
                />
              </div>
              <h1 className={styles.price__heading}>{data?.name}</h1>
              <p className={styles.price__text}>{data?.description}</p>
              <p className={styles.price_rs}>₹ {data?.basePrice}.00</p>
              {pathName === "/menu" && (
                <button
                  className={styles["add-to-cart-btn"]}
                  onClick={(e) => handleAddToCart(e, data.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
