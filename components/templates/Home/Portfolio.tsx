/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { Tag } from "@/components/atoms";
import { COLOR_PALETTES } from "@/constants";

const cx = classNames.bind(styles);

type Item = {
  name: string;
  category: string;
  techs: string[];
  image: string;
  company: string;
  companyUrl?: string;
};

export type PortfolioProps = {
  className?: string;
};

const Portfolio = ({ className }: PortfolioProps) => {
  const [filter, setFilter] = useState<string>("all");

  const totalItems: Item[] = useMemo(() => {
    return [
      {
        name: "레터웍스",
        category: "web-development",
        techs: ["Next.js", "ReactJS", "Typescript", "Tailwind CSS", "MongoDB", "AWS"],
        image: "/images/letrworks.png",
        company: "Twigfarm",
        companyUrl: "https://www.twigfarm.net/",
      },
      {
        name: "지콘스튜디오",
        category: "web-development",
        techs: ["MeteorJS", "ReactJS", "MongoDB", "AWS", "Material-UI"],
        image: "/images/gconstudio.png",
        company: "Twigfarm",
        companyUrl: "https://www.twigfarm.net/",
      },
    ];
  }, []);

  const [items, setItems] = useState<Item[]>(totalItems);

  const categoryLabels = {
    "web-development": "Web development",
    "mobile-apps": "Mobile Apps",
  };

  useEffect(() => {
    if (filter === "all") {
      setItems(totalItems);
    } else {
      setItems(totalItems.filter((item) => item.category === filter));
    }
  }, [filter, totalItems]);

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
          {items.map((item, i) => {
            const { name, category, company, techs, image, companyUrl } = item;
            return (
              <li className={`${cx("project-item")}`} key={i}>
                <a href="#">
                  <figure className={`${cx("project-img")}`}>
                    {/* <div className="project-item-icon-box">
      <ion-icon name="eye-outline"></ion-icon>
    </div> */}

                    <img src={image} alt={name} />
                  </figure>
                </a>

                <div className="flex flex-col ml-[10px] gap-[6px]">
                  <div className="flex flex-col gap-[3px]">
                    <h3 className={`${cx("project-title")}`}>
                      {name}{" "}
                      <a className={`${cx("project-company")}`} href={companyUrl || ""} target="_blank" rel="noreferrer">
                        {company}
                      </a>
                    </h3>
                    <p className={`${cx("project-category")}`}>{categoryLabels[category]}</p>
                  </div>
                  <div className="flex gap-[3px] flex-wrap ">
                    {techs.map((tech, i) => {
                      const colorIndex = i % 3;

                      return (
                        <Tag
                          text={tech}
                          key={i}
                          color={
                            (colorIndex == 0 && "#EEF5FF") ||
                            // (colorIndex === 1 && "#F0DBAF") ||
                            (colorIndex === 2 && "#86B6F6") ||
                            // (colorIndex === 3 && "#7ED7C1") ||
                            // (colorIndex === 4 && "#FFE6E6") ||
                            (colorIndex === 1 && "#B4D4FF")
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
