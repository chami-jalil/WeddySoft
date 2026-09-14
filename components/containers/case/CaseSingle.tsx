import Image from "next/image";
import type { Project } from "@/data/projects";

type CaseSingleProps = {
  project: Project;
};

const CaseSingle = ({ project }: CaseSingleProps) => {
  return (
    <section className="case-single-area pt-120 pb-120">
      <div className="container">
        <div className="case-single__item">
          <div className="image">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1170}
              height={650}
            />
          </div>
          <h3 className="case-single__title mt-40 mb-20">{project.title}</h3>
          <p className="mb-10">{project.credit}</p>
          <p>{project.summary}</p>
          <ul className="case-date py-4 bor-top bor-bottom mt-40">
            {project.facts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}:</span> {fact.value}
              </li>
            ))}
          </ul>
          <h3 className="case-single__title mt-40 mb-30">Project Overview</h3>
          <p>{project.overview}</p>
          {project.links.length > 0 && (
            <div className="mt-40">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="btn-one me-3 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              ))}
            </div>
          )}
        </div>
        {project.gallery.length > 0 && (
          <div className="row g-4 mt-10">
            {project.gallery.map((image) => (
              <div className="col-md-6" key={image.src + image.alt}>
                <div className="image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={760}
                    height={900}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseSingle;
