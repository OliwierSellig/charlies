import { useSummary } from "../../../../context/SummaryContext";
import { countryList } from "../../../../services/globalVars";
import FormRow from "./FormRow";
import styles from "./locationForm.module.scss";

function LocationForm() {
  const { register, errors } = useSummary();

  return (
    <>
      <h4 className={styles.heading}>Please, input your delivery data:</h4>
      <form className={styles.form}>
        <div className={styles.column}>
          <FormRow id="name" error={errors?.name?.message} label="Full Name">
            <input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Write your name"
              {...register("name", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow id="email" error={errors?.email?.message} label="Email">
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Write your email"
              {...register("email", {
                required: "This field is required",
                validate: (value) =>
                  value.includes("@") || "Wrong email template",
              })}
            />
          </FormRow>
          <FormRow
            id="street"
            error={errors?.street?.message}
            label="Street Address"
          >
            <input
              className={styles.input}
              type="text"
              id="street"
              placeholder="Write your address"
              {...register("street", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow
            id="additional"
            error={errors?.additional?.message}
            label="Additional Address"
          >
            <input
              className={styles.input}
              type="text"
              id="additional"
              placeholder="(Optional)"
              {...register("additional")}
            />
          </FormRow>
        </div>
        <div className={styles.column}>
          <FormRow id="country" label="Country">
            <select
              className={styles.select}
              id="country"
              {...register("country")}
            >
              {countryList.map((country, i) => (
                <option className={styles.option} key={i}>
                  {country}
                </option>
              ))}
            </select>
          </FormRow>
          <FormRow
            id="region"
            error={errors?.region?.message}
            label="Province/Region"
          >
            <input
              className={styles.input}
              type="text"
              id="region"
              placeholder="Write your region"
              {...register("region", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow id="city" error={errors?.city?.message} label="City">
            <input
              className={styles.input}
              type="text"
              id="city"
              placeholder="Write your city"
              {...register("city", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow
            id="code"
            error={errors?.code?.message}
            label="Zip/Postal Code"
          >
            <input
              className={styles.input}
              type="text"
              id="code"
              placeholder="Write your code"
              {...register("code", { required: "This field is required" })}
            />
          </FormRow>
        </div>
      </form>
    </>
  );
}

export default LocationForm;
