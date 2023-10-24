import { useState } from "react";
import { useSummary } from "../../../../context/SummaryContext";
import Checkbox from "../../../global/CheckBox";
import styles from "./checkPricing.module.scss";

function CheckPricing() {
  const { register, getValues, errors, setValue } = useSummary();

  const [checkedList, setChecked] = useState({
    req: false,
    info: false,
  });

  return (
    <ul className={styles.list}>
      <li>
        <Checkbox
          label="I accept all the terms"
          handleClick={() => {
            setChecked(
              checkedList.req && checkedList.info
                ? { req: false, info: false }
                : { req: true, info: true }
            );
            setValue("req", checkedList.req && checkedList.info ? false : true);
            setValue(
              "info",
              checkedList.req && checkedList.info ? false : true
            );
          }}
          checked={checkedList.req && checkedList.info}
        >
          <input type="checkbox" tabIndex={-1} {...register("all")} />
        </Checkbox>
      </li>
      <li>
        <Checkbox
          label="I accept the website regulations and privacy policy"
          error={errors?.req?.message}
          checked={checkedList.req}
          handleClick={() => {
            setChecked({
              all: checkedList.all,
              req: !checkedList.req,
              info: checkedList.info,
            });
            setValue("req", !getValues().req);
          }}
        >
          <input
            type="checkbox"
            tabIndex={-1}
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
          checked={checkedList.info}
          handleClick={() => {
            setChecked({
              all: checkedList.all,
              req: checkedList.req,
              info: !checkedList.info,
            });
            setValue("info", !getValues().info);
          }}
        >
          <input type="checkbox" tabIndex={-1} {...register("info")} />
        </Checkbox>
      </li>
    </ul>
  );
}

export default CheckPricing;
