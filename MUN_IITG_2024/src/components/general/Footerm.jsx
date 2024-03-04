import './footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import munlogo from './munlogo.png';
export default function Footer() {
    return (
        <div className="container-main">
            <div className="logo_1">
                <img src={munlogo} alt="" className='munlogo' />
               
            </div>
            <div className="social">
            <i class="bi bi-instagram fs-3"></i>
            <i class="bi bi-linkedin fs-3"></i>
            <i class="bi bi-facebook fs-3"></i>
            <i class="bi bi-twitter-x fs-3"></i>

            </div>
            <p>Designed by WXY ans </p>
            <p>Designed by XYZ WXY ans </p>
            <p>
                Conference Hall, IIT Guwahati North
            </p>
            <p>
                Guwahati, North Guwahati, Assam-767040
            </p>
        </div>
    );
}