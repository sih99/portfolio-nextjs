import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

export type AboutProps = {
  className?: string;
};

const About = ({ className }: AboutProps) => {
  return (
    <div className={`${className} flex flex-col ${cx("fade")}`}>
      <header>
        <h2 className={`${cx("h2")} ${cx("article-title")}`}>About me</h2>
      </header>
    </div>
  );
};

export default About;
