import React from 'react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="relative w-52 h-64 rounded-lg overflow-hidden group cursor-pointer mx-3 my-5">
      {/* Image container */}
      <div className="w-full h-full">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl text-white font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{name}</h3>
        <p className="text-orange-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;