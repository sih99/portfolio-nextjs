import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

export type ResumeProps = {
  className?: string;
};

const Resume = ({ className }: ResumeProps) => {
  return (
    <div className={`${className} flex flex-col ${cx("fade")}`}>
      <header>
        <h2 className={`${cx("h2")} ${cx("article-title")}`}>Resume</h2>
      </header>
    </div>
  );
};

export default Resume;
