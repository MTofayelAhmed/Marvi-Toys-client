import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const { createUser, googleLogin, updateUserData } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);

    // CreatedUser with Email and Password
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log("user Created", createdUser);
        updateUserData(createdUser, name, photo)
      
          .then(() => {
           
          })
          .catch(err=>{
            console.log(err)
          })
        
         
      })
      .catch((error) => {
        setError(error.message);
      
      });

      form.reset()
    navigate('/login')

  };
  const handleGoogleSignUp = () => {
    // googleRegister
    googleLogin()
      .then((result) => {
        const googleUser = result.user;
        console.log("google SignUp", googleUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
      navigate('/login')
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full  ">
        <div className="text-center mb-10 ">
          <h1 className="text-5xl   font-bold">SignUp Please!</h1>
        </div>
        <div className="card shadow-2xl flex-shrink-0  w-full   max-w-xl bg-base-100 ">
          <div className="card-body  ">
            <form onSubmit={handleRegister}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URl"
                  name="photo"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
               <input
                  className="btn text-white"
                  type="submit"
                  value="SignUp"
                /> 
               
              </div>
              <p className="mt-1 text-center ">
                <span className=" text-red-600 font-medium">{error}</span>
              </p>
            </form>
            <small className="text-center mt-4">
              Already have an account ? please{" "}
              <button className=" text-red-900 font-bold">
                <Link to="/login">LogIn</Link>
              </button>{" "}
            </small>

            <button
              onClick={handleGoogleSignUp}
              className=" btn  mx-auto text-white mt-4 "
            >
              SignUp With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
