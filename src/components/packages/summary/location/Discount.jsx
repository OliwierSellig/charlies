import { useForm } from "react-hook-form";
import { useSummary } from "../../../../context/SummaryContext";
import Button from "../../../global/Button";
import styles from "./discount.module.scss";

function Discount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const {
    discount,
    checkDiscount,
    setDiscount,
    clearDiscount,
    discountToPercentage,
  } = useSummary();

  function onSubmit(data) {
    setDiscount(data.discount);
  }

  return (
    <form className={styles.container}>
      <label className={styles.header} htmlFor="discount">
        <h3 className={styles.heading}>Got a discount?</h3>
        <img
          className={styles.icon}
          src="/svg/discount-white.svg"
          alt="Discount"
        />
      </label>
      <div className={styles.box}>
        <input
          id="discount"
          disabled={discount}
          className={`${styles.input} ${discount ? styles.activated : ""}`}
          type="text"
          placeholder="Write your discount code"
          {...register("discount", {
            validate: (value) =>
              checkDiscount(value) || "Your discount code is incorrect",
          })}
        />
        {!discount && (
          <Button
            colorOnFocus="yellow"
            size="sm"
            handleClick={handleSubmit(onSubmit)}
          >
            Activate
          </Button>
        )}
        {Boolean(discount) && (
          <Button
            colorOnFocus="yellow"
            size="sm"
            handleClick={() => {
              resetField("discount");
              clearDiscount();
            }}
          >
            Clear Discount
          </Button>
        )}
        {Boolean(discount) && (
          <p className={styles.succes}>
            Congratulations, your discount is {discountToPercentage(discount)}
          </p>
        )}

        {errors?.discount?.message && (
          <p className={styles.error}>{errors?.discount?.message}</p>
        )}
      </div>
    </form>
  );
}

export default Discount;
