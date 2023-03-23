import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Backendurl } from "../backend.url";

function Signup() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const navigateTo = useNavigate();
  const [exist, setexist] = useState(false);

  function Submitform() {
    if (data.email && data.password) {
      submitTheuser();
    } else {
      alert("please fill all the fields");
    }
  }

  async function submitTheuser() {
    try {
      axios
        .post(`${Backendurl}/login/new`, data)
        .then((res) => {
          console.log(res);
          alert("signup successfull");
          navigateTo("/");
        })
        .catch((err) => {
          alert("user already exist Please login");
        });
    } catch (err) {
      alert("Something went wrong");
    }
  }

  function InputEvent(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <p className={styles.greet}>Welcome !</p>
          <h2>Please Sign up </h2>
        </div>

        <div>
          <div>
            <p>Email</p>
            <input
              name="email"
              onInput={InputEvent}
              type="email"
              value={data.email}
              placeholder="Enter Your Email"
            />
          </div>

          <div>
            <p>Password</p>
            <input
              name="password"
              onInput={InputEvent}
              value={data.password}
              placeholder="Enter Your Password"
              type="password"
            />
          </div>

          <div>
            <button onClick={Submitform}>Register</button>
          </div>

          <div className={styles.already}>
            <p>
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
