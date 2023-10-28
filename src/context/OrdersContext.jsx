import dayjs from "dayjs";
import { createContext, useContext, useEffect, useReducer } from "react";

const OrdersContext = createContext();

const initialState = {
  orderList: JSON.parse(localStorage.getItem("orderList")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addedNewOrder":
      return { ...state, orderList: [...state.orderList, action.payload] };
    case "editedOrders":
      return { ...state, orderList: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function OrdersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { orderList } = state;

  const deadlineBorder = dayjs().add(3, "day");

  // localStorage.removeItem('orderList');

  useEffect(() => {
    localStorage.setItem("orderList", JSON.stringify(orderList));
  }, [orderList]);

  function getRandomCover(list) {
    if (!list) return;
    const randomNumber = Math.floor(Math.random() * list.length);
    return list.map((item) => item?.image)?.at(randomNumber);
  }

  function addNewOrder(cart, prices, deliveryDate, deliveryType) {
    let id;

    while (!id) {
      const randomNumber = Math.ceil(Math.random() * 10000);
      if (!orderList.map((order) => order.id).includes(randomNumber))
        id = randomNumber;
    }

    const cover = getRandomCover(cart.main);

    const newOrder = {
      cart,
      prices,
      date: deliveryDate,
      deliveryType,
      cover,
      id,
    };
    dispatch({ type: "addedNewOrder", payload: newOrder });
  }

  function getProductNumber(product) {
    return product?.number || 0;
  }

  function findOrder(order) {
    return orderList.find((o) => o.id === order.id);
  }

  function filterOrders(order) {
    return orderList.filter((o) => o.id !== order.id);
  }

  function deleteOrder(order) {
    const filteredList = filterOrders(order);

    dispatch({ type: "editedOrders", payload: filteredList });
  }

  function changeDeliveryDate(date, order) {
    const selectedOrder = findOrder(order);

    const filteredList = filterOrders(order);

    const editedOrdersList = [
      ...filteredList,
      { ...selectedOrder, date: dayjs(date) },
    ];

    dispatch({ type: "editedOrders", payload: editedOrdersList });
  }

  function sortByDate(list) {
    const orderedList = list.sort(
      (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()
    );

    return orderedList;
  }

  function checkDeadline(order) {
    const selectedOrder = findOrder(order);
    return (
      dayjs(selectedOrder.date).diff(
        deadlineBorder.subtract(1, "day"),
        "day"
      ) <= 0
    );
  }

  return (
    <OrdersContext.Provider
      value={{
        addNewOrder,
        orderList,
        getProductNumber,
        deleteOrder,
        changeDeliveryDate,
        sortByDate,
        deadlineBorder,
        checkDeadline,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

function useOrders() {
  const value = useContext(OrdersContext);

  if (value === undefined)
    throw new Error("Orders context was used outside of a provider");

  return value;
}

export { OrdersProvider, useOrders };
