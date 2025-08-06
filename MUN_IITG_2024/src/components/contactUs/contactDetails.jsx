import callImg from '../../assets/contactUs/Call.png';
import mailImg from '../../assets/contactUs/Mail.png';
import locationImg from '../../assets/contactUs/Location.png';
import DisplayDetails from './displayDetails';

const ContactDetails = () => {
    const details = [
        [callImg, 'Call us', 'tel', ['8089205831', '9381843556']],
        [mailImg, 'Mail us', 'mailto', ['iitgmun@alcheringa.in']],
        [locationImg, 'Our location', 'location', ['Conference Hall, IIT Guwahati,', 'North Guwahati, Guwahati,', 'Assam 781039']],
    ];

    return (
        <div className='flex flex-col justify-between h-full'>
            {
                details.map(([imgLink, title, type, detailsArr]) => (
                    <DisplayDetails key={title} imgLink={imgLink} type={type} title={title} detailsArr={detailsArr} />
                ))
            }
        </div>
    );
}

export default ContactDetails;
