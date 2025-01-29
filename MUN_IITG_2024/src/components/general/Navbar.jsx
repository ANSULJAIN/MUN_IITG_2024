import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import { useState } from 'react';
import './Navbar.css'
import mun from './Group 63.svg'
import alcher from './Mask group.svg'
//  export default function Navbar (){

//   const [activeItem ,setActiveItem] = useState('home');
//   return (
//     // <nav className="bg-white border-gray-200 rounded-full dark:bg-gray-900">
//   <div className="z-2 fixed left-1/2 transform -translate-x-1/2 flex flex-wrap items-center rounded-full justify-center mx-auto mt-2"> 
 
//     <div className="  items-center justify-center hidden w-full md:flex md:w-auto md:order-1 mt-2  " id="navbar-cta"> {/* Add mt-2 to align with the margin */}
//       <ul style={{ listStyleType: 'none' }}  className="flex flex-col justify-center font-medium md:p-0 border border-gray-100 rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li
//         className={activeItem === 'home' ? 'active' : 'deactive'} 
//         onClick={() => setActiveItem('home')}>
//           <a href="/" className="block py-2 px-3 md:p-0 text-grey bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home
// </a>
//         </li >
//         <li   className={activeItem === 'About' ? 'active' : 'deactive'} 
//         onClick={() => setActiveItem('About')}>
//           <a href="/AboutUs" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
//         </li>
//         <li   className={activeItem === 'Previous Editions' ? 'active' : 'deactive'} 
//         onClick={() => setActiveItem('Previous Editions')}>
//           <a href="/PreviousEditions" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Previous Editions</a>
//         </li>
//         <li   className={activeItem === 'Services' ? 'active' : 'deactive'} 
//         onClick={() => setActiveItem('Services')}>
//           <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//         </li>
//         <li   className={activeItem === 'Contact' ? 'active' : 'deactive'} 
//         onClick={() => setActiveItem('Contact')}>
//           <a href="/ContactUs" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// // </nav>

//   );
// }
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  return (
    // <div className="z-2 fixed left-1/2 transform -translate-x-1/2 flex flex-wrap items-center rounded-full justify-center mx-auto mt-2">
    //   <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 mt-2" id="navbar-cta">
    //     <ul style={{ listStyleType: 'none' }} className="flex flex-col justify-center font-medium md:p-0 border border-gray-100 rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //       <li>
    //         <NavLink to="/" style={{textDecoration:'none'}}className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'home' ? 'active' : ''}`} onClick={() => setActiveItem('home')}>Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/AboutUs"
    //         style={{textDecoration:'none'}} className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'About' ? 'active' : ''}`} onClick={() => setActiveItem('About')}>About Us</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/PreviousEditions" 
    //         style={{textDecoration:'none'}}className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'Previous Editions' ? 'active' : ''}`} onClick={() => setActiveItem('Previous Editions')}>Previous Editions</NavLink>
    //       </li>
    //       {/* <li>
    //         <NavLink to="/Service"
    //         style={{textDecoration:'none'}} className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'Services' ? 'active' : ''}`} onClick={() => setActiveItem('Services')}>Services</NavLink>
    //       </li> */}
    //       <li>
    //         <NavLink to="/ContactUs" 
    //         style={{textDecoration:'none'}}className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'Contact' ? 'active' : ''}`} onClick={() => setActiveItem('Contact')}>Contact</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <>
    <img src={mun} alt="" className="munlogos"/>
   <a href="https://alcheringa.in/home"> <img src={alcher} alt="" className="alcherlogo"/></a>
    <div className="z-2 fixed left-1/2 transform -translate-x-1/2 flex flex-wrap items-center rounded-full justify-center mx-auto mt-2.5">
  <div className="w-full md:w-auto md:order-1 mt-2 md:flex" id="navbar-cta">
    <ul style={{ listStyleType: 'none' }} className="flex flex-col md:flex-row justify-center font-medium md:p-0  rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
      <li>
        <NavLink to="/" style={{ textDecoration: 'none'}} className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'home' ? 'active' : 'unactive'}`} onClick={() => setActiveItem('home')}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" style={{ textDecoration: 'none' }} className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'About' ? 'active' : 'unactive'}`} onClick={() => setActiveItem('About')}>About Us</NavLink>
      </li>
      <li>
        <NavLink to="/PreviousEditions" style={{ textDecoration: 'none' }} className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'Previous Editions' ? 'active' : 'unactive'}`} onClick={() => setActiveItem('Previous Editions')}>Previous Editions</NavLink>
      </li>
      <li>
        <NavLink to="/ContactUs" style={{ textDecoration: 'none' }} className={`block py-2 px-3 md:p-0 rounded ${activeItem === 'Contact' ? 'active' : 'unactive'}`} onClick={() => setActiveItem('Contact')}>Contact</NavLink>
      </li>
    </ul>
  </div>
</div>
</>
  );
}



