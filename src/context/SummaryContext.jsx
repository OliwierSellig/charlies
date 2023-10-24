import dayjs from "dayjs";

import { createContext, useContext, useReducer } from "react";
import { useDiscounts } from "../hooks/useDiscounts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SummaryContext = createContext();

const fastestDate = dayjs().add(2, "day");

const initialState = {
  deliveryDate: fastestDate,
  currentlyOpen: 1,
  deliveryType: "recurring",
  discount: 0,
  pricingMethod: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "changedOpen":
      return { ...state, currentlyOpen: action.payload };

    case "updatedDeliveryDate":
      return { ...state, deliveryDate: action.payload };

    case "deliveryTypeSet":
      return { ...state, deliveryType: action.payload };

    case "discountSet":
      return { ...state, discount: action.payload };

    case "pricingMethodSet":
      return { ...state, pricingMethod: action.payload };

    case "summaryCleared":
      return { ...initialState };

    default:
      throw new Error("Unknown Action");
  }
}

function SummaryProvider({ children }) {
  const navigate = useNavigate();

  const { discounts } = useDiscounts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ defaultValues: { all: false, req: false, info: false } });

  const [state, dispatch] = useReducer(reducer, initialState);

  const { deliveryDate, currentlyOpen, deliveryType, discount, pricingMethod } =
    state;

  const awaitTime = deliveryDate.diff(dayjs(), "day") + 1;

  function checkIfOpen(number) {
    return number === Number(currentlyOpen);
  }

  function openItem(number) {
    dispatch({
      type: "changedOpen",
      payload: checkIfOpen(number) ? null : number,
    });
  }

  function generateMonthDays(month = dayjs().month(), year = dayjs().year()) {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
    const dayNumber = 42;

    const prefixArray = Array.from(
      { length: firstDateOfMonth.day() },
      (date, i) => firstDateOfMonth.day(i)
    );

    const dayArray = Array.from({ length: lastDateOfMonth.date() }, (date, i) =>
      firstDateOfMonth.date(i + 1)
    );

    const suffixArray = Array.from(
      {
        length: dayNumber - (prefixArray.length + dayArray.length),
      },
      (_, i) => lastDateOfMonth.date(lastDateOfMonth.date() + i + 1)
    );

    return prefixArray.concat(dayArray, suffixArray);
  }

  function updateDeliveryDate(date) {
    dispatch({ type: "updatedDeliveryDate", payload: date });
  }

  function setDeliveryType(type) {
    if (!type) return;
    dispatch({ type: "deliveryTypeSet", payload: type });
  }

  function checkDiscount(query) {
    return discounts?.find((discount) => discount.code === query) || null;
  }

  function setDiscount(query) {
    dispatch({
      type: "discountSet",
      payload: checkDiscount(query)?.modifier || 0,
    });
  }

  function clearDiscount() {
    dispatch({ type: "discountSet", payload: 0 });
  }

  function clearSummary() {
    dispatch({ type: "summaryCleared" });
  }

  function discountToPercentage() {
    return `${Math.ceil((1 - discount) * 100)}%`;
  }

  function setPricingMethod(method) {
    dispatch({ type: "pricingMethodSet", payload: method || null });
  }

  function submitOrder(data) {
    console.log(data);
    navigate("/packages/create-package/additions/summary/succes");
  }

  function orderError(errors) {
    if (checkIfOpen(2)) {
      if (Object.keys(errors).length === 1 && errors?.req) openItem(3);
    }

    if (checkIfOpen(3)) {
      if (!errors?.req) openItem(2);
    }

    if (!checkIfOpen(2) && !checkIfOpen(3)) {
      openItem(Object.keys(errors).length === 1 && errors?.req ? 3 : 2);
    }
  }

  return (
    <SummaryContext.Provider
      value={{
        checkIfOpen,
        openItem,
        fastestDate,
        deliveryDate,
        deliveryType,
        awaitTime,
        generateMonthDays,
        updateDeliveryDate,
        setDeliveryType,
        clearSummary,
        discount,
        checkDiscount,
        setDiscount,
        clearDiscount,
        discountToPercentage,
        register,
        handleSubmit,
        errors,
        pricingMethod,
        setPricingMethod,
        getValues,
        setValue,
        submitOrder,
        orderError,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
}

function useSummary() {
  const value = useContext(SummaryContext);

  if (value === undefined)
    throw new Error("Summary context was used outside of a provider");

  return value;
}

export { SummaryProvider, useSummary };
