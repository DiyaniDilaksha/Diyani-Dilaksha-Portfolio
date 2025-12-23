import Services_Data from "../assets/js/services_data";

const Services = () => {
  return (
    <section id="services" className="services py-5">
      <div className="container">
        <div className="services-title text-center mb-5">
          <h1 className="mb-3 mt-5">My Services</h1>
        </div>

        <div className="row g-4">
          {Services_Data.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="services-format p-4 border border-2 border-dark rounded shadow-sm h-100 text-center">
                <h4 className="mb-3 fs-4">{service.s_name}</h4>
                <ul className="list-unstyled text-start">
                  <li>
                    <p className="mb-3 fs-5 text-center">{service.s_desc1}</p>
                  </li>
                  <li>
                    <p className="mb-3 fs-5 text-center">{service.s_desc2}</p>
                  </li>
                  <li>
                    <p className="mb-3 fs-5 text-center">{service.s_desc3}</p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
