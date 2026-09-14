import Image from "next/image";
import Link from "next/link";
import Line from "@/public/images/shape/about-line.png";
import Three from "@/public/images/icon/section-title.png";
import Four from "@/public/images/icon/about-icon1.png";
import Five from "@/public/images/icon/about-icon2.png";

const About = () => {
  return (
    <section className="about-area sub-bg pt-120" id="about-section">
      <div
        className="about__shape "
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1500"
      >
        <Image src={Line} alt="" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-10 col-xxl-8">
            <div className="section-header mb-40">
              <h5
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <Image className="me-1" src={Three} alt="" />
                ABOUT WeddySoft
              </h5>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                We Strive to Offer Intelligent Business Solutions
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                We are dedicated to helping businesses grow by providing smart
                and effective solutions. Our team combines expertise and
                innovation to deliver results that make a real difference. We
                focus on understanding your needs and offering services that
                help you succeed.
              </p>
            </div>
            <div
              className="row g-4 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="col-md-6">
                <div className="about__right-item">
                  <div className="icon">
                    <Image src={Four} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="mb-1">Best Services</h4>
                    <p>
                      We deliver outstanding results and reliable support for
                      your business needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about__right-item">
                  <div className="icon">
                    <Image src={Five} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="mb-1">24/7 Call Support</h4>
                    <p>
                      Our team is available around the clock to assist you
                      whenever you need help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="about__info mt-50 "
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <Link href="/about" className="btn-one">
                Explore More{" "}
                <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
