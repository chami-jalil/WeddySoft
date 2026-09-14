import Image from "next/image";
import One from "@/public/images/icon/section-title.png";
import Two from "@/public/images/process/process-arry.png";
import Three from "@/public/images/process/discover.webp";
import Four from "@/public/images/process/design.webp";
import Five from "@/public/images/process/deliver.webp";

const Process = () => {
  return (
    <section className="process-area pt-120 pb-120">
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
              <Image className="me-1" src={One} alt="" />
            Work Process
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Our Development Process
          </h2>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="process__item mb-100">
              <div className="process-arry bobble__animation">
                <Image src={Two} alt="arry-icon" />
              </div>
              <div className="process__image">
                <Image src={Three} alt="Discover requirements" />
                <span className="process-number">1</span>
              </div>
              <div className="process__content">
                <h4 className="mt-25 mb-10">Discover</h4>
                <p>
                  We start by understanding your requirements, constraints, and
                  the outcome you need from the website or Android application.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="process__item mb-100">
              <div className="process-arry bobble__animation">
                <Image src={Two} alt="arry-icon" />
              </div>
              <div className="process__image">
                <Image src={Four} alt="Design and prototyping" />
                <span className="process-number">2</span>
              </div>
              <div className="process__content">
                <h4 className="mt-25 mb-10">Design</h4>
                <p>
                  We design and prototype the solution so you can review the
                  approach before we build.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="process__item">
              <div className="process__image">
                <Image src={Five} alt="Deliver the finished solution" />
                <span className="process-number">3</span>
              </div>
              <div className="process__content">
                <h4 className="mt-25 mb-10">Deliver</h4>
                <p>
                  We implement, test, and hand over the working website or
                  Android application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
