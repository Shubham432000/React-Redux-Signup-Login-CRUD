import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DeparmentDetails = () => {
  const formData = useSelector((state) => state.formReducer);

  const [data, setData] = useState([]);

  console.log('deparment details', data);

  const { id } = useParams();

  const compare = () => {
    let compareData = formData.Data.filter((item) => {
      return item.depa == id;
    });
    setData(compareData);
    console.log('compare', compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

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
      <div>
        <Table
          //coloumns={Account.accountData}
          coloumns={data}
          rows={rows}
          title={'deparment details'}
          
        />
      </div>
    </>
  );
};

export default DeparmentDetails;
