import { useState } from "react";
import { useSummary } from "../../../../context/SummaryContext";
import Checkbox from "../../../global/CheckBox";
import styles from "./checkPricing.module.scss";

function CheckPricing() {
  const { register, getValues, errors, setValue } = useSummary();

  const [checkedAll, setCheckedAll] = useState(false);

  return (
    <ul className={styles.list}>
      <li>
        <Checkbox
          label="I accept all the terms"
          handleClick={() => {
            setCheckedAll((checked) => !checked);
            setValue("req", !getValues().req);
            setValue("info", !getValues().info);
          }}
          checked={checkedAll}
        >
          <input type="checkbox" {...register("all")} />
        </Checkbox>
      </li>
      <li>
        <Checkbox
          label="I accept the website regulations and privacy policy"
          error={errors?.req?.message}
          checked={checkedAll}
        >
          <input
            type="checkbox"
            {...register("req", {
              validate: (value) => value || "You have to accept this terms",
            })}
          />
        </Checkbox>
      </li>
      <li>
        <Checkbox
          label="I want to receive information about offers, new products, and
          promotions. (phone call, text message, e-mail) I consent to receiving
          marketing information."
          checked={checkedAll}
        >
          <input type="checkbox" {...register("info")} />
        </Checkbox>
      </li>
    </ul>
  );
}

export default CheckPricing;
