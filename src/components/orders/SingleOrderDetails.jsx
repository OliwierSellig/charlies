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
import toast from "react-hot-toast";

function SingleOrderDetails({ onCloseModal, order }) {
  const { fastestDate } = useSummary();
  const { getProductNumber, changeDeliveryDate } = useOrders();

  const [isDeletingOrder, setIsDeletingOrder] = useState(false);
  const [isChangingOrder, setIsChangingOrder] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.close}
        onClick={onCloseModal}
        aria-label="Close this window"
      />
      {!order.id && <p>Order Deleted</p>}
      {Boolean(order.id) && (
        <>
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
        </>
      )}
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
            fastestDate={fastestDate}
          />
        </SingleOrderDateChange>
      )}
    </div>
  );
}

export default SingleOrderDetails;
