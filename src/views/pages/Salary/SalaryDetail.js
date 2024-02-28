import React, { useState } from 'react';
import { Counter } from './Counter';
import Box from '@mui/material/Box';
import {
    CBadge,
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
import HomeIcon from '@mui/icons-material/Home';
import moment from 'moment';
import { Button, Col, Row } from 'reactstrap';
import { Label } from '@mui/icons-material';
import { InputLabel, TextField } from '@mui/material';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';

let date = new Date();

let salaryData = JSON.parse(localStorage.getItem("salaryData")); 
// console.log(salaryData)

let optionsYear = [...Array(100)].map((x, i) =>{
    return({value: (date.getUTCFullYear()-100+1+i), label: (date.getUTCFullYear()-100+1+i), key: i+1 })
    // return createOption( (date.getUTCFullYear()-100+1+i), (date.getUTCFullYear()-100+1+i) )
  }
  );
  const optionsMonth = [
    // {value: "", label: "Select Fin-Month", icon: "", isDisabled: true },
    {value: "January", label: "January", key: 1 },
    {value: "February", label: "February", key: 2 },
    {value: "March", label: "March", key: 3 },
    {value: "April", label: "April", key: 4 },
    {value: "May", label: "May", key: 5 },
    {value: "June", label: "June", key: 6 },
    {value: "July", label: "July", key: 7 },
    {value: "August", label: "August", key: 8 },
    {value: "September", label: "September", key: 9 },
    {value: "October", label: "October", key: 10 },
    {value: "November", label: "November", key: 11 },
    {value: "December", label: "December", key: 12 },
  ];



const SalaryDetail = () => {

    // set modal state for update emp
    const [modal1, setModal1] = useState(false)
    // set state for holding data temp
    const [salaryTempFormData, setSalaryTempFormData] = useState(salaryData)
    // set state for data editing actions
    const [salaryFormData, setSalaryFormData] = useState({"id": salaryData?.payrollID, "employee_id": salaryData?.employee_id})
    // loader
    const [loader, setLoader] = useState("<div></div")

    // console.log(" salaryData >> ", salaryData)

    function editEmployee(){
        // 

        setLoader('<div class="spinner-border "style="color: #e0922f;"></div>`')  
        let data = JSON.stringify(salaryFormData);
  
        let config = {
          method: 'put',
          url: process.env.REACT_APP_BASE_API + "/api/salary/update.php",
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
            let rowIndexData = {...salaryData, ...salaryFormData}
            salaryData = rowIndexData;
            localStorage.setItem("salaryData", JSON.stringify(rowIndexData));  
            setModal1(false)
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
          else{
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
    return (
        <div className='' width='100%' >
            {
                modal1 ? "" :
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => setModal1(true)}
                // style={{ background: "#0a0463"}}
                className="bg-text-com-wp float-end mt-2 clearfix"
                >
                    Update employee salary
                </Button>
            }

               

            <Box style={{ width: '60%', clear: "both" }} className="mt-0" >
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                <CCard className='mt-0'>
                    <p className='d-flex justify-content-center mt-3 mb-2 '> <h4>{("Details").toUpperCase()}</h4> </p>
                    <CListGroup flush>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic">Name</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.employee_name}
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Phone Number</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.employee_phone}
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Email</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.employee_email}
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Base Salary</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.emp_base_salary}
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Gross Salary </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.gross_salary}
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Net-Salary </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        <CBadge color="secondary" className='fst-italic' >
                                            {salaryData?.net_salary}
                                        </CBadge>
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Taxable Income </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.taxable_income}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Allowance </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.total_allowance}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Total Deduction </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.total_deductions}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> SSNIT Relief </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.ssnit_relief}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Income Tax </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.income_tax}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Salary Month </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.payroll_month}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Salary Year </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {salaryData?.payroll_year}
                                        {/* {moment(post?.viewData?.created_at).format('LLLL')} */}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>


                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="2" md="2" lg="2" xl="2">
                                    <a >
                                        {/* <p  className="fs-6 fst-italic"> Device Info. </p> */}
                                    </a>
                                </Col>
                                <Col sm="8" className='ml-120'>
                                    <p style={{ textAlign: "center" }} className='fst-italic' >
                                        <b> Currency GHS </b> <br />

                                    </p>

                                </Col>
                                <Col sm="2">

                                </Col>

                            </Row>
                        </CListGroupItem>

                    </CListGroup>

                </CCard>


            </Box>
 

            {/* modal for edit item*/}
            <CModal fullscreen="xl" visible={modal1} alignment="center" onClose={() => setModal1(false)} backdrop="static">
                <CModalHeader>
                <CModalTitle> Edit Employee Base Salary  </CModalTitle>
                </CModalHeader>
                <CModalBody> 
                {/* <Checkbox {...label} /> */}
                {/* <Row style={{ marginRight: '1px' }}>
                    <Col xs="12" sm="12" md={12} lg={12} className="mt-3" >
                    <Label for="customField" className="f-w-label mb-0"> Roles </Label>
                    <Select
                        className='mt-1'
                        placeholder={ editFormData?.role_name?.toUpperCase() }
                        onChange={(e)=> setFormInviteData({...formInviteData, ...{"role_id": e}}) }
                        options={optionRoles}
                    />
                    </Col>            
                </Row>     */}
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
                                value={salaryTempFormData?.employee_name}
                                name="name"
                                placeholder="Employee name"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_name": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_name: e.target.value}})) }}
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
                                value={salaryTempFormData?.employee_email}
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                margin="normal"
                                type="email"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_email": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_email: e.target.value}})) }}
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
                                value={salaryTempFormData?.employee_phone}
                                name="phone"
                                placeholder="Phone"
                                variant="outlined"
                                margin="normal"
                                type="tel"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_phone": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_phone: e.target.value}})) }}
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
                                value={salaryTempFormData?.employee_gender}
                                name="gender"
                                placeholder="Employee gender"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_gender": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_gender: e.target.value}})) }}
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
                                value={salaryTempFormData?.employee_city}
                                name="city"
                                placeholder="Employee city"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_city": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_city: e.target.value}})) }}
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
                                value={salaryTempFormData?.employee_address}
                                name="address"
                                placeholder="Employee address"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_address": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_address: e.target.value}})) }}
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
                                value={salaryTempFormData?.employee_country}
                                name="country"
                                placeholder="Employee country"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"employee_country": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{employee_country: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="net_salary" className="mt-0" > Employee net salary </InputLabel>
                                <TextField
                                id="net_salary"
                                value={salaryTempFormData?.net_salary}
                                name="net_salary"
                                placeholder="Employee net salary"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"net_salary": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{net_salary: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="emp_base_salary" className="mt-0" > Employee base salary </InputLabel>
                                <TextField
                                id="emp_base_salary"
                                value={salaryTempFormData?.emp_base_salary}
                                name="emp_base_salary"
                                placeholder="Employee base salary"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"emp_base_salary": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{emp_base_salary: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="total_allowance" className="mt-0" > Employee total allowance </InputLabel>
                                <TextField
                                id="total_allowance"
                                value={salaryTempFormData?.total_allowance}
                                name="total_allowance"
                                placeholder="Employee total allowance"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"total_allowance": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{total_allowance: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="gross_salary" className="mt-0" > Employee gross salary </InputLabel>
                                <TextField
                                id="gross_salary"
                                value={salaryTempFormData?.gross_salary}
                                name="gross_salary"
                                placeholder="Employee gross salary "
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"gross_salary": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{gross_salary: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="total_deductions" className="mt-0" > Employee total deductions </InputLabel>
                                <TextField
                                id="total_deductions"
                                value={salaryTempFormData?.total_deductions}
                                name="total_deductions"
                                placeholder="Employee total deductions "
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"total_deductions": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{total_deductions: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="ssnit_relief" className="mt-0" > Employee ssnit relief</InputLabel>
                                <TextField
                                id="ssnit_relief"
                                value={salaryTempFormData?.ssnit_relief}
                                name="ssnit_relief"
                                placeholder="Employee ssnit relief "
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"ssnit_relief": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{ssnit_relief: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="taxable_income" className="mt-0" > Employee taxable income </InputLabel>
                                <TextField
                                id="taxable_income"
                                value={salaryTempFormData?.taxable_income}
                                name="taxable_income"
                                placeholder="Employee taxable income "
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"taxable_income": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{taxable_income: e.target.value}})) }}
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
                                <InputLabel shrink htmlFor="income_tax" className="mt-0" > Employee income tax </InputLabel>
                                <TextField
                                id="income_tax"
                                value={salaryTempFormData?.income_tax}
                                name="income_tax"
                                placeholder="Employee income tax"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"income_tax": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{income_tax: e.target.value}})) }}
                                />
                            </Box>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
                        <div className='mui-control-form' >    
                            <Label htmlFor="payroll_month" className="mb-0" > </Label> Employee pay month           
                            <Select
                                style={{padding: "0px"}}
                                className="mt-0"
                                name="payroll_month"
                                placeholder={ salaryTempFormData?.payroll_month?.toUpperCase() }
                                onChange={(e)=> setSalaryFormData({...salaryFormData, ...{"payroll_month": e.value}}) }
                                options={optionsMonth}
                            />
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md={6} lg={6} xl={6} className="mt-2" >
                        <div className='mui-control-form' >
                            <Label for="payroll_year" className=""> </Label> Employee pay year
                            <Select
                                placeholder={salaryTempFormData?.payroll_year}
                                name='payroll_year'
                                options={optionsYear}
                                // components={{ Option: IconOption }}
                                onChange={(e)=> setSalaryFormData({...salaryFormData, ...{"payroll_year": e.value}}) }
                            />
                        </div>
                    </Col>
                </Row>
                </CModalBody>
                <CModalFooter>
                <CButton color="secondary" className='text-white' onClick={(e) => setModal1(false)}> 
                    Cancel
                </CButton>
                <CButton color="primary" className='' onClick={(e) => editEmployee(e)}> 
                    Update
                </CButton>
                </CModalFooter>
            </CModal>
        </div>
    );
};

export default SalaryDetail;