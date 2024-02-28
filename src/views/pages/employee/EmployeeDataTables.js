import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getEmployee, getBusinessDataData } from '../Data/PageData';
import { Badge } from 'reactstrap';
import moment from 'moment';
import { Button, Col, Row } from 'reactstrap';
import { TextField, OutlinedInput, InputLabel, MenuItem, Box, HomeIcon } from '@mui/material';
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CButton,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter
} from '@coreui/react';
import { Label } from '@mui/icons-material';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';

let employeeGetAll = getEmployee();
let businessGetAll = getBusinessDataData(); 


const EmployeeDataTables = (dataDetails) => {
  // set modal state for add emp
  const [modalEmp1, setModalEmp1] = useState(false)

  const [employeeGetAllInfo, setEmployeeGetAllInfo] = useState([])
  const [businessGetAllInfo, setBusinessGetAllInfo] = useState([])

  const [salaryFormData, setSalaryFormData] = useState()
  const [loader, setLoader] = useState("<div></div")

  const items = [];
  for (let i = 0; i < 30; i++) {
    items.push({ id: i + 1, name: `Kofi ${i}`, age: 21 + i + 1, address: `23 WY ${i}`, city: "Accra", salary: "" });
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
    employeeGetAll?.list?.then(value => setEmployeeGetAllInfo(value))
  }, []);
  useEffect(() => {
    businessGetAll?.list?.then(value => setBusinessGetAllInfo(value))
    console.log("businessGetAll  >> ", businessGetAllInfo)
  }, [businessGetAllInfo]);
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

    setTimeout(() => {
      window.location.href = '/payroll/employee/' + rowIndexData?.employee_id?.toString()
    }, 1000)

    // console.log("<<<<   >>>>", rowIndexData  )

  }
  function createEmployee() {
    // 

    setLoader('<div class="spinner-border "style="color: #e0922f;"></div>`')
    let data = JSON.stringify(salaryFormData);

    let config = {
      method: 'post',
      url: process.env.REACT_APP_BASE_API + "/api/employee/",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config).then(response => {

      // console.log(response.data, "auth ");

      setLoader("<a></a>")

      // console.log((response.data));
      if (response?.data?.status === 200) {
        // console.log("user data >> ",response?.data, " data >> ", response?.data)
        setModalEmp1(false)
        Swal.fire({
          title: response?.data?.message,
          icon: 'success',
          allowOutsideClick: false,
          // allowEscapeKey: false,
          showCancelButton: false,
          confirmButtonColor: '#321fdb',
          // cancelButtonColor: '#d33',
          confirmButtonText: 'OK!'
        }).then((result) => {
          //  
        });
      }
      else {
        Swal.fire({
          title: response?.data?.message,
          icon: 'error',
          allowOutsideClick: false,
          // allowEscapeKey: false,
          showCancelButton: false,
          confirmButtonColor: '#321fdb',
          // cancelButtonColor: '#d33',
          confirmButtonText: 'OK!'
        }).then((result) => {
          //  
        });
      }

    }).catch(function (error) {
      // console.log(error.response)
      if (error.response) {

        Swal.fire({
          title: "server errors",
          icon: 'error',
          allowOutsideClick: false,
          // allowEscapeKey: false,
          showCancelButton: false,
          confirmButtonColor: '#321fdb',
          // cancelButtonColor: '#d33',
          confirmButtonText: 'OK!'
        }).then((result) => {
          //  
        });
        // // console.log("==>");
        setLoader("<a></a>")
        /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */

      } else if (error.request) {

        setLoader("<a></a>")
        /*
          * The request was made but no response was received, `error.request`
          * is an instance of XMLHttpRequest in the browser and an instance
          * of http.ClientRequest in Node.js
          */

      } else {
        // Something happened in setting up the request and triggered an Error

      }
    }
    );

    // 
  }
  let optionsBusiness = businessGetAllInfo.map((x, i) =>{
    return({value: x?.id, label: x?.business_name, key: i+1 })
  }
  );

  return (
    <div className="container table-container">
      {/* <div className="row hdr">
        <div className="col-sm-12 btn btn-info">
          React Bootstrap Table with Searching and Custom Pagination
        </div>
      </div> */}

      {
        modalEmp1 ? "" :
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // sx={{ mt: 3, mb: 2 }}
            onClick={(e) => setModalEmp1(true)}
            // style={{ background: "#0a0463"}}
            className="bg-text-com-wp float-end mt-2 clearfix"
          >
            Add employee
          </Button>
      }

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
      {/* modal for create item*/}
      <CModal fullscreen="xl" visible={modalEmp1} alignment="center" onClose={() => setModalEmp1(false)} backdrop="static">
        <CModalHeader>
          <CModalTitle> Add Employee  </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <Row>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="name" className="mt-0" > Employee name </InputLabel>
                  <TextField
                    id="name"
                    name="name"
                    placeholder="Employee name"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_name": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="email" className="mt-0" > Employee email </InputLabel>
                  <TextField
                    id="email"
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_email": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="phone" className="mt-0" > Employee phone number </InputLabel>
                  <TextField
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    variant="outlined"
                    margin="normal"
                    type="tel"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_phone": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="gender" className="mt-0" > Employee gender </InputLabel>
                  <TextField
                    id="gender"
                    name="gender"
                    placeholder="Employee gender"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_gender": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="city" className="mt-0" > Employee city </InputLabel>
                  <TextField
                    id="city"
                    name="city"
                    placeholder="Employee city"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_city": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="address" className="mt-0" > Employee address </InputLabel>
                  <TextField
                    id="address"
                    name="address"
                    placeholder="Employee address"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_address": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="country" className="mt-0" > Employee country </InputLabel>
                  <TextField
                    id="country"
                    name="country"
                    placeholder="Employee country"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "employee_country": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="business_name" className="mt-0" > Business Name </InputLabel>
                  <TextField
                    id="business_name"
                    name="business_name"
                    placeholder="Business Name"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "business_name": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="business_desc" className="mt-0" > Business Description </InputLabel>
                  <TextField
                    id="business_desc"
                    name="business_desc"
                    placeholder="Business Description"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "business_desc": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="business_email" className="mt-0" > Business Email </InputLabel>
                  <TextField
                    id="business_email"
                    name="business_email"
                    placeholder="Business Email"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "business_email": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>
            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Box
                  component="form"
                  noValidate
                  autoComplete="on"
                  className="mt-0"
                >
                  <InputLabel shrink htmlFor="business_phone" className="mt-0" > Business Phone Number </InputLabel>
                  <TextField
                    id="business_phone"
                    name="business_phone"
                    placeholder="Business Phone"
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    className="mt-0"
                    onChange={(e) => { setSalaryFormData({ ...salaryFormData, ...{ "business_phone": e.target.value } }) }}
                  />
                </Box>
              </div>
            </Col>


            <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
              <div className='mui-control-form' >
                <Label for="payroll_year_business_name" className=""> </Label> Company
                <Select
                  // placeholder={salaryTempFormData?.business_name}
                  name='payroll_year_business_name'
                  options={optionsBusiness}
                  // components={{ Option: IconOption }}
                  onChange={(e) => setSalaryFormData({ ...salaryFormData, ...{ "company": e.value } })}
                />
              </div>
            </Col>

          </Row>

        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" className='text-white' onClick={(e) => setModalEmp1(false)}>
            Cancel
          </CButton>
          <CButton color="primary" className='' onClick={(e) => createEmployee(e)}>
            Create
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};


export default EmployeeDataTables;