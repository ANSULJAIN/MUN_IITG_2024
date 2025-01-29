import Details from "./details";

const TeamCard = ({ name, position, socialMedia, img }) => {
  return (
    <div className="mt-16 mb-[-50px] lg:[&>*:nth-child(even)]:opacity-0 [&>*:nth-child(even)]:hover:opacity-100 lg:[&>*:nth-child(odd)]:grayscale [&>*:nth-child(odd)]:origin-bottom [&>*:nth-child(odd)]:transition-all [&>*:nth-child(odd)]:ease-in-out [&>*:nth-child(odd)]:delay-150 [&>*:nth-child(odd)]:duration-300 lg:[&>*:nth-child(odd)]:hover:scale-[120%] [&>*:nth-child(odd)]:hover:grayscale-0 ">
      <div className="w-[80%] flex flex-col justify-center">
        <div className="w-[80%] m-auto sm:w-full flex flex-col h-[250px] items-center justify-end h-">
          <img className="w-[120px] sm:w-[261px] " src={img} />
        </div>
        {/* <hr className="w-[90%] h-px " /> */}
      </div>
      <div className="transition-all ease-in-out delay-150 duration-300 w-full">
        <Details name={name} position={position} socialMedia={socialMedia} />
      </div>
    </div>
  );
};

export default TeamCard;