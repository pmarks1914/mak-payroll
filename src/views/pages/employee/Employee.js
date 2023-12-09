import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import '../../datatable/table.css';
import { userGetData } from '../Data/PageData';
import EmployeeDataTables from './EmployeeDataTables'
import axios from 'axios';

let currentUser = JSON.parse(localStorage.getItem("userDataStore")); 

// let transactionData = getTransactionData();
// let transaction = []
// transactionData?.transaction?.then(value => { (transaction = value) });

const Employee = () => {
    const [dataDetails, setDataDetails] = useState()
    const [roleData, setRoleData] = useState({})

    useEffect(() => { 
        // 
        // let apikey_data = apikeyData();
        // apikey_data?.apikey?.then(value => { setApikeyDetails(value) });

        let userGetInfoData = userGetData();
        userGetInfoData?.userGetData?.then(value => { setDataDetails(value) });

        // console.log("currentUser ", currentUser)

    }, [])


    return (
        <div>
            {/* open modal for filter date range */}
            {/* <CButton onClick={() => setModal1(!modal1)} icon={cilArrowRight} className="float-end" >Filter</CButton> */}
            <br /><br />
            <EmployeeDataTables dataDetails={dataDetails} />

        </div>
    )
}

export default Employee;