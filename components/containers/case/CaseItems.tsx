import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const CaseItems = () => {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
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

export default CaseItems;
