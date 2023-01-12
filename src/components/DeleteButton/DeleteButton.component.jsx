import "./DeleteButton.styles.scss";

import { ReactComponent as DeleteIcon } from "../../assets/backspaceIcon.svg";

const DeleteButton = () => {
  return (
    <div className="delete-button__container">
      <DeleteIcon className="delete-button__icon" />
    </div>
  );
};

export default DeleteButton;
