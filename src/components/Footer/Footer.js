import React from "react";
import Logo from "../../assets/asset 15.png";

const Footer = () => {
  return (
    <section className="pt-[20px] lg:pt-[80px] bg-black text-white  ">
      <div className="grid lg:grid-cols-4 gap-x-20 gap-y-14 pb-10 lg:pb-24 px-6 lg:px-28 max-w-[1600px] w-full m-auto">
        <div className="space-y-6">
          <div>
            <img src={Logo} alt="footer_logo" width={110} />
          </div>
          <p className="body-font">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-8">
          <h2 className="uppercase heading-font text-2xl">Customer Care</h2>
          <p className="body-font">
            Need help? We're always here for you, and ready to help.
          </p>
          <div className="space-y-1">
            <p className="body-font">E: info@example.com</p>
            <p className="body-font">P: +881 2334 566341</p>
            <p className="body-font">A: 123 fifth Avenue, New York, NY 10160</p>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-8">
          <h2 className="uppercase heading-font text-2xl">Follow Us</h2>
          <div className="space-y-2">
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Facebook
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Instagram
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              YouTube
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Pinterest
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Twitter
            </p>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-8">
          <h2 className="uppercase heading-font text-2xl">Useful Links</h2>
          <div className="space-y-2 ">
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Return & Exchange
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              FAQ
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Shipping Information
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Affiliation
            </p>
            <p className="body-font cursor-pointer hover:text-blue-600 w-fit">
              Wholesale
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-800 py-10 lg:px-0">
        <p className="text-center body-font text-sm">
          Copyright © 2022{" "}
          <a
            href="https://github.com/ishtiyak98"
            rel="noreferrer"
            target={"_blank"}
            className="hover:text-blue-600"
          >
            Rifat Ishtiyak
          </a>{" "}
          | Powered by Innesa Perfumes
        </p>
      </div>
    </section>
  );
};

export default Footer;
