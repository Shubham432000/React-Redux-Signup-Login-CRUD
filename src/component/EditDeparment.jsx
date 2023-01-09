import React from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { depaUpdate } from '../action/Action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const EditEmployee = () => {
  const depaData = useSelector((state) => state.deparmentReducer);

  console.log(depaData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [depname, setdepName] = useState(depaData.Info1.depname);
  const [identity, setIdentity] = useState(depaData.Info1.identity);
  const [noemployee, setNoemployee] = useState(depaData.Info1.noemployee);
  const [hod, setHod] = useState(depaData.Info1.hod);

  const id = depaData.Info1.id;

  console.log('edit depa', depname, hod);
  const onSubmit = () => {
    if (
      swal({
        icon: 'success',
        title: `${depname} Your Information Edit Succesfully`
      })
    ) {
      dispatch(depaUpdate({ id, depname, identity, noemployee, hod }));
      navigate('/deparment');
    }
  };

  return (
    <>
  <section className="container mx-auto mt-10">
        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
              value={depname}
              onChange={(e)=>setdepName(e.target.value)}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Deparment Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
              value={identity}
              onChange={(e)=>setIdentity(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Deparment Id
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
              value={noemployee}
              onChange={(e)=>setNoemployee(e.target.value)}
                type="text"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Set No Of Employee
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
              value={hod}
              onChange={(e)=>setHod(e.target.value)}
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Head O f Deparment
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </section>


      {/* <section>
        <h1 className="ml-[350px] mb-[50px]">Edit Employee</h1>

        <form action="" onSubmit={onSubmit}>
          <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[700px] h-[450px] ml-[350px] mt-[30px]">
            <div className="flex flex-col justify-center ml-[50px]">
              <div className="flex flex-row mt-[20px]">
                <label htmlFor="" className="mt-[7px]">
                  Deparment Name:
                </label>
                <br />
                <input
                  type="text"
                  value={depname}
                  onChange={(e) => setdepName(e.target.value)}
                  required
                  className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
                <label htmlFor="" className="mt-[7px] ml-[30px]">
                  Employee id:
                </label>
                <br />
                <input
                  type="text"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  required
                  className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
              </div>
              <div className="flex flex-col mt-[20px]">
                <label htmlFor="" className="mt-[7px]">
                  No Of Employees
                </label>
                <input
                  type="text"
                  value={noemployee}
                  onChange={(e) => setNoemployee(e.target.value)}
                  required
                  className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
                <label htmlFor="" className="mt-[7px] ">
                  Head of deparment
                </label>
                <input
                  type="text"
                  value={hod}
                  onChange={(e) => setHod(e.target.value)}
                  required
                  className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
              </div>
            </div>
          </div>

          <button className="ml-[650px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
            Submit
          </button>
        </form>
      </section> */}
      <ToastContainer />
    </>
  );
};
export default EditEmployee;
