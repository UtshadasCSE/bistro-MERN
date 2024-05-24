import Lottie from "lottie-react";
import animationData from "../../../../public/loginAnim.json";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
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
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-loginBtn text-white">Login</button>
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
