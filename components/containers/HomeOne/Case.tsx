import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/icon/section-title.png";
import { projects } from "@/data/projects";

const Case = () => {
  return (
    <section className="case-area pt-120 pb-120" id="case-section">
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Image className="me-1" src={One} alt="" />
              Featured Work
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Featured Work
            </h2>
            <p className="mt-3 mb-0" data-aos="fade-left" data-aos-delay="300">
              Explore some of the digital products and platforms we&apos;ve
              designed and developed.
            </p>
          </div>
          <Link
            href="/case"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            View All Work <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={project.slug}>
              <div className="case__item">
                <div className="image case__image">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={1370}
                    height={1600}
                  />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">
                    {project.category}
                  </span>
                  <h3>
                    <Link
                      href={`/case/${project.slug}`}
                      className="text-white primary-hover"
                    >
                      {project.title}
                    </Link>
                  </h3>
                </div>
                <Link href={`/case/${project.slug}`} className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Case;
