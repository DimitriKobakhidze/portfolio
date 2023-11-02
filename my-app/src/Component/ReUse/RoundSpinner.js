import classes from "./RoundSpinner.module.css";

export const RoundSpinner = () => {
  return (
    <div className={classes["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RoundSpinner;
