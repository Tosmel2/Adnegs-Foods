import Staff1 from '../../assets/Team1.png'
import Staff2 from '../../assets/Team2.png'
import Staff3 from '../../assets/Team3.png'
import Staff4 from '../../assets/Team4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutStaff() {
  return (
    <div>
      <div class="container-xxl pt-5 pb-3">
        <div class="container">
          <div
            class="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
          >
            <h5 class="section-title ff-secondary text-center test fw-normal">
              Team Members
            </h5>
            <h1 class="mb-5">Our Chief Chefs</h1>
          </div>
          <div class="row g-4">
            <div
              class="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src={ Staff1 } alt="" />
                </div>
                <h5 class="mb-0">Oyindamola T.</h5>
                <small>Captain Chef</small>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-success mx-1" href="/">
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    {/* <i class="fab fa-facebook-f"></i> */}
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                  {/* <FontAwesomeIcon icon={["fab", "twitter"]} /> */}
                    {/* <i class="fab fa-twitter"></i> */}
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src={ Staff2 } alt="" />
                </div>
                <h5 class="mb-0">Full Name</h5>
                <small>Chef</small>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-success mx-1" href="/">
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    {/* <i class="fab fa-facebook-f text-white"></i> */}
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src={ Staff3 } alt="" />
                </div>
                <h5 class="mb-0">Dayo D1</h5>
                <small>Chief Chef</small>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src={ Staff4 } alt="" />
                </div>
                <h5 class="mb-0">Oyindamola</h5>
                <small>Chef</small>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-facebook-f text-danger"></i>
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-square btn-success mx-1" href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStaff;
