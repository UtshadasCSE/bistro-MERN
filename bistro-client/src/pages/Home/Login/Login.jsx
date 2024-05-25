import Lottie from "lottie-react";
import animationData from "../../../../public/loginAnim.json";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const [disabled, setDidisabled] = useState(true);
  const captchaValue = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  //match captcha
  const handleCaptchaMatch = () => {
    const user_captcha_value = captchaValue.current.value;
    console.log(user_captcha_value);

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
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
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
                    type="text"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
