import profile_img from "../assets/images/profile_img.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column align-items-center text-center px-3 px-md-5"
      style={{ minHeight: "auto", paddingTop: "100px", paddingBottom: "60px" }}
    >
      <div className="hero-image mb-4">
        <img
          src={profile_img}
          alt="profile"
          className="img-fluid rounded-circle shadow-sm"
          style={{
            width: "100%",
            maxWidth: "300px",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="container w-100 px-3">
        <h2 className="custom-name">I'm Diyani Munasinghe,</h2>
        <h2 className="fw-bold mb-4">Software Engineer based in Sri Lanka.</h2>

        <p className="mb-5 fs-5 mx-auto" style={{ maxWidth: "900px" }}>
          Results-driven, innovative Software Engineer with over 3 years of
          experience in React.js, Spring Boot, Java, MySQL, and Angular. Skilled
          in performance optimization, problem-solving, and delivering
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
