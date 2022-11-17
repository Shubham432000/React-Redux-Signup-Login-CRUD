import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletData } from "../action/Action";
import {FaTrashAlt} from "react-icons/fa"
import {HiPencilAlt} from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import { editData } from "../action/Action";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Employee = () => {
  const detectForm = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log("employee", detectForm);

  function removeData(employeeData) {
    // var delet = window.confirm("do you really want delet information")
    console.log("employeeData", employeeData);
msg(employeeData)
    // if (
    //   window.confirm(
    //     `Are you sure you want to delete the record ${employeeData.first}`
    //   )
    //   // toast.success(` ${employeeData.first} your record delete succesfully`, {
    //   //   position: toast.POSITION.TOP_CENTER
    //   // })
    // ) {
    //   dispatch(deletData(employeeData.id));
    // }
    dispatch(deletData(employeeData.id));
  }

  function msg(employeeData){
    toast.success(` ${employeeData.first} your record delete succesfully`, {
      position: toast.POSITION.TOP_CENTER})
  }

  function editValue(edit){

    dispatch(editData(edit.id))
    
    navigate("/editEmployee")
  }

  return (
    <div className="ml-[250px] mt-[100px]">
      <h1 className="ml-[350px] mb-[50px]">View Employee</h1>
      <table className="table-fixed border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 p-4">First name</th>
            <th className="border border-slate-300 p-4">Last name</th>
            <th className="border border-slate-300 p-4">Add1</th>
            <th className="border border-slate-300 p-4">Add2</th>
            <th className="border border-slate-300 p-4">Mobile no</th>
            <th className="border border-slate-300 p-4">Pan no</th>
            <th className="border border-slate-300 p-4">Gender</th>
            <th className="border border-slate-300 p-4">Martiual status</th>
          </tr>
        </thead>

        <tbody>
          {detectForm.Data.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-300 p-4">{item.first}</td>
              <td className="border border-slate-300 p-4">{item.last}</td>
              <td className="border border-slate-300 p-4">{item.add1}</td>
              <td className="border border-slate-300 p-4">{item.add2}</td>
              <td className="border border-slate-300 p-4">{item.mob}</td>
              <td className="border border-slate-300 p-4">{item.pan}</td>
              <td className="border border-slate-300 p-4">{item.gender}</td>
              <td className="border border-slate-300 p-4">{item.mart}</td>
              <td className="border border-slate-300 p-4">
              <HiPencilAlt  onClick={()=>editValue(item)}/>
              </td>
              <td className="border border-slate-300 p-4">
              <FaTrashAlt onClick={() => removeData(item)}/>
             
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <ToastContainer autoClose={2000}/>
    </div>
    
  );
};

export default Employee;












// (e)=>{deletData(e,index)}

//    <button
// key={item.id}
// onClick={() => removeData(item)}
// className="text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2"
// >
// Delete
// </button>