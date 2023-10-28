import { useState } from "react";
import Button from "../global/Button";
import styles from "./deleteOrder.module.scss";

import { useOrders } from "../../context/OrdersContext";
import toast from "react-hot-toast";

function DeleteOrder({ setIsDeletingOrder, order }) {
  const { deleteOrder } = useOrders();

  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Do you really want to delete this package?
      </h3>
      <p className={styles.subheading}>
        We will refind your fee immediately on the account you provided.
      </p>
      <label className={styles.label}>
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
          Go Back{" "}
        </Button>
        <Button
          disabled={query !== "DELETE"}
          colorOnFocus="red"
          onClick={() => {
            deleteOrder(order);
            toast.success("Order Deleted Succesfully");
          }}
        >
          Delete Package
        </Button>
      </div>
    </div>
  );
}

export default DeleteOrder;
