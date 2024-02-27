import React from "react";

const ProjectCard = ({ className, data }) => {
  return (
    <div
      className={`${className} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}
      // style={{
      //     backgroundImage: `url(images/card-bg.jpg)`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'inherit',
      //     backgroundPosition: 'right',
      //     width: '100%',
      // }}
    >
      <div className="h-full space-y-2 p-8 rounded-xl">
        <div className="text-DarkGray">{data.title}</div>
        <div className="text-sm text-LightGray font-normal">{data.desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
