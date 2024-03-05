import Banner from "../../HomeComponents/Banner";
import { CommercialProjects, Layout } from "../../organisms";
import { Sidebar } from "@/components/organisms";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx("home")}>
      <Sidebar />
      <div className={cx("main-content")}>
        <article className={cx("article", "active")}></article>
      </div>
    </main>
  );
};

export default Home;
