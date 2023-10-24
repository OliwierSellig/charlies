import dayjs from "dayjs";
import { createContext, useContext, useReducer } from "react";
import { useDiscounts } from "../hooks/useDiscounts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SummaryContext = createContext();

const fastestDate = dayjs().add(2, "day");

const initialState = {
  currentlyOpen: 1,
  deliveryDate: fastestDate,
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ defaultValues: { all: false, req: false, info: false } });

  const { discounts } = useDiscounts();

  const [state, dispatch] = useReducer(reducer, initialState);

  const { deliveryDate, currentlyOpen, deliveryType, discount, pricingMethod } =
    state;

  const awaitTime = deliveryDate.diff(dayjs(), "day") + 1;

  // -----------------------------------------------------------
  // Accordion manipulation
  // -----------------------------------------------------------

  function checkIfOpen(number) {
    return number === Number(currentlyOpen);
  }

  function openItem(number) {
    dispatch({
      type: "changedOpen",
      payload: checkIfOpen(number) ? null : number,
    });
  }

  // -----------------------------------------------------------
  // Delivery date manipulations
  // -----------------------------------------------------------

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

  function checkIfAbleDate(activeDate, day) {
    if (activeDate.month() !== day.$M) return false;
    if (!day.$W) return false;
    if (activeDate.month() === dayjs().month() && day.$D < fastestDate.date())
      return false;

    return true;
  }

  function updateDeliveryDate(date) {
    dispatch({ type: "updatedDeliveryDate", payload: date });
  }

  // -----------------------------------------------------------
  // Delivery type manipulations
  // -----------------------------------------------------------

  function setDeliveryType(type) {
    if (!type) return;
    dispatch({ type: "deliveryTypeSet", payload: type });
  }

  // -----------------------------------------------------------
  // Discount logic
  // -----------------------------------------------------------

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

  function discountToPercentage() {
    return `${Math.ceil((1 - discount) * 100)}%`;
  }

  // -----------------------------------------------------------
  // Pricing Method Manipulation
  // -----------------------------------------------------------

  function setPricingMethod(method) {
    dispatch({ type: "pricingMethodSet", payload: method || null });
  }

  // -----------------------------------------------------------
  // On order submition
  // -----------------------------------------------------------

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

  // -----------------------------------------------------------
  // Others
  // -----------------------------------------------------------

  function clearSummary() {
    dispatch({ type: "summaryCleared" });
  }

  return (
    <SummaryContext.Provider
      value={{
        fastestDate,
        deliveryDate,
        deliveryType,
        discount,
        pricingMethod,
        awaitTime,
        register,
        handleSubmit,
        errors,
        getValues,
        setValue,
        checkIfOpen,
        openItem,
        generateMonthDays,
        checkIfAbleDate,
        updateDeliveryDate,
        setDeliveryType,
        checkDiscount,
        setDiscount,
        clearDiscount,
        discountToPercentage,
        setPricingMethod,
        submitOrder,
        orderError,
        clearSummary,
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
