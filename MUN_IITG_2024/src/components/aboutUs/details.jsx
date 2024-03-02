import linkedinLogo from '../../assets/aboutUs/linkedinLogo.svg'
import instaLogo from '../../assets/aboutUs/instaLogo.svg'

const Details = ({name,position,socialMedia}) => {
    return ( 
        <div className="text-left ml-2 mt-4 overflow-hidden w-full mr-10">
            <p className="text-3xl font-extrabold font-raleway m-0 text-[#60E1A4] hyphens-auto">{name}</p>
            <p className="text-xl text-grey font-light tracking-wider m-0 text-[#60e1a5ca] hyphens-auto">{position}</p>
            <p className='m-0 mt-1'>
                <a className='mr-2' href={`${socialMedia.linkedin}`} target='_blank'><img className='w-8' src={linkedinLogo} alt="linkedinLogo" /></a>
                <a className='mr-2' href={`${socialMedia.instagram}`} target='_blank'><img className='w-8' src={instaLogo} alt="instagramLogo" /></a>
            </p>
        </div>
     );
}
 
export default Details;