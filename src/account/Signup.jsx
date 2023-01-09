import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../action/Action";
import { ReactComponent as YourSvg } from "../image/signup.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateData = () => {
    if (!name) {
      toast.warn("Please Enter Valid Name !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!email) {
      toast.warn("Please Enter Valid Email !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!password) {
      toast.warn("Please Enter Valid Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    } else if (password.length < 6) {
      toast.warn("Please Enter Minimum 6 digit Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (name && email && password) {
      msg();
      return true;
    }

    return true;
  };

  const msg = () => {
    toast.success(`${name} your Signup Sucessfully & Please Login`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateData()) {
      dispatch(signUp({ name, email, password }));
      navigate("/login");
    }
  };

  return (
    <>
  <section className="text-gray-600 body-font">
        <div className="container px-5 py-24  flex flex-wrap items-center">
          <div className="svg-container md:pr-16   lg:pr-0 pr-0 w-1/2 sm:w-1/2 md:w-1/2 xl:w-1/2 lg:w-1/2 ">
            {/* md:pr-16 lg:w-1/2 md:w-1/2*/}
            <YourSvg />
          </div>

          <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <form action="" onSubmit={submitForm}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>




       

      <ToastContainer autoClose={2000} />
    </>
  );
};

 export default Signup;


// <form action="" onSubmit={submitForm}>
// <section>
//   <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[300px] h-[350px] ml-[500px] mt-[100px]">
//     <h1 className="text-center mt-2">Signup</h1>
//     <div className="flex flex-col justify-center ml-[50px]">
//       {/* <h1 >welcome{detectSign.account}</h1> */}
//       <label htmlFor="" className="mt-[20px]">
//         First Name
//       </label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
//       />
//       <label htmlFor="" className="mt-[20px]">
//         Email Id
//       </label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
//       />
//       <label htmlFor="" className="mt-[20px]">
//         Password
//       </label>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
//       />
//     </div>
//     <button className="ml-[120px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
//       Submit
//     </button>
//   </div>
// </section>
// </form> 