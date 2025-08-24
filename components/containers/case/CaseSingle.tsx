import Image from "next/image";
import One from "@/public/images/case/case-details-image1.jpg";
import Two from "@/public/images/case/case-details-image2.jpg";
import Three from "@/public/images/case/case-details-image3.jpg";

const CaseSingle = () => {
  return (
    <section className="case-single-area pt-120 pb-120">
      <div className="container">
        <div className="case-single__item">
          <div className="image">
            <Image src={One} alt="Image" priority />
          </div>
          <h3 className="case-single__title mt-40 mb-30">
            Mobile App Development Solution
          </h3>
          <p>
            Our mobile app development solution focused on creating a user-friendly and efficient platform for our client. We worked closely with the client to understand their needs and delivered a product that exceeded expectations. The project involved careful planning, design, and implementation to ensure a smooth experience for users. Our team paid attention to every detail, from initial concept to final launch, making sure the app was reliable and easy to use.
          </p>
          <ul className="case-date py-4 bor-top bor-bottom mt-40">
            <li>
              <span>Completed Date:</span> 23-12-2023
            </li>
            <li>
              <span>Category:</span> Technology
            </li>
            <li>
              <span>Client:</span> Robert Fox
            </li>
            <li>
              <span>Location:</span> fot kde, USA
            </li>
          </ul>
          <h3 className="case-single__title mt-40 mb-30">Our Challenge</h3>
          <p>
            The main challenge was to develop an app that could handle complex requirements while remaining simple for users. We needed to integrate advanced features without compromising performance or usability. Our team overcame these challenges by using the latest technology and best practices, ensuring the app was both powerful and intuitive.
          </p>
          <div className="case-challenge-list mt-30">
            <ul className="case-challenge">
              <li className="mb-3">
                <i className="fa-solid fa-check"></i>Technology Consultancy
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Maintenance And Support
              </li>
            </ul>
            <ul className="case-challenge">
              <li className="mb-3">
                <i className="fa-solid fa-check"></i>We Provide best services
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Requirements Gathering
              </li>
            </ul>
            <ul className="case-challenge">
              <li className="mb-3">
                <i className="fa-solid fa-check"></i>Maintenance And Support
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Technology Consultancy
              </li>
            </ul>
          </div>
          <h3 className="case-single__title mt-40 mb-30">Project Overview</h3>
          <p>
            This project involved designing and building a mobile application tailored to the client’s business goals. We focused on creating a seamless user experience, robust functionality, and strong security. The result was a high-quality app that helped our client reach new customers and improve their operations.
          </p>
        </div>
        <div className="row g-4 mt-10">
          <div className="col-md-6">
            <div className="image">
              <Image src={Two} alt="Image" priority />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <Image src={Three} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSingle;
