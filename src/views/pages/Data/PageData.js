 import axios from "axios";
import React from "react";


let loader = '<div class="spinner-border dashboard-loader" style="color: #e0922f;"></div>'
const userData = JSON.parse(localStorage.getItem("userDataStore"));

export function userGetData(){
    let data = '';
    let config_transaction = {
        method: 'get',
        url: process.env.REACT_APP_BASE_API + "/team/" + userData?.account + "/",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData?.access
        },
        data: data
    };

    function userGetDataDetails(){
        <a dangerouslySetInnerHTML={{ __html: loader }}></a>
        return axios(config_transaction).then(response => {
            // console.log("data ==", response?.data?.members);
            // if (response.data.data) {
                // 
                if(response?.data){loader = "<a></>";}
                
                <a dangerouslySetInnerHTML={{ __html: loader }}></a>;
                return response?.data?.members;
            // }
            // return

        }).catch(function (error) {
            loader = "<a></>";
            <a dangerouslySetInnerHTML={{ __html: loader }}></a>;
            if (error.response) {
                // // console.log("==");
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
            } else if (error.request) {
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

    }
    
    return {
        "userGetData": userGetDataDetails()
    }
}

export function getSalary(){

    let data = '';
    let config_salary = {
        method: 'get',
        url:  process.env.REACT_APP_BASE_API + "/api/salary/payroll.php",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userData?.access
        },
        data: data
    };

    let dataSource = axios(config_salary).then(response => {
      // console.log("data ==", response);
        <a dangerouslySetInnerHTML={{ __html: loader }}></a>
        if (response.status === 200) {
            //   console.log("data source==", response.data.records);
            if(response?.data){loader = "<a></>";}
                
            <a dangerouslySetInnerHTML={{ __html: loader }}></a>;

            let tableData = response.data.records;
            let transformData = Object.keys(tableData).map((post, id) => {
                return {
                  "ID": id+1,
                  "payrollID": tableData[id]?.payrollID,
                  "net_salary": parseFloat(tableData[id]?.net_salary)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "emp_base_salary": parseFloat(tableData[id]?.emp_base_salary)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "total_allowance": parseFloat(tableData[id]?.total_allowance)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "gross_salary": parseFloat(tableData[id]?.gross_salary)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "total_deductions": parseFloat(tableData[id]?.total_deductions)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "ssnit_relief": parseFloat(tableData[id]?.ssnit_relief)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "taxable_income": parseFloat(tableData[id]?.taxable_income)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "income_tax": parseFloat(tableData[id]?.income_tax)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString(),
                  "payroll_month": tableData[id]?.payroll_month,
                  "payroll_year": tableData[id]?.payroll_year,
                  "employee_name": tableData[id]?.employee?.employee_name,
                  "employee_phone": tableData[id]?.employee?.employee_phone,
                  "employee_email": tableData[id]?.employee?.employee_email,
                  "employee_id": tableData[id]?.employee?.id,
                  "employee_company_id": tableData[id]?.employee?.company,
                  "action": `<a href= ${'/payroll/salary/'}${tableData[id]?.payrollID} > View </a> <br /> <a> Edit </a>`
                }
              })
            return transformData;
        }
        return

    }).catch(function (error) {

        if (error.response) {
            // // console.log("==");
            /*
            * The request was made and the server responded with a
            * status code that falls out of the range of 2xx
            */

        } else if (error.request) {
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
    
    return {
        "list": dataSource
    }
}

