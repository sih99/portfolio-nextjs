import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

export type ContactProps = {
  className?: string;
};

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={`${className} flex flex-col ${cx("fade")}`}>
      <header>
        <h2 className={`${cx("h2")} ${cx("article-title")}`}>Contact</h2>
      </header>
    </div>
  );
};

export default Contact;
