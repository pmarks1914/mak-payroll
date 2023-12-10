import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getEmployee } from '../Data/PageData';
import { Badge } from 'reactstrap';

let employeeGetAll = getEmployee();

const EmployeeDataTables = (dataDetails) => {
  const [employeeGetAllInfo, setEmployeeGetAllInfo] = useState([])

  employeeGetAll?.list?.then(value => setEmployeeGetAllInfo(value) )
  console.log(" >> ", employeeGetAllInfo)

  const items = []; 
  for (let i = 0; i < 30; i++) {
    items.push( {id: i+1, name: `Kofi ${i}`, age: 21+i+1, address: `23 WY ${i}`, city: "Accra", salary: ""});
  }
  const products = items;

  // const [products, setProducts] = useState(testData);
  
  const columns = [
    {
      dataField: 'ID',
      text: 'Id',
      // filter: textFilter()
    },
    {
      dataField: 'employee_name',
      text: 'Name',
      filter: textFilter()
    },
    {
      dataField: 'employee_email',
      text: 'Email',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'employee_phone',
      text: 'Phone',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'employee_address',
      text: 'Address',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'employee_city',
      text: 'City',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'employee_country',
      text: 'Country',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'business_address',
      text: 'Business',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'action',
      text: 'Action',
      events: {
        onClick: (e, column, columnIndex, rowIndex) => {
          funE(e, column, columnIndex, rowIndex);
        },
      },
      formatter: (cell, row) => (
        <Badge color='primary' className='pointer'> {cell} </Badge>
      ),

    },
  ];

  useEffect(() => {
    
    // setProducts([

    // ]);
  }, []);

  // manage paging
  const options = {
    page: 1,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '50', value: 50 },
      { text: 'All', value: employeeGetAllInfo.length }
    ],
    sizePerPage: 10,
    pageStartIndex: 1,
    paginationSize: 3,
    prePage: 'Prev',
    nextPage: 'Next',
    firstPage: 'First',
    lastPage: 'Last',
    paginationPosition: 'top'
  };


  function funE(e, column, columnIndex, rowIndexData) {

    localStorage.setItem("employeeData", JSON.stringify(rowIndexData));

    setTimeout(()=>{
      window.location.href = '/payroll/employee/' + rowIndexData?.employee_id?.toString()
    }, 1000)

    // console.log("<<<<   >>>>", rowIndexData  )

  }
  return (
    <div className="container table-container">
      {/* <div className="row hdr">
        <div className="col-sm-12 btn btn-info">
          React Bootstrap Table with Searching and Custom Pagination
        </div>
      </div> */}
      
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable
          striped
          hover
          keyField='id'
          data={employeeGetAllInfo}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(options)}
        />
      </div>
    </div>
  );
};


export default EmployeeDataTables;