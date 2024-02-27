import React from "react";

export interface ProjectCardProps {
  className?: string;
  data: {
    title: string;
    desc: string;
  };
}

const ProjectCard = ({ className, data }: ProjectCardProps) => {
  return (
    <div
      className={`${className} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl bg-Blue/20`}
      //border-Navy border-[1px]
      // style={{
      //     backgroundImage: `url(images/card-bg.jpg)`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'inherit',
      //     backgroundPosition: 'right',
      //     width: '100%',
      // }}
    >
      <div className="h-full space-y-2 p-8 rounded-xl card_stylings">
        <div className="gap-[4px] flex items-center">
          <img src="images/gcon-favicon-32x32.png" alt="card-bg" className="w-[16px] h-[16px] object-cover rounded-[2px]" />

          <span className="text-DarkGray">{data.title}</span>
        </div>
        <div className="text-sm text-LightGray font-normal">{data.desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
