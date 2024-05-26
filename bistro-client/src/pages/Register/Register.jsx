import Lottie from "lottie-react";
import animationData from "../../../public/registerAnim.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen   bg-loginBg bg-cover bg-center bg-no-repeat">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie animationData={animationData} />
            </div>
            <div className="card shrink-0 lg:w-3/5 shadow-2xl ">
              <h2 className="text-center text-2xl font-black font-inter py-3">
                Register Now!
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
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
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 18,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <p>Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p>Password should be at least more then 8 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p>Password is to big please under 18</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p>
                      Password must have one uppercase and one lowercase also
                      number , special character
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-loginBtn text-white">
                    Register
                  </button>
                </div>
                <div className="py-3 text-[#D1A054] font-inter">
                  <p>
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-bold hover:underline cursor-pointer"
                    >
                      Login Now
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

export default Register;
