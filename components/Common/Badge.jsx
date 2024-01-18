import React from "react";

const Badge = ({ title }) => {
  return (
    <span
      className="pt-[6px] pb-[4px] px-3 text-xs text-Gray900  rounded-full bg-[#4CB9E7]"
      style={{
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {title}
    </span>
  );
};

export default Badge;
