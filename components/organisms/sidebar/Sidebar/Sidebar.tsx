import { ChevronDown, MailOutline, PhonePortraitOutline, CalendarOutline, LocationOutline, LogoFacebook, LogoGithub } from "react-ionicons";
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
          <img src="images/yuta-okkotsu.jpeg" />
        </figure>

        <div className={`${cx("info-content")}`}>
          <h1 className={`${cx("name")}`} title="홍성인">
            홍성인
          </h1>

          <p className={`${cx("title")}`}>Web developer</p>
        </div>

        <button className={`${cx("info_more-btn")}`} data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDown />
        </button>
      </div>

      <div className={`${cx("sidebar-info_more")}`}>
        <div className={`${cx("separator")}`}></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhonePortraitOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <LogoGithub />
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
