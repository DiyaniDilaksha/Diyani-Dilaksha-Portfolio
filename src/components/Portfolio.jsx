import { useState } from "react";
import Portfolio_Data from "../assets/js/portfolio_data";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedWorks = showAll ? Portfolio_Data : Portfolio_Data.slice(0, 3);

  return (
    <section id="portfolio" className="portfolio py-5">
      <div className="container">
        <div className="portfolio-title text-center mb-5">
          <h1 className="mb-3 text-white mt-5">My Latest Work</h1>
        </div>
        <div className="row g-4">
          {displayedWorks.map((work, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <img
                src={work.w_img}
                alt={`Work ${index + 1}`}
                className="img-fluid rounded shadow-sm same-size-img"
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <a
            href="#"
            className="connect-btn d-flex align-items-center text-decoration-none px-4 fs-5"
            onClick={(e) => {
              e.preventDefault();
              setShowAll(!showAll);
            }}
          >
            {showAll ? "Show Less" : "Show More"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
