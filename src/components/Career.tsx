import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co Founder</h4>
                <h5>FOURI.IN</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building fouri.in, a voice AI platform for automating customer
              calls, support, conversions and Digital Soluctions
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DGT</h4>
                <h5>Lead Developer · Kolkata</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Web Developer focused on building modern, high performance
              websites and digital experiences. I specialize in WordPress
              development, custom UI design, and responsive web applications
              using HTML, CSS, JavaScript, and modern tools. I have experience
              creating business websites, ecommerce platforms and membership
              systems while ensuring clean code, fast performance and intuitive
              user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NIELIT</h4>
                <h5>Govt. Full Stack Developer Intern</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a Full Stack Development internship under NIELIT where I
              worked on building responsive web applications using HTML, CSS,
              JavaScript and modern web technologies. Gained practical
              experience in front-end development, UI design, database
              integration and creating dynamic web solutions with a focus on
              performance and usability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Phoenx Pvt. Ltd.</h4>
                <h5>Frontend Engineer Intern</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked as a Frontend Engineer Intern at Phoenx Pvt. Ltd., where I
              contributed to building responsive and user-friendly web
              interfaces using HTML, CSS, and JavaScript. Assisted in developing
              modern UI components, improving website responsiveness, and
              collaborating with the development team to deliver clean,
              optimized, and visually engaging web experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
