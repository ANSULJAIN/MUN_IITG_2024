import './footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import munlogo from './footermun.svg';
export default function Footer() {
    return (
        <div className="container-main2">
            <div className="logo_1">
                <img src={munlogo} alt="" className='munlogo2' style={{width: '10vw', height: 'auto'}}></img>
            </div>
            <div className="social">
            <a href='https://www.instagram.com/iitg_mun/' target='_blank' className='no-underline text-[black]'><i className="bi bi-instagram fs-3" style={{ color: "white" }}></i></a>
            <a href='https://www.linkedin.com/company/iitgmun/' target='_blank' className='no-underline text-[black]'><i className="bi bi-linkedin fs-3" style={{ color: "white" }}></i></a>
            <a href='https://www.facebook.com/iitgmun' target='_blank' className='no-underline text-[black]'><i className="bi bi-facebook fs-3" style={{ color: "white" }}></i></a>
            <a href='https://twitter.com/iitg_mun' target='_blank' className='no-underline text-[black]'><i className="bi bi-twitter-x fs-3" style={{ color: "white" }}></i></a>

            </div>
            <p>Designed by Sandeep</p>
            <p>Developed by Kavya Agrawal, Aadi Poddar and Purab Agarwal</p>
            <p>
                Conference Hall, IIT Guwahati
            </p>
            <p>
                Guwahati, Assam-781039
            </p>
        </div>
    );
}
