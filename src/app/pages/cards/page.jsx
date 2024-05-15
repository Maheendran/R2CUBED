"use client";
import React from "react";
const images = [
  {
    src: "/Image/1.png",
    alt: "1",
    name: "Automotive",
    role: "Web3 developer",
    task: [
      "Failure prediction",
      "Uptime management",
      "Process planning and prediction",
      "Energy management",
      "Downtime reduction",
    ],
  },
  {
    src: "/Image/2.png",
    alt: "2",
    name: "Warehousing operations",
    role: "WordPress developer",
    task: [
      "Material movement",
      "Inventory management and control",
      "Process planning",
      "Downtime reduction",
      "Energy management",
    ],
  },
  {
    src: "/Image/3.png",
    alt: "3",
    name: "Oil and Gas",
    role: "Java developer",
    task: [
      "Downtime prediction",
      "Uptime management",
      "Energy management",
      "Productivity uplift",
      "CO2 emission management and carbon neutrality",
      "Operational process simulation and planning",
    ],
  },
  {
    src: "/Image/4.png",
    alt: "4",
    name: "Food & beverage",
    role: "Web developer",
    task: [
       "Yield improvement",
       "Energy management",
       "Uptime improvement & prediction",
       "Downtime reduction",
       "Product / process change modelling and simulation"
      ],
  },
  {
    src: "/Image/5.png",
    alt: "5",
    name: "Industrial power plants",
    role: "PHP developer",
    task: [
        "Downtime reduction and avoidance",
        "Uptime improvement & productivity boost",
        "Energy management",
        "Planned and predictive maintenance",
        "Capacity planning and simulation"

       ],
  },
  {
    src: "/Image/6.png",
    alt: "6",
    name: "Building management",
    role: "SEO developer",
    task: [

        "Power management",
        "Thermal and AC management",
        "Occupancy management",
        "Safety and security management",
        "Space management",
        "Building efficency management"

       ],
  },
  {
    src: "/Image/7.png",
    alt: "7",
    name: "Military applications",
    role: "SQL developer",
    task: [

       "Captive power unit management and uptime enforcement",
       "Telecom system function and functional readiness",
       "Vehicle & asset location management",
       "Troop movement and logistics",
       "Field level health & safety policy enforcement"

       ],
  },
];

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {


    return (
      <div className="slider-container common">
        <div className="slider-images">
          {images.map((imageaa, index) => (
            <div
              key={index}
              className={`slider-img ${
                index === this.state.activeIndex - 1 ? "active" : ""
              }`}
              onClick={() => this.handleClick(index + 1)}
            >
              <img src={imageaa.src} alt={imageaa.alt} />
              <h1>{imageaa.name}</h1>
              <div className="details">
                <h2>{imageaa.name}</h2>

             {  imageaa.task.map((e)=>(

 <p className=" my-auto ">
    <span>
    <img className="min-w-[1.2rem] min-h-[1.2rem] rounded-[0.25rem] " src="https://th.bing.com/th/id/OIP.SeEx5t0z_qWeFj9GryrOQQAAAA?rs=1&pid=ImgDetMain" alt="" />
{/* <img src="https://icon-library.com/images/checked-box-icon/checked-box-icon-19.jpg" alt="" /> */}
{/* <img src="https://th.bing.com/th/id/OIP.fsv1m_EL1xn0l9L4LSjt7gHaHa?rs=1&pid=ImgDetMain" alt="" /> */}
    </span>
  {e}
 </p>

             )) 
               }
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlider;
