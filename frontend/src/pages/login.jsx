import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Backendurl } from "../backend.url";
import { StoreTokenToLocalStorage } from "../functions/storetoLS";

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const navigateTo = useNavigate();

  async function checkExist() {
    try {
      axios.post(`${Backendurl}/login`, data).then((res) => {
        if (res.data.token) {
          StoreTokenToLocalStorage(res.data.token);
          alert("Login successfull");
          navigateTo("/");
        } else {
          alert("Wrong Credentials");
        }
      }).catch((err)=>{
        alert("Wrong Credentials");
      })
    } catch (err) {
      alert("Something went wrong");

      return false;
    }
  }

  function Submitform() {
    if (data.email && data.password) {
      checkExist();
    } else {
      alert("please fill all the fields");
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
          <h2>Please Login </h2>
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
            <button onClick={Submitform}>Login</button>
          </div>

          <div className={styles.already}>
            <p>
              Don't have an Account? <Link to="/signup">signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
