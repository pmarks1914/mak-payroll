import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilEco,
  cilMoney,
  cilPeople,
  cilTransfer,
  cilMediaSkipForward,
  cilTriangle,
  cilReload,
  cilWallet,
  cilDataTransferUp,
  cilUser,
  cilSmilePlus,
  cilSpeedometer,
  cilStar,
  cilTablet, 
  cilLibrary,
  cilControl,
  cilMoodBad,
  cilDataTransferDown,
  cilUserPlus,
  cilHappy,
  cilBasket,
  cilBookmark,
  cilBank,
  cilBuilding,
  cilUserX,
  cilPizza,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'



// catch unavailable urls when user logs into the app
if(["/", "/theme", "/dashboard", `/bulk-pay/item/${window.location.pathname.split("/")[3]}`, `/bulk-pay/item/${window.location.pathname.split("/")[3]}/`, '/payment-link', '/settings', '/settings/user-management', '/settings/support'].includes(window.location.pathname)){
  // 
}
else{
  // console.log(window.location.pathname.split("/")[3])
  // window.location.href = '/404'
}

const account_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavGroup,
    name: 'Payroll',
    items: [
      {
        component: CNavItem,
        name: 'Employee',
        to: '/payroll/employee',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Allowance',
      //   to: '/payroll/allowance',
      //   icon: <CIcon icon={cilEco} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Deduction',
      //   to: '/payroll/deduction',
      //   icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'SSNIT',
      //   to: '/payroll/ssnit',
      //   icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
      // },
      {
        component: CNavItem,
        name: 'Salary',
        to: '/payroll/salary',
        icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Bank',
      //   to: '/payroll/bank',
      //   icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Department',
      //   to: '/payroll/department',
      //   icon: <CIcon icon={cilControl} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Gender',
      //   to: '/payroll/gender',
      //   icon: <CIcon icon={cilUserX} customClassName="nav-icon" />,
      // },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Settings',
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Users',
  //       to: '/settings/users',
  //       icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  //     },
      // {
      //   component: CNavItem,
      //   name: 'Business',
      //   to: '/settings/business',
      //   icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
      // },
  //   ],
  // },
  
]

export default account_nav
