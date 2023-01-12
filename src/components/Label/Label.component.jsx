import "./Label.styles.scss";

const Label = (type) => {
  return (
    <div className={`label__container--${type}`}>
      <div className={`label__badge--${type}`}></div>
      {/* <span className="label__title">{type}</span> */}
    </div>
  );
};

export default Label;
