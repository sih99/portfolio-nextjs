import { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { Tag } from "@/components/atoms";
import { COLOR_PALETTES } from "@/constants";

const cx = classNames.bind(styles);

export type PortfolioProps = {
  className?: string;
};

const Portfolio = ({ className }: PortfolioProps) => {
  const [filter, setFilter] = useState<string>("all");

  return (
    <div className={`${className} flex flex-col ${cx("fade")}`}>
      <header>
        <h2 className={`${cx("h2")} ${cx("article-title")}`}>Portfolio</h2>
      </header>
      <section className={`block`}>
        <ul className={`${cx("filter-list")}`}>
          <li className={`${cx("filter-item")}`}>
            <button
              className={`${cx({ active: filter === "all" })}`}
              data-filter-btn
              onClick={() => {
                setFilter("all");
              }}
            >
              All
            </button>
          </li>

          {/* <li className={`${cx("filter-item")}`}>
            <button className={`${cx({ active: filter === "all" })}`} data-filter-btn>
              Web design
            </button>
          </li>*/}

          <li className={`${cx("filter-item")}`}>
            <button
              className={`${cx({ active: filter === "web-development" })}`}
              data-filter-btn
              onClick={() => {
                setFilter("web-development");
              }}
            >
              Web development
            </button>
          </li>

          <li className={`${cx("filter-item")}`}>
            <button
              className={`${cx({ active: filter === "mobile-apps" })}`}
              data-filter-btn
              onClick={() => {
                setFilter("mobile-apps");
              }}
            >
              Mobile Apps
            </button>
          </li>
        </ul>
        <ul className={`${cx("project-list")}`}>
          <li className={`${cx("project-item")}`} data-filter-item data-category="web development">
            <a href="#">
              <figure className={`${cx("project-img")}`}>
                {/* <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div> */}

                <Image src="/images/gconstudio.png" alt="gconstudio" loading="lazy" width={2000} height={1247} />
              </figure>
            </a>

            <div className="flex flex-col ml-[10px] gap-[6px]">
              <div className="flex flex-col gap-[3px]">
                <h3 className={`${cx("project-title")}`}>
                  지콘스튜디오{" "}
                  <a className={`${cx("project-company")}`} href="https://www.twigfarm.net/" target="_blank" rel="noreferrer">
                    Twigfarm
                  </a>
                </h3>
                <p className={`${cx("project-category")}`}>Web development</p>
              </div>
              <div className="flex gap-[3px] flex-wrap ">
                {["ReactJS", "MongoDB", "AWS", "Material-UI", "MeteorJS"].map((tech, i) => {
                  const colorIndex = i % 5;

                  return (
                    <Tag
                      text={tech}
                      key={i}
                      color={
                        (colorIndex == 0 && "#EEF5FF") ||
                        (colorIndex === 1 && "#F0DBAF") ||
                        (colorIndex === 2 && "#86B6F6") ||
                        (colorIndex === 3 && "#7ED7C1") ||
                        (colorIndex === 4 && "#B4D4FF")
                      }
                    />
                  );
                })}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
