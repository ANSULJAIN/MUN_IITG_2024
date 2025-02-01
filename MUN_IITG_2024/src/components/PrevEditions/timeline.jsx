import styles from './timeline.module.css'
import TimelineModal from './timelineModal';
import timelineData from '../../data/timelineData'
import arrow from '../../assets/prevEditions/arrow.svg'


const Timeline = () => {
    
    return (
        <div className='timeline'>
            p
            <img src="src/components/PrevEditions/photoes/a.png" alt="MUN Editions" className="img1"
            style={{ width: '100vw', height: 'auto' }} ></img>
            <img src="src/components/PrevEditions/photoes/b.png" style={{ width: '100vw', height: 'auto' }}/>
            <img src="src/components/PrevEditions/photoes/c.png" style={{ width: '100vw', height: 'auto' }}/>
            <img src="src/components/PrevEditions/photoes/d.png" style={{ width: '100vw', height: 'auto' }}/>
            <img src="src/components/PrevEditions/photoes/e.png" style={{ width: '100vw', height: 'auto' }}/>
    
        </div>
    );
};
export default Timeline;


// <div className="bg-white-100 min-h-screen flex justify-center items-center p-24 m-4">
// <div className="max-w-5xl w-full grid grid-cols-2 gap-8 items-center"> 
//     {/* 2022 Edition */}
//     <div
//     className="w-80 h-80 flex flex-col items-center justify-center rounded-full font-bold text-center"
//     style={{ backgroundColor: '#FFE3BC' }}
//     >
//     <span className="text-8xl">2022</span>
//     <span className="text-xl mt-2">EDITION XIV</span>
//     </div>

//     <div>
//     {/* One Hand One Law */}
//     <div className="mb-9 flex items-center">
//     <div className="flex flex-col items-center mr--2">
//         {/* Image instead of gray background */}
//         <div className="w-32 h-32 rounded-full mb-2 mr--3 overflow-hidden">
//         <img
//             src="loksabha.png"
//             alt="Lok Sabha"
//             className="w-full h-full object-cover"
//         />
//         </div>
//         {/* Bigger font for "Lok Sabha" */}
//         <p className="text-lg mr--3 font-extrabold text-yellow-700">Lok Sabha</p>
//     </div>
//     <div className="text-left">
//         {/* Title and description */}
//         <h3 className="text-xl font-extrabold text-yellow-700">ONE HAND ONE LAW</h3>
//         <p className="text-base text-gray-700">
//         One land, one law" encapsulates the principle of uniform legal framework across a nation, ensuring equality and consistency in governance, rights, and justice for all citizens, irrespective of regional or cultural differences!
//         </p>
//     </div>
//     </div>


//     {/* The Cyber Crisis */}
//     <div className="mb-9 flex items-center">
//     <div className="flex flex-col items-center mr--2">
//         {/* Image instead of gray background */}
//         <div className="w-32 h-32 rounded-full mb-2 mr--3 overflow-hidden">
//         <img
//             src="loksabha.png"
//             alt="Lok Sabha"
//             className="w-full h-full object-cover"
//         />
//         </div>
//         {/* Bigger font for "Lok Sabha" */}
//         <p className="text-lg mr--3 font-extrabold text-yellow-700">UNGA</p>
//     </div>
//     <div className="text-left">
//         {/* Title and description */}
//         <h3 className="text-xl font-extrabold text-yellow-700">THE CYBER CRISIS</h3>
//         <p className="text-base text-gray-700">
//         The cyber crisis represents the escalating threats posed by malicious cyber activities, including hacking, data breaches, and cyber warfare, endangering digital infrastructure, privacy, and national security!</p>
//     </div>
//     </div>
//     {/* <div className="flex items-center">
//         <div className="flex flex-col items-center mr-4">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mb-2"></div> 
//         <p className="text-sm font-bold text-blue-700">UNGA</p>
//         </div>
//         <div className="text-left">
//         <h3 className="text-lg font-bold text-blue-700">THE CYBER CRISIS</h3>
//         <p className="text-sm text-gray-700">
        
//         </p>
//         </div>
//     </div> */}
//     </div>

//     {/* 2023 Edition */}
//     <div className="order-last bg-orange-300 w-48 h-48 flex items-center justify-center rounded-full text-2xl font-bold">
//     2023<br />EDITION XV
//     </div>
//     <div>
//     {/* Redefining Family Laws */}
//     <div className="mb-6 flex items-center">
//         <div className="text-right mr-4">
//         <h3 className="text-lg font-bold text-yellow-700">REDEFINING FAMILY LAWS</h3>
//         <p className="text-sm text-gray-700">
//             Reforming legal frameworks for evolving societal norms.
//         </p>
//         </div>
//         <div className="flex flex-col items-center">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mb-2"></div> 
//         <p className="text-sm font-bold text-yellow-700">Lok Sabha</p>
//         </div>
//     </div>

//     {/* Canvassing the Crisis */}
//     <div className="mb-6 flex items-center">
//         <div className="text-right mr-4">
//         <h3 className="text-lg font-bold text-blue-700">CANVASSING THE CRISIS</h3>
//         <p className="text-sm text-gray-700">
//             Engaging with affected communities to understand challenges.
//         </p>
//         </div>
//         <div className="flex flex-col items-center">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mb-2"></div> 
//         <p className="text-sm font-bold text-blue-700">UNGA ECOFIN</p>
//         </div>
//     </div>

//     {/* Deliberating Disarmament */}
//     <div className="flex items-center">
//         <div className="text-right mr-4">
//         <h3 className="text-lg font-bold text-blue-700">DELIBERATING DISARMAMENT</h3>
//         <p className="text-sm text-gray-700">
//             Advocating for arms control and international cooperation.
//         </p>
//         </div>
//         <div className="flex flex-col items-center">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mb-2"></div> 
//         <p className="text-sm font-bold text-blue-700">UNGA DISEC</p>
//         </div>
//     </div>
//     </div>

//     {/* 2024 Edition */}
//     <div className="bg-orange-300 w-48 h-48 flex items-center justify-center rounded-full text-2xl font-bold">
//     2024<br />EDITION XVI
//     </div>
//     <div>
//     {/* Election Evolution */}
//     <div className="mb-6 flex items-center">
//         <div className="flex flex-col items-center mr-4">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mb-2"></div> 
//         <p className="text-sm font-bold text-yellow-700">Lok Sabha</p>
//         </div>
//         <div className="text-left">
//         <h3 className="text-lg font-bold text-yellow-700">ELECTION EVOLUTION</h3>
//         <p className="text-sm text-gray-700">
//             Strengthening Indian democracy through meaningful discussions.
//         </p>
//         </div>
//     </div>

//     {/* Battles Below */}
//     <div className="mb-6 flex items-center">
//         <div className="flex flex-col items-center mr-4">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mb-2"></div> 
//         <p className="text-sm font-bold text-blue-700">UNOC</p>
//         </div>
//         <div className="text-left">
//         <h3 className="text-lg font-bold text-blue-700">BATTLES BELOW</h3>
//         <p className="text-sm text-gray-700">
//             Addressing global water pollution and marine ecosystem issues.
//         </p>
//         </div>
//     </div>
//     </div>
// </div>
// </div>
