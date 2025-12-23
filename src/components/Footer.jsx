import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="text-light pt-5 footer">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 pb-4">
          <div className="text-center text-md-start">
            <img
              src={logo}
              alt="logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <p className="mb-0 fs-6" style={{ lineHeight: "1.6" }}>
              I'm a Software Engineer from Colombo with 3+ years of experience
              in multiple companies based in Sri Lanka.
            </p>
          </div>

          <div className="text-center text-md-end"></div>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 text-center text-md-start">
          <p className="mb-2 mb-md-0 small">
            © 2025 Diyani Munasinghe. All rights reserved
          </p>

          <div className="d-flex gap-3 small">
            {/* Future links */}
            {/* 
            <a href="#" className="text-light text-decoration-none">Terms</a>
            <a href="#" className="text-light text-decoration-none">Privacy</a>
            <a href="#" className="text-light text-decoration-none">Contact</a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
