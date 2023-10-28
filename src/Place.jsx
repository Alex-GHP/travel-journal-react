import React from "react";

function Place(props) {
  return (
    <div className="flex m-10 border-b-2 pb-8">
      <img className="h-64 w-64" src={`${props.imageUrl}`} />
      <div className="m-6">
        <div className="flex">
            <img className="w-4" src="/location-pin.svg" />
            <p className="text-1xl uppercase text-[#2B283A] tracking-widest ml-1">{props.location}</p>
            <a className="ml-3 text-[#918E9B] underline-offset-8" href={`${props.googleMapsUrl}`}>View on Google Maps</a>
        </div>
        <h1 className="text-4xl mt-2 mb-4 font-bold text-[#2B283A]">{props.title}</h1>
        <p className="font-bold mb-2 text-[#2B283A]">{props.startDate} - {props.endDate}</p>
        <p className="text-[#2B283A]">{props.description}</p>
      </div>
    </div>
  );
}

export default Place;
