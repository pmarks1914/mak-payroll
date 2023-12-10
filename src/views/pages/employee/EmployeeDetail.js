import React from 'react';
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
    CListGroupItem
} from '@coreui/react';
import moment from 'moment';
import { Col, Row } from 'reactstrap';
import { TextField, OutlinedInput, InputLabel, MenuItem, Box, HomeIcon } from '@mui/material';


let employeeData = JSON.parse(localStorage.getItem("employeeData"));
// console.log(employeeData)




const EmployeeDetail = () => {
    return (
        <div className='d-flex justify-content-center' style={{ margin: '0px 0px 0px 0px' }}  >
            {/* <Counter /> */}

            {/* <CCard>
                <CCardHeader></CCardHeader>
                <CCardBody>
                  <CCardTitle></CCardTitle>
                  <CCardText>
                  </CCardText>
                </CCardBody>
              </CCard> */}

            <Box style={{ width: '50%', margin: '0px 0px' }} className="mt-0" >
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                <CCard className='mt-5'>
                    <p className='d-flex justify-content-center mt-4 mb-2 '> <h4>{("Details").toUpperCase()}</h4> </p>
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
                                        <p className="fs-6 fst-italic"> Employee Salary</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a >
                                        {employeeData?.emp_base_salary}
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
                                        {employeeData?.gross_salary}
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
                                            {employeeData?.net_salary}
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
                                        {employeeData?.taxable_income}
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
                                        {employeeData?.total_allowance}
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
                                        {employeeData?.total_deductions}
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
                                        {employeeData?.ssnit_relief}
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
                                        {employeeData?.income_tax}
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
                                        {employeeData?.payroll_month}
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
                                        {employeeData?.payroll_year}
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

            <InputLabel shrink htmlFor="email"> </InputLabel>
            <TextField
                // error={getFormDataError?.email}
                id="email"
                name="email"
                placeholder="Email"
                variant="outlined"
                margin="normal"
                type="email"
                fullWidth
                required
            // onChange={(e)=> (setUsernameVar(e.target.value), setGetFormDataError({...getFormDataError, ...{"first_name": false}}))}

            />

        </div>
    );
};

export default EmployeeDetail;