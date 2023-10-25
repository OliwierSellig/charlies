import { useState } from "react";
import Button from "../global/Button";
import styles from "./deleteOrder.module.scss";

function DeleteOrder({ setIsDeletingOrder }) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Do you really want to delete this package?
      </h3>
      <label className={styles.subheading}>
        Type 'DELETE' to confirm the deletion.
      </label>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.box}>
        <Button
          colorOnFocus="white"
          handleClick={() => setIsDeletingOrder(false)}
        >
          Go Back
        </Button>
        <Button disabled={query !== "DELETE"} colorOnFocus="red">
          Delete Package
        </Button>
      </div>
    </div>
  );
}

export default DeleteOrder;
