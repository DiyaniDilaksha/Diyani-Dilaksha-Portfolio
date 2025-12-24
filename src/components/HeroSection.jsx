import profile_img from "../assets/images/profile_img.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column align-items-center text-center px-3 px-md-5 pb-5"
      style={{ minHeight: "100vh", paddingTop: "120px" }}
    >
      <div className="hero-image mb-5">
        <img
          src={profile_img}
          alt="profile"
          className="img-fluid rounded-circle"
          style={{ maxWidth: "450px" }}
        />
      </div>
 <div className="w-50 w-md-75 w-lg-100 px-3 px-lg-0">
      {/* <div className="w-100 w-md-75 w-lg-50 px-3 px-lg-0"> */}
        <h2 className="custom-name">I'm Diyani Munasinghe,</h2>
        <h2 className="fw-bold mb-4">Software Engineer based in Sri Lanka.</h2>

        <p className="mb-5 fs-5">
          Results-driven, innovative Software Engineer with over 3 years of
          experience in React.js, Spring Boot, Java, MySQL, and Angular.
          Skilled in performance optimization, problem-solving, and delivering
          efficient, reliable software that drives organizational success.
        </p>

        <div>
          <a className="btn connect-btn px-4 fs-5" href="#contact">
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
