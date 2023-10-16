import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  main: [],
  additions: [],
  isEnlarged: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "addedToMain":
      return {
        ...state,
        main: [...state.main, { ...action.payload, number: 1 }],
      };

    case "editedMain":
      return { ...state, main: action.payload };

    case "enlargedPackage":
      return { ...state, isEnlarged: true };

    case "unEnlargedPackage":
      return { ...state, isEnlarged: false };

    case "clearedCart":
      return { ...initialState };
    default:
      throw new Error("Unknown Action");
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { main, isEnlarged } = state;

  console.log(main);

  function checkInMain(item) {
    if (!item?.id) return false;

    return main.map((product) => product.id).includes(item.id);
  }

  function addMainQuantity(item) {
    const filteredItem = main.find((product) => product.id === item.id);

    const filteredList = main.filter((product) => product.id !== item.id);

    const editedList = [
      ...filteredList,
      { ...filteredItem, number: filteredItem.number + 1 },
    ];

    dispatch({ type: "editedMain", payload: editedList });
  }

  function addToMain(item) {
    if (!checkInMain(item)) dispatch({ type: "addedToMain", payload: item });
    else addMainQuantity(item);
  }

  function addPackage(productsPackage) {
    clearCart();
    productsPackage.forEach((product) =>
      dispatch({ type: "addedToMain", payload: product })
    );
  }

  function clearCart() {
    dispatch({ type: "clearedCart" });
  }

  function setEnlarged(boolean) {
    dispatch({ type: boolean ? "enlargedPackage" : "unEnlargedPackage" });
  }

  return (
    <CartContext.Provider
      value={{ addToMain, setEnlarged, main, clearCart, addPackage }}
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
