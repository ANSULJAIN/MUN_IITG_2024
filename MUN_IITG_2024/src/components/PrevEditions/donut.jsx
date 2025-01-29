import styles from './timeline.module.css'
import TimelineModal from './timelineModal';
import timelineData from '../../data/timelineData'
import arrow from '../../assets/prevEditions/arrow.svg'


const DonutDesign = () => {
    return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Big Donut */}
        <div className="relative flex items-center justify-center w-72 h-72 bg-red-700 rounded-full">
            <div className="flex items-center justify-center w-44 h-44 bg-white rounded-full shadow-lg">
            <div className="text-center">
                <h1 className="text-3xl font-bold">2025</h1>
                <p className="text-sm font-semibold">EDITION XVII</p>
            </div>
            </div>
        </div>
    
        {/* Small Bubbles */}
        <div className="flex justify-center gap-12 mt-8">
            {/* Left Bubble */}
            <div className="flex flex-col items-center relative" style={{ top: '-10px' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full shadow-lg">
                <span className="text-white text-sm font-bold">💰</span>
            </div>
            <p className="mt-2 text-teal-700 font-semibold">UNGA ECOFIN</p>
            </div>
    
            {/* Center Bubble */}
            <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg">
                <span className="text-white text-sm font-bold">🌍</span>
            </div>
            <p className="mt-2 text-blue-700 font-semibold">UNGA DISEC</p>
            </div>
    
            {/* Right Bubble */}
            <div className="flex flex-col items-center relative" style={{ top: '-10px' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full shadow-lg">
                <span className="text-white text-sm font-bold">🦁</span>
            </div>
            <p className="mt-2 text-yellow-700 font-semibold">Lok Sabha</p>
            </div>
        </div>
        </div>
);
};

export default DonutDesign;