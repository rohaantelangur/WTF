import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdPhoneCallback, MdLocationOn, MdFacebook } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className=" py-5 text-white">
      <div className="row m-auto w-100 container">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 text-center">
          <img width={"100px"} src="/img/logo.png" alt="" />
          <div className="iconsparent">
            <div className="insta">
              <BsInstagram />
            </div>
            <div className="facebook">
              <MdFacebook />
            </div>
            <div className="linkedin">
              <BsLinkedin />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 listpara">
          <h4 className="font-weight-bold">Quick Links</h4>
          <p>About</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>WTF in News</p>
          <p>Teams & News</p>
          <p>Refund & cancellation</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 listpara">
          <h4 className="font-weight-bold">Explore</h4>
          <p>Arenas</p>
          <p>Studios</p>
          <p>Nutrition</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 listpara">
          <h4 className="font-weight-bold">Contact</h4>
          <div className="row m-0">
            <div className="col-2 ">
              <MdLocationOn className="contacticon" />
            </div>
            <div className="col-10">
              <p>
                Ro:S 1502, Amrapali Silicon city, Sector 76, Noida, Utter
                Pradesh, India
              </p>
            </div>

            <div className="col-2">
              <MdLocationOn className="contacticon" />
            </div>
            <div className="col-10">
              <p>
                Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
              </p>
            </div>

            <div className="col-2">
              <MdPhoneCallback className="contacticon" />
            </div>
            <div className="col-10">
              <p>+919090639005</p>
            </div>

            <div className="col-2">
              <IoMdMail className="contacticon" />
            </div>
            <div className="col-10">
              <p>support@wtfme.me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
