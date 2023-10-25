import SingleOrderActions from "./SingleOrderActions";
import styles from "./singleOrderDetails.module.scss";
import OrderList from "../global/OrderList";
import SingleOrderHeader from "./SingleOrderHeader";
import { useState } from "react";
import DeleteOrder from "./DeleteOrder";
import dayjs from "dayjs";
import DaySelector from "../global/DaySelector";
import { useSummary } from "../../context/SummaryContext";
import SingleOrderDateChange from "./SingleOrderDateChange";

const productsList = [
  {
    name: "Dark Chocolate",
    image: "/img/test.webp",
    quantity: 2,
    type: "classic",
  },
  {
    name: "Dark Chocolate",
    image: "/img/test.webp",
    quantity: 2,
    type: "classic",
  },
  {
    name: "Dark Chocolate",
    image: "/img/test.webp",
    quantity: 2,
    type: "classic",
  },
  {
    name: "Dark Chocolate",
    image: "/img/test.webp",
    quantity: 2,
    type: "classic",
  },
];

function SingleOrderDetails() {
  const { fastestDate } = useSummary();

  const [isDeletingOrder, setIsDeletingOrder] = useState(false);
  const [isChangingOrder, setIsChangingOrder] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(dayjs());

  console.log(deliveryDate);

  return (
    <div className={styles.container}>
      <button className={styles.close} aria-label="Close this window" />
      <SingleOrderHeader />
      <div className={styles.box}>
        <OrderList title="Main" amount={79.99} list={productsList} />
        <OrderList title="Additional" amount={24.99} list={productsList} />
      </div>
      <SingleOrderActions
        setIsDeletingOrder={setIsDeletingOrder}
        setIsChangingOrder={setIsChangingOrder}
      />
      {isDeletingOrder && (
        <DeleteOrder setIsDeletingOrder={setIsDeletingOrder} />
      )}
      {isChangingOrder && (
        <SingleOrderDateChange>
          <DaySelector
            closeSelector={() => setIsChangingOrder(false)}
            handleClick={setDeliveryDate}
            currentDate={deliveryDate}
            fastestDate={fastestDate}
          />
        </SingleOrderDateChange>
      )}
    </div>
  );
}

export default SingleOrderDetails;
