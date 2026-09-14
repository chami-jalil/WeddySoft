import Link from "next/link";

const AboutTwo = () => {
  return (
    <section className="about-two-area pt-120" id="about-two">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-10 col-xxl-8">
            <div className="section-header mb-40">
              <h5
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <svg
                  className="me-1"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    y="0.75"
                    width="18.5"
                    height="10.5"
                    rx="5.25"
                    stroke="#3C72FC"
                    strokeWidth="1.5"
                  />
                  <mask id="path-2-inside-1_668_146" fill="white">
                    <path d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
                  </mask>
                  <path
                    d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                    fill="#3C72FC"
                    mask="url(#path-2-inside-1_668_146)"
                  />
                </svg>
                WHO WE ARE
              </h5>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Ensuring Your Success Through Reliable IT Solutions{" "}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                We are dedicated to helping your business succeed with reliable
                IT solutions. Our team combines expertise and innovation to
                deliver results that make a real difference. We focus on
                understanding your needs and providing services that help you
                achieve your goals.
              </p>
            </div>
            <div
              className="about-two__right-item "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Technology Consultancy
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>We Provide best services
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Maintenance And Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Requirements Gathering
                </li>
              </ul>
            </div>
            <div
              className="about__info mt-50 "
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <Link href="/about" className="btn-one">
                About Us <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
