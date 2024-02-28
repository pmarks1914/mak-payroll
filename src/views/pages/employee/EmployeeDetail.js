import React, {useState} from 'react';
import moment from 'moment';
import { Button, Col, Row } from 'reactstrap';
import { TextField, OutlinedInput, InputLabel, MenuItem, Box, HomeIcon } from '@mui/material';
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
import { Label } from '@mui/icons-material';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';

let employeeData = JSON.parse(localStorage.getItem("employeeData"));
// console.log(employeeData)

let userData = JSON.parse(localStorage.getItem("userDataStore")); 



const EmployeeDetail = () => {
        // set modal state for update emp
        const [modal1, setModal1] = useState(false)

    // set state for holding data temp
    const [salaryTempFormData, setSalaryTempFormData] = useState(employeeData)
        // set state for data editing actions
        const [salaryFormData, setSalaryFormData] = useState({"id": employeeData?.employee_id, "employee_id": employeeData?.employee_id})
        // loader
        const [loader, setLoader] = useState("<div></div")
    
        console.log(" employeeData >> ", employeeData, salaryFormData, userData)
    
        function editEmployee(){
            // 
    
            setLoader('<div class="spinner-border "style="color: #e0922f;"></div>`')  
            let data = JSON.stringify(salaryFormData);
      
            let config = {
              method: 'put',
              url: process.env.REACT_APP_BASE_API + "/api/employee/update.php",
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
                let rowIndexData = {...employeeData, ...salaryFormData}
                localStorage.setItem("employeeData", JSON.stringify(rowIndexData));  
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
        <div className=''  width='100%'  >
            
            {
                modal1 ? "" :
                <Button
                type="submit"
                fullWidth
                variant="contained"
                // sx={{ mt: 3, mb: 2 }}
                onClick={(e) => setModal1(true)}
                // style={{ background: "#0a0463"}}
                className="bg-text-com-wp float-end mt-2 clearfix"
                >
                    Update employee base salary
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
                                        {employeeData?.employee_name}
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
                                        {employeeData?.employee_phone}
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
                                        {employeeData?.employee_email}
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employer Address </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.business_address}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>
                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Gender </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.employee_gender}
                                    </a>
                                </Col>
                            </Row>
                        </CListGroupItem>                        
                        
                        <CListGroupItem>
                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee City </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.employee_city}
                                    </a>
                                </Col>
                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>
                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Employee Country </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.employee_country}
                                    </a>
                                </Col>
                            </Row>
                        </CListGroupItem>
                        
                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Business Name </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.business_name}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Business Description </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.business_desc}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Business Phone Number </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.business_phone}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Business Address </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.business_address}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Business Email </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.business_email}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a >
                                        <p className="fs-6 fst-italic"> Entry Created on </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {moment(employeeData?.created_at).format('LLLL')}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>
                    </CListGroup>

                </CCard>

            </Box>  


            {/* modal for edit item*/}
            <CModal fullscreen="xl" visible={modal1} alignment="center" onClose={() => setModal1(false)} backdrop="static">
                <CModalHeader>
                <CModalTitle> Edit Employee  </CModalTitle>
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
                                <InputLabel shrink htmlFor="business_name" className="mt-0" > Business Name </InputLabel>
                                <TextField
                                id="business_name"
                                value={salaryTempFormData?.business_name}
                                name="business_name"
                                placeholder="Business Name"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"business_name": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{business_name: e.target.value}})) }}
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
                                value={salaryTempFormData?.business_desc}
                                name="business_desc"
                                placeholder="Business Description"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"business_desc": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{business_desc: e.target.value}})) }}
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
                                value={salaryTempFormData?.business_email}
                                name="business_email"
                                placeholder="Business Email"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"business_email": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{business_email: e.target.value}})) }}
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
                                value={salaryTempFormData?.business_phone}
                                name="business_phone"
                                placeholder="Business Phone"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                required
                                className="mt-0"
                                onChange={(e) => { (setSalaryFormData({...salaryFormData, ...{"business_phone": e.target.value}})); (setSalaryTempFormData({...salaryTempFormData, ...{business_phone: e.target.value}})) }}
                                />
                            </Box>
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

export default EmployeeDetail;