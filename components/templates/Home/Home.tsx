import Banner from "../../HomeComponents/Banner";
import { CommercialProjects, Layout } from "../../organisms";
import { Sidebar } from "@/components/organisms";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import About from "./About";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx("home")}>
      <Sidebar />
      <div className={cx("main-content")}>
        <nav className={cx("navbar")}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>
                About
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Portfolio
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Blog
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <article className={cx("article")}>
          <About />
        </article>
      </div>
    </main>
  );
};

export default Home;
