import profile_img_standing from "../assets/images/profile_img_standing.webp";

const About = () => {
  return (
    <section id="about" className="py-5 about">
      <div className="container ">
        <div className="text-center mb-5 text-white">
          <h1 className="mt-5">About Me</h1>
        </div>

        <div className="d-flex flex-column flex-lg-row align-items-center gap-5 mb-5">
          <div className="text-center">
            <img
              src={profile_img_standing}
              alt="profile"
              className="img-fluid rounded"
              style={{ maxWidth: "280px" }}
            />
          </div>
          <div>
            <p className="fs-5 mb-4 text-white" style={{ lineHeight: "1.7" }}>
              I am an experienced Software Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p className="fs-5 text-white" style={{ lineHeight: "1.7" }}>
              My passion for software development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-md-row justify-content-center text-center align-items-center"
          style={{ gap: "4rem" }}
        >
          <div className="about-acheivement">
            <h1>3+</h1>
            <p className="text-white">YEARS OF EXPERIENCE</p>
          </div>

          <div className="about-acheivement border-md-start ps-md-4">
            <h1>10+</h1>
            <p className="text-white">PROJECTS COMPLETED</p>
          </div>

          <div className="about-acheivement border-md-start ps-md-4">
            <h1>5+</h1>
            <p className="text-white">HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
