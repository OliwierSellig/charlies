import { useRef } from "react";
import NutritionalTable from "./NutritionalTable";
import styles from "./productDetails.module.scss";

function ProductDetails({ setView }) {
  const backgroundRef = useRef();

  return (
    <div
      ref={backgroundRef}
      className={styles.background}
      onClick={(e) => {
        if (e.target === backgroundRef.current) setView(false);
      }}
    >
      <div className={styles.container}>
        <button
          className={styles.close}
          aria-label="Close this window"
          onClick={() => setView(false)}
        />
        <div className={styles.box}>
          <img
            className={styles.img}
            src="/img/packages/test-item.jpg"
            alt="Chocolate"
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>Dark Chocolate </h3>
          <p className={styles.quantity}>Portion size: 2 x 120g</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod
            quas, placeat minus pariatur quam nisi id, unde, nulla consectetur
            architecto voluptate! Sunt expedita in, repellendus tempore ab
            delectus quis?
          </p>
          <h4 className={styles.subheading}>Ingredients:</h4>
          <p className={styles.ingredients}>
            {
              "miazga kakaowa, cukier, bezwodny tłuszcz mleczny, tłuszcz kakaowy, syrop glukozowy, cukier inwertowany, substancja utrzymująca wilgoć (sorbitol), emulgator (lecytyna sojowa), wanilia."
            }
          </p>
          <NutritionalTable />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
