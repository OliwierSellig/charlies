import Checkbox from "../../../global/CheckBox";
import styles from "./checkPricing.module.scss";

function CheckPricing() {
  return (
    <ul className={styles.list}>
      <li>
        <Checkbox>I accept all the terms</Checkbox>
      </li>
      <li>
        <Checkbox>I accept the website regulations and privacy policy</Checkbox>
      </li>
      <li>
        <Checkbox>
          I want to receive information about offers, new products, and
          promotions. (phone call, text message, e-mail) I consent to receiving
          marketing information.
        </Checkbox>
      </li>
    </ul>
  );
}

export default CheckPricing;
