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
import { useOrders } from "../../context/OrdersContext";

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

function SingleOrderDetails({ onCloseModal, order }) {
  const { fastestDate } = useSummary();
  const { getProductNumber } = useOrders();

  const [isDeletingOrder, setIsDeletingOrder] = useState(false);
  const [isChangingOrder, setIsChangingOrder] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.close}
        onClick={onCloseModal}
        aria-label="Close this window"
      />
      <SingleOrderHeader order={order} />
      <div className={styles.box}>
        <OrderList
          title="Main"
          amount={order.prices.mainPrice}
          list={order.cart.main}
          singleAmount={getProductNumber}
        />
        <OrderList
          title="Additional"
          amount={order.prices.additionsPrice}
          list={order.cart.additions}
          singleAmount={getProductNumber}
        />
      </div>
      <SingleOrderActions
        setIsDeletingOrder={setIsDeletingOrder}
        setIsChangingOrder={setIsChangingOrder}
        singleAmount={getProductNumber}
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
