import React from 'react';
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
    CListGroupItem
} from '@coreui/react';
import HomeIcon from '@mui/icons-material/Home';
import moment from 'moment';
import { Col, Row } from 'reactstrap';


const SalaryDetail = () => {
    return (
        <div className='d-flex justify-content-center' style={{ margin: '0px 20px 0px 0px' }}  >
            {/* <Counter /> */}

            {/* <CCard>
                <CCardHeader></CCardHeader>
                <CCardBody>
                  <CCardTitle></CCardTitle>
                  <CCardText>
                  </CCardText>
                  
                </CCardBody>
              </CCard> */}

            <Box style={{ width: '50%', margin: '0px 0px' }} >
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                <CCard className='mt-5'>
                    <p className='d-flex justify-content-center mt-4 mb-2 '> <h4>{("Details").toUpperCase() }</h4> </p>
                    <CListGroup flush>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a style={{ color: "#000" }}>
                                        <p className="">Name</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a style={{ color: "#000" }}>
                                        jj
                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a style={{ color: "#000" }}>
                                        <p className=""> Number</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a style={{ color: "#000" }}>

                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a style={{ color: "#000" }}>
                                        <p className=""> Type</p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a style={{ color: "#000" }}>

                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a style={{ color: "#000" }}>
                                        <p className=""> Message </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a style={{ color: "#000" }}>

                                    </a>
                                </Col>

                            </Row>

                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a style={{ color: "#000" }}>
                                        <p className=""> Status </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a style={{ color: "#000" }}>
                                        <CBadge color="" >
                                            hh
                                        </CBadge>

                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="4" md="4" lg="4" xl="4">
                                    <a style={{ color: "#000" }}>
                                        <p className=""> Date </p>
                                    </a>
                                </Col>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <a style={{ color: "#000" }}>
                                        hh
                                        {/* {moment(post?.viewData?.created_at).format('LLLL')} */}
                                    </a>
                                </Col>

                            </Row>
                        </CListGroupItem>

                        <CListGroupItem>

                            <Row className='mb-0 d-flex'>
                                <Col sm="4" xm="2" md="2" lg="2" xl="2">
                                    <a style={{ color: "#000" }}>
                                        {/* <p className=""> Device Info. </p> */}
                                    </a>
                                </Col>
                                <Col sm="8" className='ml-120'>
                                    <p style={{ color: "#000", textAlign: "center" }} >
                                        <b> More. </b> <br />

                                    </p>

                                </Col>
                                <Col sm="2">

                                </Col>

                            </Row>
                        </CListGroupItem>
                        
                    </CListGroup>

                </CCard>


            </Box>
        </div>
    );
};

export default SalaryDetail;