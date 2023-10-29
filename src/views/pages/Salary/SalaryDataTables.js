import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getSalary } from '../Data/PageData';


let salaryGetAll = getSalary();
let salaryGetAllInfo = []
salaryGetAll.list.then(value => salaryGetAllInfo = value)


const SalaryDataTables = () => {
  
  // const items = [];
  // for (let i = 0; i < 30; i++) {
  //   items.push( {id: i+1, name: `Kofi ${i}`, age: 21+i+1, address: `23 WY ${i}`, city: "Accra", salary: ""});
  // }
  // const products = salaryGetAllInfo;

  const [products, setProducts] = useState([]);
  
  const columns = [
    {
      dataField: 'ID',
      text: 'Id',
      // filter: textFilter()
    },
    {
      dataField: 'net_salary',
      text: 'Net Salary',
      filter: textFilter()
    },
    {
      dataField: 'emp_base_salary',
      text: 'Salary',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'total_allowance',
      text: 'Allowance',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'gross_salary',
      text: 'Gross Salary',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'total_deductions',
      text: 'Deduction',
      filter: textFilter(),
      sort: true
    },
    {
      dataField: 'action',
      text: 'Action',
      formatter: (cell, row) => (
        <div dangerouslySetInnerHTML={{ __html: cell }} />
      ),
    },
  ];

  useEffect(() => {

    setTimeout(() => {
      setProducts(salaryGetAllInfo || [])
      // console.log(" >> ", salaryGetAllInfo)
    }, 1000);

  }, []);

  // manage paging
  const options = {
    page: 1,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '50', value: 50 },
      { text: 'All', value: products.length }
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
          data={products}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(options)}
        />
      </div>
    </div>
  );
};


export default SalaryDataTables;