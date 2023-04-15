import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Frag1 from "../../assets/bg-14.jpg";
import HistoryImg from "../../assets/bg-12.jpg";
import MissionImg from "../../assets/bg-15.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="">
        <div className="heading-bg text-white h-[150px] lg:h-[450px]">
          <div className="pt-16 lg:pt-72 px-4 lg:px-28 max-w-[1600px] w-full space-y-2 m-auto">
            <p className="heading-font text-xl">A few words</p>
            <h2 className="heading-font text-4xl lg:text-8xl">About us</h2>
          </div>
        </div>
      </section>
      <section className="pt-[20px] lg:pt-[50px] pb-[20px] lg:pb-[100px] px-4 lg:px-28 max-w-[1600px] w-full m-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="heading-font text-xl">Who we are</p>
            <h2 className="heading-font text-4xl lg:text-6xl  lg:max-w-[90%]">
              We are the NY’s largest specialist fragrance retailer with 20
              stores across the USA & Europe.
            </h2>
          </div>
          <div>
            <p className="body-font text-lg text-gray-500 leading-8">
              Nunc vulputate feugiat tortor ac congue. Nam sit amet urna vitae
              ligula pellentesque porttitor ut id nisl. Nam laoreet velit ipsum.
              Suspendisse ullamcorper, odio id faucibus consectetur, elit quam
              cursus est, nec sagittis purus enim a eros. Sed posuere nec lacus
              sit amet ullamcorper. Donec ut egestas purus. Duis placerat turpis
              non urna convallis convallis vitae nec odio. Vestibulum quam
              turpis, blandit vel fermentum sed, pulvinar in risus. Etiam a
              mauris sed nunc venenatis vulputate vitae quis tortor. Curabitur
              gravida accumsan elementum. Praesent ut hendrerit dui, vitae
              elementum mi.
            </p>
          </div>
          <div className="py-6 lg:py-16">
            <img src={Frag1} alt="" />
          </div>
          <div className="space-y-2">
            <p className="heading-font text-xl">Old friends</p>
            <h2 className="heading-font text-4xl lg:text-6xl  lg:max-w-[90%]">
              Here with you for over 15 years
            </h2>
          </div>
          <div className="space-y-4">
            <p className="body-font text-lg text-gray-500 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultrices posuere magna, et cursus metus scelerisque congue.
              Maecenas lorem enim, pharetra sed imperdiet eu, bibendum id nibh.
              In hac habitasse platea dictumst. Donec mattis molestie arcu vitae
              tempus. In hac habitasse platea dictumst. Ut mattis mauris vitae
              justo accumsan dignissim.
            </p>
            <p className="body-font text-lg text-gray-500 leading-8">
              Ut egestas quam sit amet magna sollicitudin iaculis. In sit amet
              libero vel mauris bibendum faucibus ac non diam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Proin id ante
              pulvinar risus convallis consectetur et sit amet erat. Aliquam et
              sapien rhoncus, vulputate urna non, egestas elit. In lacus ante,
              imperdiet eget justo ut, sodales sollicitudin turpis. Donec
              egestas mauris vel enim facilisis, nec dictum mi consectetur.
              Suspendisse ac ullamcorper felis. Nulla id libero id justo lacinia
              consectetur sit amet ac libero. Maecenas cursus placerat auctor.
              Integer condimentum elit ut feugiat ornare. Maecenas leo ipsum,
              pharetra sed ornare id, mattis vel nisi. Nam dui nunc, gravida sed
              tortor non, tempus pretium lectus.
            </p>
          </div>
        </div>
      </section>
      <section className="about_background my-10 lg:my-0 h-[300px] lg:h-[500px]"></section>
      <section className="pt-[20px] lg:pt-[100px] pb-[20px] lg:pb-[100px] px-4 lg:px-28 max-w-[1600px] space-y-10 lg:space-y-0 w-full m-auto">
        <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2">
          <div className="w-full">
            <img src={HistoryImg} alt="" className="w-full" />
          </div>
          <div className="">
            <div className="space-y-2">
              <p className="heading-font text-xl text-center">Sine 1995</p>
              <h2 className="heading-font text-4xl lg:text-6xl text-center">
                History
              </h2>
            </div>
            <div className="py-4 lg:py-6">
              <p className="body-font text-lg text-gray-500 text-center leading-8 max-w-[600px] mx-auto">
                Donec dapibus ullamcorper magna quis posuere. Aenean tincidunt
                posuere tellus nec dapibus. Aliquam pharetra egestas tellus.
                Nulla sed quam ante. Curabitur porta pharetra nunc, in maximus
                ex ultricies a. Donec nibh turpis, eleifend ut tristique ut,
                aliquam eu urna. Fusce eget ante tellus. Vestibulum.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="space-y-2">
              <p className="heading-font text-xl text-center">
                We are visionaries
              </p>
              <h2 className="heading-font text-4xl lg:text-6xl text-center">
                Mission
              </h2>
            </div>
            <div className="py-4 lg:py-6">
              <p className="body-font text-lg text-gray-500 text-center leading-8 max-w-[600px] mx-auto">
                Donec dapibus ullamcorper magna quis posuere. Aenean tincidunt
                posuere tellus nec dapibus. Aliquam pharetra egestas tellus.
                Nulla sed quam ante. Curabitur porta pharetra nunc, in maximus
                ex ultricies a. Donec nibh turpis, eleifend ut tristique ut,
                aliquam eu urna. Fusce eget ante tellus. Vestibulum.
              </p>
            </div>
          </div>
          <div className="w-full order-1 lg:order-2">
            <img src={MissionImg} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default About;
