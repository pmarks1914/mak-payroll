import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const EmployeeDataTables = () => {
  const [products, setProducts] = useState([]);
  
  const columns = [
    {
      dataField: 'Id',
      text: 'Id'
    },
    {
      dataField: 'Name',
      text: 'Name',
      filter: textFilter()
    },
    {
      dataField: 'Age',
      text: 'Age',
      sort: true
    },
    {
      dataField: 'Address',
      text: 'Address',
      sort: true
    },
    {
      dataField: 'City',
      text: 'City',
      sort: true
    },
    {
      dataField: 'ContactNum',
      text: 'ContactNum',
      sort: true
    },
    {
      dataField: 'Salary',
      text: 'Salary',
      sort: true
    },
    {
      dataField: 'Department',
      text: 'Department',
      sort: true
    }
  ];

  useEffect(() => {
    axios.get('http://localhost:51760/Api/Emp/employee')
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  const options = {
    page: 2,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: 'All', value: products.length }
    ],
    sizePerPage: 5,
    pageStartIndex: 0,
    paginationSize: 3,
    prePage: 'Prev',
    nextPage: 'Next',
    firstPage: 'First',
    lastPage: 'Last',
    paginationPosition: 'top'
  };

  return (
    <div className="container">
      <div className="row hdr">
        <div className="col-sm-12 btn btn-info">
          React Bootstrap Table with Searching and Custom Pagination
        </div>
      </div>
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


export default EmployeeDataTables;