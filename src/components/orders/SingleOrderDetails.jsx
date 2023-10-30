import { useState } from "react";
import { useOrders } from "../../context/OrdersContext";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import OrderList from "../global/OrderList";
import DaySelector from "../global/DaySelector";
import SingleOrderActions from "./SingleOrderActions";
import SingleOrderHeader from "./SingleOrderHeader";
import DeleteOrder from "./DeleteOrder";
import SingleOrderDateChange from "./SingleOrderDateChange";
import styles from "./singleOrderDetails.module.scss";

function SingleOrderDetails({ onCloseModal, order }) {
  const { getProductNumber, changeDeliveryDate, deadlineBorder } = useOrders();

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
        order={order}
      />
      {isDeletingOrder && (
        <DeleteOrder
          setIsDeletingOrder={setIsDeletingOrder}
          order={order}
          onCloseModal={onCloseModal}
        />
      )}
      {isChangingOrder && (
        <SingleOrderDateChange>
          <DaySelector
            closeSelector={() => setIsChangingOrder(false)}
            handleClick={(date) => {
              changeDeliveryDate(date, order);
              onCloseModal();
              toast.success(
                `Changed the date for Package #${order?.id || "0000"}`
              );
            }}
            currentDate={dayjs(order.date)}
            fastestDate={deadlineBorder}
          />
        </SingleOrderDateChange>
      )}
    </div>
  );
}

export default SingleOrderDetails;
