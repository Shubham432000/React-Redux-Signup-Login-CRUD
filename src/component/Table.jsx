import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import { AiFillEye } from 'react-icons/ai';

const Table = (props) => {
  let { coloumns = [], rows, title, delet, edit, details } = props;

  return (
    <>
      <div className="ml-[100px] mt-[40px]">
        <h1 className="ml-[350px] mb-[50px]">{title}</h1>
        <table className="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              {rows.map((row, index) => (
                <th key={index} className="border border-slate-300 p-4">
                  {row.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {coloumns.map((item) => {
              return (
                <tr key={item.id} >
                  {rows.map((data) => {
                    return (
                      <td key={item.id} className="border border-slate-300 p-4">
                        {item[data.value]}
                      </td>
                    );
                  })}
                  <td className="border border-slate-300 p-4">
                    <AiFillEye onClick={() => details(item)} />
                  </td>
                  <td className="border border-slate-300 p-4">
                    <HiPencilAlt onClick={() => edit(item)} />
                  </td>
                  <td className="border border-slate-300 p-4">
                    <FaTrashAlt onClick={() => delet(item)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
