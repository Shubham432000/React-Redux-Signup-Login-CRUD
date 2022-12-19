import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import PropTypes from 'prop-types';
//import { accountDelet } from '../action/Action';
//import { accountEdit } from '../action/Action';
import "react-toastify/dist/ReactToastify.css";
//import swal from "sweetalert";
//import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';

const DeparmentDetails = () => {

     const Account = useSelector((state)=>state.formReducer)


    const [data,setData]=useState([])
console.log("deparment details",data);
//const dispatch = useDispatch()
//const navigate = useNavigate()
const {id}=useParams()


const compare=()=>{
  let compareData=Account.Data.filter((item)=>{
    return(item.depa == id)
  })
 setData(compareData)
  console.log("compare",compareData);
}

useEffect(() => {
 compare()
}, [id]);
    // function removeAcc(Data) {
    //   // if(msg(employeeData)){
    //   // dispatch(deletData(employeeData.id));
    //   // }
  
    //   swal({
    //     title: `${Data.name} Are you sure?`,
    //     text: "Once deleted, you will not be able to recover this information!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   }).then((willDelete) => {
    //     if (willDelete) {
    //       dispatch(accountDelet(Data.id));
    //       swal("Poof! Your information  has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your information  is safe!");
    //     }
    //   });
    // }

    // // function editAcc(edit) {
    // //   dispatch(accountEdit(edit.id));
  
    // //  // navigate("/deparment/accountedit");
    // // }

    const rows = [
        { label: "Employee name", value: "name" },
        { label: "salary", value: "salary" },
        { label: "Mobile No", value: "mob" },
        { label: "Resignation", value: "resignation" },
      ];

      Table.propTypes = {
        coloumns: PropTypes.array,
        rows: PropTypes.array,
        title: PropTypes.string,
         delet: PropTypes.func,
        edit: PropTypes.func,
      }
  return (
    <>
    <div className='ml-[250px]'>
      <Table
       //coloumns={Account.accountData}
       coloumns={data}
       rows={rows}
      
       title={"deparment details"}
      //   delet={removeAcc}
      //  edit={editAcc}
       />
     </div>  
    </>
  );
}

export default DeparmentDetails;
