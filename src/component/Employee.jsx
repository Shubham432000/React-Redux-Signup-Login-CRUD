import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletData } from '../action/Action';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { editData } from '../action/Action';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import Table from './Table';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Employee = () => {
  const formInformation = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('employee', detectForm);

  function removeData(employeeData) {
    swal({
      title: `${employeeData.first} Are you sure?`,
      text: 'Once deleted, you will not be able to recover this information!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletData(employeeData.id));
        swal('Poof! Your information  has been deleted!', {
          icon: 'success'
        });
      } else {
        swal('Your information  is safe!');
      }
    });
  }

  function editValue(edit) {
    dispatch(editData(edit.id));

    navigate('/editEmployee');
  }

  const addPage = () => {
    navigate('/form');
  };

  const rows = [
    { label: 'First name', value: 'first' },
    { label: 'Last name', value: 'last' },
    { label: 'Deparment', value: 'depa' },
    { label: 'Add1', value: 'add1' },
    { label: 'Add2', value: 'add2' },
    { label: 'Mobile no', value: 'mob' },
    { label: 'Pan no', value: 'pan' },
    { label: 'Gender', value: 'gender' },
    { label: 'Martiual status', value: 'mart' }
  ];

  Table.propTypes = {
    coloumns: PropTypes.array,
    rows: PropTypes.array,
    title: PropTypes.string,
    delet: PropTypes.func,
    edit: PropTypes.func
  };

  return (
    <>
      <div className="flex flex-row justify-end mt-[40px] mr-[100px]">
        <div>
          <AiOutlinePlusCircle onClick={() => addPage()} size="35px" />
        </div>
      </div>
      <Table
        coloumns={formInformation.Data}
        rows={rows}
        title={'Employees'}
        delet={removeData}
        edit={editValue}
      />
    </>
  );
};

export default Employee;
