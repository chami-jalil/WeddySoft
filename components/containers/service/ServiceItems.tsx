import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/shape/service-two-item-shape.png";
import Two from "@/public/images/service/database-security.webp";
import Three from "@/public/images/service/it-consultancy.webp";
import Four from "@/public/images/service/app-development.webp";
import Five from "@/public/images/service/cyber-security.webp";
import Six from "@/public/images/service/uiux-design.webp";
import Seven from "@/public/images/service/it-management.webp";
import Eight from "@/public/images/icon/service-two-icon1.png";
import Nine from "@/public/images/icon/service-two-icon2.png";
import Ten from "@/public/images/icon/service-two-icon3.png";
import Eleven from "@/public/images/icon/service-two-icon4.png";
import Twelve from "@/public/images/icon/service-two-icon5.png";
import Thirteen from "@/public/images/icon/service-two-icon6.png";

const ServiceItems = () => {
  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Two} alt="Database Security" />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eight} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Database Security
                  </Link>
                </h4>
                <p>
                  We keep your databases secure and protected, ensuring your data is safe from unauthorized access and threats.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Three} alt="IT Consultancy" />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Nine} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    IT Consultancy
                  </Link>
                </h4>
                <p>
                  Our IT consultancy services help you make smart technology decisions and optimize your business operations.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Four} alt="App Development" />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    App Development
                  </Link>
                </h4>
                <p>
                  We develop custom mobile and web applications tailored to your business needs, delivering high performance and reliability.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Five} alt="Cyber Security" />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eleven} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Cyber Security
                  </Link>
                </h4>
                <p>
                  Our cyber security solutions safeguard your business from digital threats and keep your information secure.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Six} alt="UI/UX Design" />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Twelve} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    UI/UX Design
                  </Link>
                </h4>
                <p>
                  We design user-friendly and visually appealing interfaces to enhance your customers’ experience and engagement.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Seven} alt="IT Management" />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Thirteen} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    IT Management
                  </Link>
                </h4>
                <p>
                  We manage your IT systems efficiently, keeping everything running smoothly and securely for your business.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
