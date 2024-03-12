import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

export type BlogProps = {
  className?: string;
};

const Blog = ({ className }: BlogProps) => {
  return (
    <div className={`${className} flex flex-col ${cx("fade")}`}>
      <header>
        <h2 className={`${cx("h2")} ${cx("article-title")}`}>Blog</h2>
      </header>
    </div>
  );
};

export default Blog;
