import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  useTitle('login')

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // signIn With Email and Password
    signIn(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log("loginUser", signInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // googleLogin

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const googleUser = result.user;
        console.log("google Login", googleUser);
      })
      .catch((error) => {
        console.log(error.message);
      });

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full  ">
        <div className="text-center mb-10 ">
          <h1 className="text-5xl   font-bold">Login Please!</h1>
        </div>
        <div className="card shadow-2xl flex-shrink-0  w-full   max-w-xl bg-base-100 ">
          <div className="card-body  ">
            <form onSubmit={handleLogin}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-white  mt-6"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="mt-1 text-center ">
                <span className=" text-red-600 font-medium">{error}</span>
              </p>
            </form>
            <small className="text-center  mt-6">
              do not have an account ? please
              <button className=" text-red-900 font-bold">
                <Link to="/signUp">Register</Link>
              </button>
            </small>

            <button
              onClick={handleGoogleLogin}
              className=" btn  mx-auto text-white "
            >
              SignIn With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
