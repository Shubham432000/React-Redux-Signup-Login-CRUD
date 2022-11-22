import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";

const DeparmentInformation = () => {
  const val = useSelector((state) => state.deparmentReducer);
  const navigate = useNavigate();
  console.log("infor", val);

  const deparmentPage = () => {
    navigate("/deparment");
  };
  return (
    <>
      <div className="container  flex flex-row justify-end mt-[70px] cursor-pointer">
        <div>
          <AiOutlinePlusCircle onClick={() => deparmentPage()} size="35px" />
        </div>
      </div>
      <div className="ml-[400px] mt-[100px]">
        <h1 className="ml-[350px] mb-[50px]">Deparment Employee</h1>
        <table className="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 p-4">Deparment name</th>
              <th className="border border-slate-300 p-4">Employee Id</th>
              <th className="border border-slate-300 p-4">No Of Empoyee</th>
              <th className="border border-slate-300 p-4">Head Of Deparment</th>
            </tr>
          </thead>

          <tbody>
            {val.Info.map((item) => (
              <tr key={item.id}>
                <td className="border border-slate-300 p-4">{item.depname}</td>
                <td className="border border-slate-300 p-4">{item.identity}</td>
                <td className="border border-slate-300 p-4">
                  {item.noemployee}
                </td>
                <td className="border border-slate-300 p-4">{item.hod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeparmentInformation;
