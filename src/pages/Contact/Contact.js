import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const contactFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar></Navbar>
      <section className="pt-[20px] lg:pt-[50px] pb-[20px] lg:pb-[100px] px-4 lg:px-28 max-w-[1600px] w-full m-auto">
        <div className="text-center heading-font mb-6 lg:mb-12">
          <p className="text-lg">Get In Touch </p>
          <h2 className="text-4xl lg:text-8xl">Contact</h2>
        </div>
        <div className="lg:w-[75%] mx-auto">
          <hr className="border border-black mb-8" />
          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="heading-font text-2xl">CONTACT DETAILS</h4>
                <div className="font-medium text-[#6B7280]">
                  <p>P: +1 234 567 890</p>
                  <p>E: contact@info.com</p>
                  <p>A: 123 Fifth Avenue, New York, NY 10160</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="heading-font text-2xl">FOLLOW US</h4>
                <div className="flex items-center space-x-6">
                  <FaFacebook className="border rounded-full text-4xl p-[5.8px] cursor-pointer hover:border-black transition-all duration-300"></FaFacebook>
                  <FaInstagram className="border rounded-full text-4xl p-[5.8px] cursor-pointer hover:border-black transition-all duration-300"></FaInstagram>
                  <FaYoutube className="border rounded-full text-4xl p-[5.8px] cursor-pointer hover:border-black transition-all duration-300"></FaYoutube>
                  <FaPinterest className="border rounded-full text-4xl p-[5.8px] cursor-pointer hover:border-black transition-all duration-300"></FaPinterest>
                  <FaTwitter className="border rounded-full text-4xl p-[5.8px] cursor-pointer hover:border-black transition-all duration-300"></FaTwitter>
                </div>
              </div>
            </div>
            <div>
              <form
                action=""
                className="space-y-4"
                onSubmit={contactFormHandler}
              >
                <div>
                  <div className="font-bold mb-1">Name</div>
                  <div className="flex space-x-6">
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border w-[100%] outline-none text-lg py-2 px-2 rounded-sm bg-gray-100 border-gray-300"
                      />
                      <p className="text-sm font-medium text-[#6B7280]">
                        First
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border w-[100%] outline-none text-lg py-2 px-2 rounded-sm bg-gray-100 border-gray-300"
                      />
                      <p className="text-sm font-medium text-[#6B7280]">Last</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full border outline-none text-lg py-2 px-2 rounded-sm bg-gray-100 border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1">Message</div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-full border outline-none text-lg py-2 px-2 rounded-sm bg-gray-100 border-gray-300"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    value="SEND"
                    className="px-6 py-3 text-sm font-bold tracking-[1px] cursor-pointer bg-black text-white"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-16 mb-10 lg:mt-16 lg:mb-0 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9197928999497!2d90.38981907012786!3d23.750239442707173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10f0c297a6b%3A0xcd007ff001f598b7!2sManfare!5e0!3m2!1sen!2sbd!4v1681426737049!5m2!1sen!2sbd"
              width={800}
              height={400}
              loading="lazy"
              title="Custom title"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
