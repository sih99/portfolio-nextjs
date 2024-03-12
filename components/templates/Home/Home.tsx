import { useState } from "react";
import Banner from "../../HomeComponents/Banner";
import { CommercialProjects, Layout } from "../../organisms";
import { Sidebar } from "@/components/organisms";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const cx = classNames.bind(styles);

const Home = () => {
  const [nav, setNav] = useState<string>("about");
  return (
    <main className={cx("home")}>
      <Sidebar />
      <div className={cx("main-content")}>
        <nav className={cx("navbar")}>
          <ul className={cx("navbar-list")}>
            <li className="navbar-item">
              <button
                className={cx("navbar-link", {
                  active: nav === "about",
                })}
                data-nav-link
                onClick={() => setNav("about")}
              >
                About
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={cx("navbar-link", {
                  active: nav === "resume",
                })}
                data-nav-link
                onClick={() => setNav("resume")}
              >
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={cx("navbar-link", {
                  active: nav === "portfolio",
                })}
                data-nav-link
                onClick={() => setNav("portfolio")}
              >
                Portfolio
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={cx("navbar-link", {
                  active: nav === "blog",
                })}
                data-nav-link
                onClick={() => setNav("blog")}
              >
                Blog
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={cx("navbar-link", {
                  active: nav === "contact",
                })}
                data-nav-link
                onClick={() => setNav("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <article className={cx("article")}>
          {nav === "about" && <About />}
          {nav === "portfolio" && <Portfolio />}
          {nav === "resume" && <Resume />}
          {nav === "blog" && <Blog />}
          {nav === "contact" && <Contact />}
        </article>
      </div>
    </main>
  );
};

export default Home;
