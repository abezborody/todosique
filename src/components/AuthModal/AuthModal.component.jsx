import { useState } from "react";
import Button from "../Button/Button.compnent";

const INIT_FORM_VALUES = {
  name: "",
  email: "",
  password: "",
};

const LoginModal = () => {
  const [formValues, setFormValues] = useState(INIT_FORM_VALUES);

  return (
    <div>
      <form>
        <label>Log in with email or use Google authentication</label>
        <input type="text" placeholder="Your name" required></input>
        <input type="email" placeholder="name@mail.com" required></input>
        <input type="password" placeholder="Your password" required></input>
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default LoginModal;
