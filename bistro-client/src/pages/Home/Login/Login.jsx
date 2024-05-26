import Lottie from "lottie-react";
import animationData from "../../../../public/loginAnim.json";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [disabled, setDidisabled] = useState(true);
  const captchaValue = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // get input from Form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  //match captcha
  const handleCaptchaMatch = () => {
    const user_captcha_value = captchaValue.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setDidisabled(false);
    } else {
      setDidisabled(true);
    }
  };
  return (
    <div>
      <div className="bg-loginBg bg-cover bg-no-repeat bg-center">
        <div className="hero min-h-screen bg-loginBg bg-cover bg-no-repeat bg-center w-full">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left lg:w-2/4">
              <Lottie animationData={animationData} />
            </div>
            <div className="card shrin k-0 w-full max-w-sm shadow-2xl  ">
              <form onSubmit={handleFormSubmit} className="card-body">
                <h2 className="text-center text-2xl font-black font-inter">
                  Login
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    ref={captchaValue}
                    type="text"
                    placeholder="Enter the above captcha"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleCaptchaMatch}
                    className="btn btn-outline btn-warning btn-xs my-3"
                  >
                    Validate
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn  bg-loginBtn text-white "
                  >
                    Login
                  </button>
                </div>
                <div className="py-3 text-[#D1A054] font-inter">
                  <p>
                    Dont have an account?{" "}
                    <Link
                      to={"/register"}
                      className="font-bold hover:underline cursor-pointer"
                    >
                      Register Now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
