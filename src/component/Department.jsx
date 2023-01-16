import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Table from './Table';
import { deparmentDelet } from '../action/Action';
import { deparmentEdit } from '../action/Action';

import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

const Department = () => {
  const deparmentValue = useSelector((state) => state.deparmentReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deparmentPage = () => {
    navigate('/deparmentform');
  };

  function removeDeparment(Data) {
    swal({
      title: `${Data.deparmentname} Are you sure?`,
      text: 'Once deleted, you will not be able to recover this information!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deparmentDelet(Data.id));
        swal('Poof! Your information  has been deleted!', {
          icon: 'success'
        });
      } else {
        swal('Your information  is safe!');
      }
    });
  }

  function editDeparment(edit) {
    dispatch(deparmentEdit(edit.id));

    navigate('/editdeparment');
  }

  const rows = [
    { label: 'Deparment name', value: 'deparmentname' },
    { label: 'Department Id', value: 'identity' },
    { label: 'No Of Employee', value: 'noemployee' },
    { label: 'Head Of Deparment', value: 'hod' }
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
      <div className="container  flex flex-row justify-end mt-[70px] cursor-pointer">
        <div>
          <AiOutlinePlusCircle onClick={() => deparmentPage()} size="35px" />
        </div>
      </div>
      <div className="ml-[200px] mt-[10px]">
        <Table
          coloumns={deparmentValue.Info}
          rows={rows}
          title={'Deparment'}
          delet={removeDeparment}
          edit={editDeparment}
          onRowClick={(item) => {
            navigate(`/deparmentdetails/${item.deparmentname}`);
           
          }}
        />
      </div>
    </>
  );
};

export default Department;
