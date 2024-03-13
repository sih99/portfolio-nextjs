import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export type TagProps = {
  text: string;
  className?: string;
  color?: string;
};

const Tag = ({ className, text, color }: TagProps) => {
  return (
    <div
      className={`${cx("tag")} ${className || ""}`}
      style={{
        backgroundColor: color || undefined,
      }}
    >
      {text}
    </div>
  );
};

export default Tag;
