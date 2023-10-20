import styles from "./locationForm.module.scss";

const countryList = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "France",
  "Spain",
];

function LocationForm() {
  return (
    <>
      <h4 className={styles.heading}>Please, input your delivery data:</h4>
      <form className={styles.form}>
        <div className={styles.column}>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Write your name"
            />
          </div>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Write your email"
            />
          </div>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="street">
              Street Address
            </label>
            <input
              className={styles.input}
              type="text"
              id="street"
              placeholder="Write your address"
            />
          </div>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="additional">
              Additional Address
            </label>
            <input
              className={styles.input}
              type="text"
              id="additional"
              placeholder="(Optional)"
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <select className={styles.select} id="country">
              {countryList.map((country, i) => (
                <option className={styles.option} key={i}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="region">
              Province/Region
            </label>
            <input
              className={styles.input}
              type="text"
              id="region"
              placeholder="Write your region"
            />
          </div>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              className={styles.input}
              type="text"
              id="city"
              placeholder="Write your city"
            />
          </div>
          <div className={styles.box}>
            <label className={styles.label} htmlFor="code">
              Zip/Postal Code
            </label>
            <input
              className={styles.input}
              type="text"
              id="code"
              placeholder="Write your code"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default LocationForm;
