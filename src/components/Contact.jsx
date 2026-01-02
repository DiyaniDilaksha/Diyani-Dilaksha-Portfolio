import emailIcon from "../assets/icons/email.png";
import phoneIcon from "../assets/icons/phone.png";
import locationIcon from "../assets/icons/location.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8588b62f-ae0e-4129-812d-22c903d09d1a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="mt-5">Get In Touch</h1>
        </div>

        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-12 col-lg-5">
            <h2 className="h5 h-lg-2 mb-3">Let's talk</h2>
            <p className="fs-5 mb-1 fw-bold">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you want me to work on. You can
              contact anytime.
            </p>

            <div className="d-flex flex-column gap-2 gap-md-2">
              <p className="fs-5 mt-4 mb-2">
                <img
                  src={emailIcon}
                  alt="email"
                  className="me-2 icon-color"
                  style={{ width: "40px", height: "40px" }}
                />
                diyanidilaksha@gmail.com
              </p>
              <p className="fs-5 mb-2">
                <img
                  src={phoneIcon}
                  alt="email"
                  className="me-2 icon-color"
                  style={{ width: "40px", height: "40px" }}
                />
                0710480868
              </p>
              <p className="fs-5 mb-2">
                <img
                  src={locationIcon}
                  alt="email"
                  className="me-2 icon-color"
                  style={{ width: "40px", height: "40px" }}
                />
                Colombo, Sri Lanka
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <form
              onSubmit={onSubmit}
              className="p-3 p-md-4 border rounded shadow-sm"
            >
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control w-100"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn connect-btn px-4 fs-5">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
