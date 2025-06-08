import { useState } from "react";
import Link from "next/link";
import { FaAlignRight, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
import { useAppSelector } from "@/store/hook";
import styles from "./Navbar.module.css";
import { selectTotalQuantity } from "@/features/cart/cartSlice";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const cartItemCount = useAppSelector((state: any) => state.cart.items);
  const allItems = cartItemCount.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );

  const show = () => {
    setToggle((prev) => !prev);
  };

  const redirectHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.navbar__text}>
          <div className={styles.logo} onClick={redirectHome}>
            <span className={styles.sp}>pizza</span>
            <span className={styles.spa}>mania.com</span>
          </div>

          <ul className={styles.navbar__ul}>
            <li className={styles.li}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.li}>
              <Link href="/menu">Menu</Link>
            </li>
            <li className={styles.li}>
              <Link href="/order">Orders</Link>
            </li>
            <li className={styles.li}>
              <Link href="/about">About</Link>
            </li>
            <li className={`${styles.li} ${styles["cart-icon-wrapper"]}`}>
              <Link href="/cart">
                <FaShoppingCart />
                {allItems > 0 && (
                  <span className={styles["cart-badge"]}>{allItems}</span>
                )}
              </Link>
            </li>
          </ul>

          <div className={styles.fa} onClick={show}>
            <FaAlignRight />
          </div>
        </div>
      </nav>

      {toggle && (
        <div className={styles.mobile}>
          <Link href="/" onClick={show}>
            <h3 className={styles.lin}>Home</h3>
          </Link>
          <Link href="/menu" onClick={show}>
            <h3 className={styles.lin}>Menu</h3>
          </Link>
          <Link href="/shop" onClick={show}>
            <h3 className={styles.lin}>Shop</h3>
          </Link>
          <Link href="/contact" onClick={show}>
            <h3 className={styles.lin}>Contact</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
