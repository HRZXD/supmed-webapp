import React from "react";
import dcIMG1 from "../../../public/images/doctor-img-1.png";
import imgF1 from "../../../public/images/feature1.png";
import imgF2 from "../../../public/images/feature2.png";
import imgF3 from "../../../public/images/feature3.png";
import imgF4 from "../../../public/images/feature4.png";
import imgTeam from "../../../public/images/team.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{
          backgroundImage: 'url("../../../public/images/bg-main.png")',
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white opacity-10"></div>

        {/* Content Container */}
        <div className="absolute top-1/6 left-8 md:left-12 lg:left-16 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Support Medical & Healthcare
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl">
            Is the web application designed to streamline the access and management of patient data for healthcare professionals.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent border border-white py-2 px-4 sm:px-6 lg:py-3 lg:px-8 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Visit Us
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg max-w-7xl mx-auto my-16">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            The primary objective of Supmed is to gather and organize treatment
            data from both public and private healthcare institutions. By doing
            so, it empowers physicians with the ability to promptly and
            comprehensively treat patients, ensuring that they have access to
            vital information such as patient names, birthdays, and other
            standard details.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent border border-gray-900 py-2 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
          <img src={dcIMG1} alt="Doctor" className=" rounded-2xl shadow-lg" />
        </div>
      </div>
      <div className="my-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          interval={4000}
          className="rounded-lg shadow-lg"
        >
          <div className="h-64 md:h-80">
            <img
              src={imgF1}
              alt="Feature 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-64 md:h-80">
            <img
              src={imgF2}
              alt="Feature 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-64 md:h-80">
            <img
              src={imgF3}
              alt="Feature 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </Carousel>

        <div className="mt-10 flex">
          <img
            src={imgF4}
            alt="Feature Detail"
            className="rounded-lg shadow-lg mr-10"
          />
          <div>
            <h3 className="text-2xl font-bold mb-1">
              Secure Patient Identification
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Doctors can securely access patient data by entering the unique ID
              card number.
            </p>
            <h3 className="text-2xl font-bold mb-1">
              Basic Patient Information
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              View standard patient details, including name and birthday, for quick reference.
            </p>
            <h3 className="text-2xl font-bold mb-1">
              Secure Patient Identification
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Gain access to a wealth of medical information, including CT scan results, X-rays, and detailed medical records.
            </p>
            <h3 className="text-2xl font-bold mb-1">
              Efficient Data Retrieval
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Streamlined system for doctors to quickly retrieve the necessary patient information, enhancing overall efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
        <div className="flex justify-evenly">
          <img src={imgTeam} alt="team-img" className="rounded-lg h-full"/>
          <div className="text-lg font-semibold">
            <h2>IT Support & Data Scientist</h2>
            <ul className="list-disc ml-6 mb-2">
              <li>Eexin</li>
              <li>New</li>
              <li>P&apos;Tae</li>
              <li>P&apos;Guide</li>
            </ul>
            <h2>Frontend Developer</h2>
            <ul className="list-disc ml-6 mb-2">
              <li>Gain</li>
              <li>Tae</li>
              <li>Nice</li>
              <li>May</li>
              <li>Kawpan</li>
              <li>Ran</li>
              <li>Tae-Tae</li>
            </ul>
            <h2>Backend Developer</h2>
            <ul className="list-disc ml-6 mb-2">
              <li>Haris</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
