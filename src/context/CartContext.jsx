import { createContext, useContext, useEffect, useReducer } from "react";
import { useSummary } from "./SummaryContext";

const CartContext = createContext();

const CUSTOM_PACKAGE_PRICE = { normal: 97.99, enlarged: 159.99, raw: 169.99 };

const initialState = {
  main: JSON.parse(localStorage.getItem("main")) || [],
  additions: JSON.parse(localStorage.getItem("additions")) || [],
  isEnlarged: JSON.parse(localStorage.getItem("isEnlarged")) || false,
  mainPrice: JSON.parse(localStorage.getItem("mainPrice")) || 0,
  packageType: JSON.parse(localStorage.getItem("packageType")) || "custom",
};

function reducer(state, action) {
  switch (action.type) {
    case "addedToMain":
      return {
        ...state,
        main: [...state.main, action.payload],
      };

    case "editedMain":
      return { ...state, main: action.payload };

    case "mainPriceSet":
      return { ...state, mainPrice: action.payload };

    case "addedToAdditions":
      return {
        ...state,
        additions: [...state.additions, action.payload],
      };

    case "editedAdditions":
      return { ...state, additions: action.payload };

    case "packageTypeSet":
      return { ...state, packageType: action.payload };

    case "enlargedPackage":
      return { ...state, isEnlarged: true };

    case "unEnlargedPackage":
      return { ...state, isEnlarged: false };

    case "clearedCart":
      return {
        ...state,
        main: [],
        additions: [],
        isEnlarged: false,
        mainPrice: 0,
        packageType: "custom",
      };
    default:
      throw new Error("Unknown Action");
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { main, additions, isEnlarged, mainPrice, packageType } = state;

  const { deliveryType, discount, clearSummary } = useSummary();

  const cartMax = 4 * (isEnlarged ? 2 : 1);

  const isMainFull = cartMax <= getMainAmount();

  const mainReady = cartMax === getMainAmount();

  const deliveryCost = deliveryType === "once" ? 7.99 : 0;

  // -----------------------------------------------------------
  // Saving to local storage
  // -----------------------------------------------------------

  useEffect(() => {
    localStorage.setItem("main", JSON.stringify(main));
  }, [main]);

  useEffect(() => {
    localStorage.setItem("additions", JSON.stringify(additions));
  }, [additions]);

  useEffect(() => {
    localStorage.setItem("isEnlarged", JSON.stringify(isEnlarged));
  }, [isEnlarged]);

  useEffect(() => {
    localStorage.setItem("mainPrice", JSON.stringify(mainPrice));
  }, [mainPrice]);

  useEffect(() => {
    localStorage.setItem("packageType", JSON.stringify(packageType));
  }, [packageType]);

  // -----------------------------------------------------------
  // Main Modifications
  // -----------------------------------------------------------

  function checkInMain(item) {
    if (!item?.id) return false;

    return main.find((product) => product.id === item.id);
  }

  function addMainQuantity(item) {
    const filteredList = main.filter((product) => product.id !== item.id);

    const editedList = [...filteredList, { ...item, number: item.number + 1 }];

    dispatch({ type: "editedMain", payload: editedList });
  }

  function addToMain(item) {
    const i = checkInMain(item);
    if (!i) dispatch({ type: "addedToMain", payload: { ...item, number: 1 } });
    else addMainQuantity(i);
  }

  function removeFromMain(item) {
    const i = checkInMain(item);
    if (!i) return;
    const filteredList = main.filter((product) => product.id !== i.id);

    const editedList =
      i.number > 1
        ? [...filteredList, { ...i, number: i.number - 1 }]
        : filteredList;

    dispatch({ type: "editedMain", payload: editedList });
  }

  // -----------------------------------------------------------
  // Additions Modifications
  // -----------------------------------------------------------

  function checkInAdditions(item) {
    if (!item?.id) return false;
    return additions.find((product) => product.id === item.id);
  }

  function addAdditionsQuantity(item) {
    const filteredList = additions.filter((product) => product.id !== item.id);

    const editedList = [...filteredList, { ...item, number: item.number + 1 }];

    dispatch({ type: "editedAdditions", payload: editedList });
  }

  function addToAdditions(item) {
    const i = checkInAdditions(item);

    if (!i)
      dispatch({ type: "addedToAdditions", payload: { ...item, number: 1 } });
    else addAdditionsQuantity(i);
  }

  function removeFromAdditions(item) {
    const i = checkInAdditions(item);
    if (!i) return;

    const filteredList = additions.filter((product) => product.id !== i.id);

    const editedList =
      i.number > 1
        ? [...filteredList, { ...i, number: i.number - 1 }]
        : filteredList;

    dispatch({ type: "editedAdditions", payload: editedList });
  }

  // -----------------------------------------------------------
  // Creating Packages
  // -----------------------------------------------------------

  function createExistingPackage(productsPackage, enlarged = false, exPackage) {
    if (!productsPackage) return;
    clearSummary();
    clearCart();
    setEnlarged(enlarged);
    setPackageType("existing");
    setMainPrice(
      enlarged ? Number(exPackage.enlarged_price) - 10 : exPackage.price
    );
    productsPackage.forEach((product) =>
      dispatch({
        type: "addedToMain",
        payload: { ...product, number: enlarged ? 2 : 1 },
      })
    );
  }

  function createCustomPackage() {
    clearSummary();
    clearCart();
    setPackageType("custom");
    setMainPrice(CUSTOM_PACKAGE_PRICE.normal);
  }

  // -----------------------------------------------------------
  // Setters
  // -----------------------------------------------------------

  function setMainPrice(price) {
    dispatch({ type: "mainPriceSet", payload: price });
  }

  function setEnlarged(boolean) {
    dispatch({ type: boolean ? "enlargedPackage" : "unEnlargedPackage" });
  }

  function setPackageType(type) {
    dispatch({ type: "packageTypeSet", payload: type });
  }

  // -----------------------------------------------------------
  // Getters
  // -----------------------------------------------------------

  function getMainAmount() {
    const numbers = main.map((product) => product.number);
    const amount = numbers.reduce((acc, cur) => acc + cur, 0);
    return amount;
  }

  function getAdditionPrice() {
    if (!additions.length) return 0;

    const priceList = additions.map(
      (addition) => addition.price * addition.number
    );

    const price = priceList.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    return price;
  }

  function getFullPrice() {
    return (
      (Number(mainPrice) + Number(getAdditionPrice()) + deliveryCost) *
      (discount || 1)
    ).toFixed(2);
  }

  function getSingleAmountMain(product) {
    return checkInMain(product)?.number || 0;
  }

  function getSingleAmountAdditions(product) {
    return checkInAdditions(product)?.number || 0;
  }

  // -----------------------------------------------------------
  // Others
  // -----------------------------------------------------------

  function clearCart() {
    dispatch({ type: "clearedCart" });
  }

  function filterByType(list, type) {
    return list.filter((product) => product.type === type);
  }

  return (
    <CartContext.Provider
      value={{
        main,
        additions,
        isEnlarged,
        mainPrice,
        packageType,
        cartMax,
        isMainFull,
        mainReady,
        deliveryCost,
        CUSTOM_PACKAGE_PRICE,
        checkInMain,
        addToMain,
        removeFromMain,
        addToAdditions,
        removeFromAdditions,
        createExistingPackage,
        createCustomPackage,
        setEnlarged,
        setMainPrice,
        setPackageType,
        getAdditionPrice,
        getFullPrice,
        getMainAmount,
        getSingleAmountMain,
        getSingleAmountAdditions,
        clearCart,
        filterByType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const value = useContext(CartContext);

  if (value === undefined)
    throw new Error("Cart context was used outside of a provider");

  return value;
}

export { CartProvider, useCart };
