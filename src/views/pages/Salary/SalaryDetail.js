import React from 'react';
import { Counter } from './Counter';
import Box from '@mui/material/Box';
import { CBadge } from '@coreui/react';
import HomeIcon from '@mui/icons-material/Home';
import moment from 'moment';
import { Col, Row } from 'reactstrap';


const SalaryDetail = () => {
    return (
        <div className='d-flex justify-content-center' >
            {/* <Counter /> */}

            <Box style={{ width: '60%', margin: '0px 3px' }} >
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}

                <Row className='mt-4 mb-0 d-flex'>
                    <Col sm="4" xm="4" md="4" lg="4" xl="4">
                        <a style={{ color: "#000" }}>
                            <p className=""> User  </p>
                        </a>
                    </Col>
                    <Col sm="4"></Col>
                    <Col sm="4">
                        <a style={{ color: "#000" }}>

                        </a>
                    </Col>
                    <hr />
                </Row>
                <Row className='mb-0 d-flex'>
                    <Col sm="4" xm="4" md="4" lg="4" xl="4">
                        <a style={{ color: "#000" }}>
                            <p className="">Name</p>
                        </a>
                    </Col>
                    <Col sm="4"></Col>
                    <Col sm="4">
                        <a style={{ color: "#000" }}>

                        </a>
                    </Col>
                    <hr />
                </Row>
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
                    <hr />
                </Row>

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
                    <hr />
                </Row>
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
                    <hr />
                </Row>
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
                    <hr />
                </Row>
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
                    <hr />
                </Row>
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
                    {/* <hr /> */}
                </Row>


            </Box>
        </div>
    );
};

export default SalaryDetail;