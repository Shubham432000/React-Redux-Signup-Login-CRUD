import React from "react";

const Table = ({ coloumns = [], rows, title, delet, edit }) => {
  return (
    <>
      <div className="ml-[100px] mt-[100px]">
        <h1 className="ml-[100px] mb-[50px]">{title}</h1>
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
              rows.map((val) => {
                <tr key={item.id}>
                  <td className="border border-slate-300 p-4">
                    {item[val.value]}
                  </td>
                </tr>
                console.log(item[val.value]);
              });
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

{
  /* <div className="ml-[200px] mt-[100px]">
        <h1 className="ml-[200px] mb-[50px]">{title}</h1>
        <table className="table-fixed border-collapse border border-slate-400">
        {rows.map((row)=>(
          <thead>
           
            <tr>
              <th className="border border-slate-300 p-4">{row.label}</th>
             
            </tr>
          
          </thead>
            ))}

          <tbody>
            {coloumns.map((item) => 
              {rows.map((val)=>(
              <tr key={item.id}>
                <td className="border border-slate-300 p-4">{item[val.value]}</td>
                
              </tr>
              ))
              }
            )}
          </tbody>
        </table>
       
      </div> */
}
