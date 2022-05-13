import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Chair from "../../assets/about1.png";
import Chair2 from "../../assets/about-2.jpg";
import Chair3 from "../../assets/about-3.jpg";
import Chair4 from "../../assets/about-4.jpg";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
function AboutWelcom() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-80 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={Chair}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-80 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={Chair2}
                    alt="hello"
                    style={{
                      marginTop: "25%",
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={Chair3}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={Chair4}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="section-title ff-secondary text-start test fw-normal">
                About Us
              </h3>
              <h1 className="mb-4">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="fa fa-utensils test me-2"
                />
                Adnegs Food's story
              </h1>
              <p className="mb-4">
                CEO, Adewale Tosin, opened the first Adnegs Foods Restaurant in
                Lagos on January 27, 2022. Today, there are 7 branches all
                over West Africa. Adnegs Foods Restaurants are well known with a
                substantial gathering of people including families, kids,
                seniors, and business experts. Our benevolent condition is
                perfect for praising unique events, facilitating a business
                lunch, or assembling for a flavorful dinner with loved ones.
                Open day by day for lunch and dinner, Adnegs Foods offers a
                choice of naturally arranged things utilizing just the best
                fixings accessible.
              </p>
              <p className="mb-4">
                Our top picks incorporate crisp fish, rotisserie chicken, infant
                back pork ribs. New prepared pot pie, strength plates of mixed
                greens, wood-let go pizzas, pasta, sandwiches, burgers, and
                more. Adnegs Food's heated merchandise and treats including our
                Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, and
                delectably rich cream cheddar pies are prevalent top choices
                with our visitors.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-dark px-3">
                    <h1
                      className="flex-shrink-0 display-5 test mb-0"
                      data-toggle="counter-up"
                    >
                      5
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-dark px-3">
                    <h1
                      className="flex-shrink-0 display-5 test mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn test2 py-3 px-5 mt-2" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWelcom;
