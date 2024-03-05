import { ChevronDown, MailOutline, PhonePortraitOutline, CalendarOutline, LocationOutline, LogoFacebook, LogoGithub } from "react-ionicons";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

export type SidebarProps = {
  horizontal?: boolean;
  size?: "small" | "medium" | "large";
};

const Sidebar = ({ horizontal, size }: SidebarProps) => {
  return (
    <aside className={`${cx("sidebar", "active")} ${horizontal && "horizontal"} ${size}`} data-sidebar>
      <div className={`${cx("sidebar-info")}`}>
        <figure className={`${cx("avatar-box")}`}>
          <Image src="/images/yuta-okkotsu.jpeg" alt="" className={`${cx("image")}`} width={150} height={150} />
        </figure>

        <div className={`${cx("info-content")}`}>
          <h1 className={`${cx("name")}`} title="홍성인">
            홍성인
          </h1>
          <p className={`${cx("title")}`}>Web developer</p>
        </div>

        {/* <button className={`${cx("info_more-btn")}`} data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDown />
        </button> */}
      </div>

      <div className={`${cx("sidebar-info_more")}`}>
        <div className={`${cx("separator")}`}></div>
        <ul className={`${cx("contacts-list")}`}>
          <li className={`${cx("contact-item")}`}>
            <div className={`${cx("icon-box")}`}>
              <MailOutline color={"var(--silver)"} width={"18px"} height={"18px"} />
            </div>

            <div className={`${cx("contact-info")}`}>
              <p className={`${cx("contact-title")}`}>Email</p>

              <a href="mailto:hongsungin92@gmail.com" className={`${cx("contact-link")}`}>
                hongsungin92@gmail.com
              </a>
            </div>
          </li>

          <li className={`${cx("contact-item")}`}>
            <div className={`${cx("icon-box")}`}>
              <PhonePortraitOutline color={"var(--silver)"} width={"18px"} height={"18px"} />
            </div>

            <div className={`${cx("contact-info")}`}>
              <p className={`${cx("contact-title")}`}>Phone</p>

              <a href="tel:01025074232" className={`${cx("contact-link")}`}>
                010-2507-4232
              </a>
            </div>
          </li>

          <li className={`${cx("contact-item")}`}>
            <div className={`${cx("icon-box")}`}>
              <CalendarOutline color={"var(--silver)"} width={"18px"} height={"18px"} />
            </div>

            <div className={`${cx("contact-info")}`}>
              <p className={`${cx("contact-title")}`}>Birthday</p>

              <time dateTime="1992-09-09" className={`${cx("contact-link")}`}>
                September 9, 1992
              </time>
            </div>
          </li>

          <li className={`${cx("contact-item")}`}>
            <div className={`${cx("icon-box")}`}>
              <LocationOutline color={"var(--silver)"} width={"18px"} height={"18px"} />
            </div>

            <div className={`${cx("contact-info")}`}>
              <p className={`${cx("contact-title")}`}>Location</p>

              <address
                className={`${cx("contact-link")}`}
                style={{
                  fontStyle: "normal",
                }}
              >
                서울 구로구 구로동
              </address>
            </div>
          </li>
        </ul>

        <div className={cx("separator")}></div>
        <ul className={cx("social-list")}>
          <li className={cx("social-item")}>
            <a href="https://github.com/sih99" target="_blank" className={cx("social-link")} rel="noreferrer">
              <LogoGithub width={"18px"} height={"18px"} color={"currentcolor"} />
            </a>
          </li>
          {/* 
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
