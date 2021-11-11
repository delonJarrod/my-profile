import React from "react";
import classes from "./PreshenCv.module.css";
import image from "../components/img/PreshenDP.jpg";
function PreshenCv() {
  return (
    <div>
      <div className="border-t-2 font-Nunito">
        <div className="m-10">
          <div>
            <div className="container block flex flex-row float-left">
              <div className="flex-col">
                <img
                  src={image}
                  alt="Display_Picture"
                  className="rounded-full h-52 w-42"
                />
              </div>
              <div
                style={{ paddingLeft: "10%" }}
                className="flex-col float-right  font-Nunito font-bold subpixel-antialiased mt-20"
              >
                <h1 className="text-4xl">Preshen Naidoo</h1>
                <h1>BCOM MARKETING AND INFORMATION TECHNOLOGY GRADUATE</h1>
                <h1>IT SUPPORT SERVICE GRADUATE</h1>
              </div>
            </div>

            <div className="flex-col">
              <div>
                <div
                  className="container block flex flex-row pt-10 gap-20 "
                  style={{ width: "950px" }}
                >
                  <div className="flex-col text-left ">
                    <h1 className="font-bold subpixel-antialiased text-2xl text-blue-400">
                      EDUCATION
                    </h1>
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      BCOM MARKETING AND INFORMATION TECHNOLOGY GRADUATE
                    </h1>
                    <h1> Regent Business School</h1>

                    <h1> 2019-2021</h1>
                    <h1>Graduated</h1>

                    <h1 className="font-bold text-xl subpixel-antialiased pt-3">
                      IT SUPPORT SERVICE GRADUATE
                    </h1>
                    <h1> Varsity College</h1>

                    <h1>2017-2018</h1>
                    <h1>Graduated</h1>
                  </div>

                  <div className="flex-col text-left float-right">
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      {" "}
                      CONTACTS
                    </h1>
                    <h1>naidoopreshen6@gmail.com</h1>
                    <h1>081 418 6655</h1>
                    <h1>
                      https://www.linkedin.com/in/preshen-naidoo-4045b7151/
                    </h1>
                  </div>
                </div>

                <div className="container flex flex-row gap-20">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-2xl subpixel-antialiased ">
                      NATIONAL SENIOR CERTIFICATE
                    </h1>
                    <h1>Kharwastan Secondary School</h1>
                    <h1>Completed ( Matric - bachelors pass )</h1>
                  </div>
                  <div
                    className="flex-col text-left float-right ml-36 text-3md "
                    style={{ width: "300px" }}
                  >
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      {" "}
                      WHY ME?
                    </h1>
                    <p className="text-sm">
                      I am a hardworking and diligent young man with a positive
                      outlook. I work well as part of a team or individually. I
                      am motivated, proactive and passionate about digital
                      marketing, and creating a future for the new generation.
                    </p>
                  </div>
                </div>

                <div className="container block flex flex-row gap-20">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      {" "}
                      WORK EXPERIENCE
                    </h1>
                  </div>
                </div>

                <div className="container block flex flex-row gap-20">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      Digital Marketing & Graphic Design
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2021 August - Current)
                    </h1>
                    <h1>
                      <em>Algo Corp Solutions </em>
                    </h1>
                    <h1>
                      - At AlgoCorp my role was to{" "}
                      <b> create the best digital marketing services</b>,
                      catering for buisnesses that needed help with increasing
                      their <b> companys profits.</b>
                    </h1>
                    <h1>
                      - Expanding the <b> Business network</b> and creating
                      partnerships
                    </h1>
                    <h1>
                      - Managing all <b> marketing</b> for the company and
                      <b> activities</b> within the{" "}
                      <b> marketing department.</b>
                    </h1>
                    <h1>
                      - <b> Creation and publication</b> of all marketing
                      material.
                    </h1>
                    <h1>
                      - Finding and{" "}
                      <b> Analyzing potential strategic partnerships </b>
                      for company marketing.
                    </h1>

                    <h1>
                      - Maintaining and
                      <b> developed all social media platforms </b> for AlgoCorp
                      Solutions example:<b> Facebook, Twitter, Instagram. </b>
                    </h1>

                    <h1>
                      - Draft and localize marketing content including but not
                      limited to{" "}
                      <b>
                        {" "}
                        blogs posts, newsletters, infographics, flyers, web
                        copy, emails{" "}
                      </b>{" "}
                      and sales collateral to drive demand and awareness of
                      AlgoCorp Solutions product lines
                    </h1>
                    <h1>
                      - Increasing the{" "}
                      <b>
                        {" "}
                        brand audience and ensure ongoing engagement on all
                        platforms.{" "}
                      </b>
                    </h1>

                    <h1>
                      <b>- Reason for leaving: </b> End of contract
                    </h1>
                  </div>

                  <div className="flex-col text-left float-right ml-30">
                    <h1 className="ml-20 font-bold text-2xl subpixel-antialiased text-blue-400">
                      SKILLS
                    </h1>
                    <div className="container block flex flex-row mt-3 gap-3 ml-36">
                      <h1 className="border-2 border-blue-500 border-opacity-50 rounded-full h-28 w-28 flex items-center justify-center text-center p-5">
                        Digital Marketing
                      </h1>
                      <h1 className="border-2 border-blue-500 border-opacity-50 rounded-full h-28 w-28 flex items-center justify-center text-center text-center p-5">
                        Infomation Techology
                      </h1>
                    </div>

                    <div className="container block flex flex-row pt-10 gap-5">
                      <div className="flex-col text-left float-right"></div>
                      <div className="flex-col text-left float-right">
                        <h1 className="text-center font-bold text-lg subpixel-antialiased">
                          Digital Marketing
                        </h1>
                        <div className="container block flex flex-row mt-5 ">
                          <div className="flex-col text-left float-right text-sm">
                            <h1>Social Media Marketing</h1>
                            <h1>Marketing Strategist</h1>
                            <h1>Content Editor</h1>
                            <h1>Commercial Law</h1>
                            <h1>Editor</h1>
                            <h1>Advertising</h1>
                          </div>
                        </div>
                      </div>

                      <div className="flex-col text-left float-right">
                        <h1 className="text-center font-bold text-lg subpixel-antialiased">
                          Infomation Technology
                        </h1>
                        <div className="container block flex flex-row mt-5 text-sm ">
                          <div className="flex-col text-left float-right ">
                            <h1>Html5</h1>
                            <h1>CSS</h1>
                            <h1>JavaScript</h1>
                            <h1>Python</h1>
                            <h1>IT Technician</h1>
                            <h1>MS Word and Excel</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container block flex flex-row mt-3 gap-20">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      Cashier & Stock Merchandiser
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2020 Feb - 2020 Dec)
                    </h1>
                    <h1>
                      <em>Pick N Pay</em>
                    </h1>
                    <h1>- General Cashier</h1>

                    <h1>
                      - <b> Packing stock </b>, to and from delivery trucks
                      aswell as packing stock from <b> Pick N Pay warehouse </b>
                    </h1>
                    <h1>
                      - Delivered customer services that exceeds customer
                      expectations
                    </h1>
                    <h1>
                      - Ensuaring compliance with <b> food safety</b> as well as
                      other <b> health and safety protocols</b>
                    </h1>
                    <h1>
                      - <b>Stock delivery</b>, packaged stock and{" "}
                      <b> delivered </b> it to clients.
                    </h1>
                    <h1>
                      - <b>Stock take </b> and general stock maintenance
                    </h1>
                    <h1>
                      - <b>Stock check , checking if stock is accurately </b>
                      labled and matchers description.
                    </h1>

                    <h1>
                      - Monitored <b>Pick N Pay application </b>, picked,
                      packaged and <b>delivered stock to online clients</b>
                    </h1>
                    <h1>
                      - Working as an <b>essential worker </b> during covid19
                      pandemic
                    </h1>

                    <h1>
                      - Other duties as required by Store and Regional Managers.
                    </h1>
                    <h1>
                      <b>- Reason for leaving: </b> End of contract
                    </h1>
                  </div>

                  <div
                    className="flex-col text-left float-right ml-20 mt-20"
                    style={{ width: "400px" }}
                  >
                    <h1 className="font-bold text-xl subpixel-antialiased  text-blue-400">
                      ACHIEVEMENTS / LEADERSHIP
                    </h1>
                    <h1 className="text-sm mt-3">
                      - Developed websites and applications for members of the
                      community.
                    </h1>
                    <h1 className="text-sm mt-3">
                      - Comunity Services At The Aryan Benevolent Home
                    </h1>
                    <h1 className="text-sm mt-3">
                      - Involved in community project planning.
                    </h1>
                    <h1 className="text-sm mt-3">
                      - 5 DISTINCTIONS at the end of studies (2019).
                    </h1>
                    <h1 className="text-sm mt-3">
                      - Involved in religious and community activities.
                    </h1>
                  </div>
                </div>

                <div className="container block flex flex-row mt-10 gap-20">
                  <div className="flex-col text-left -mt-5">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      Casual Worker
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2019 Nov - 2020 Jan)
                    </h1>
                    <h1>
                      <em>EDGARS </em>
                    </h1>
                    <h1>- General Cashier</h1>
                    <h1>
                      - Managed <b> admin</b> and changing room{" "}
                      <b> responsibilities</b>
                      ensuring that stock and other<b>products are secure. </b>
                    </h1>
                    <h1>
                      - Handled <b>Administrator tasks </b> such as account
                      payments
                    </h1>
                    <h1>
                      - <b> Merchandising </b>, managered return of products
                    </h1>
                    <h1>
                      - Handeling <b> Stock take </b> and displaying stock
                    </h1>
                    <h1>
                      <b>- Reason for leaving: </b> End of contract
                    </h1>
                  </div>

                  <div
                    className="flex-col text-left float-right ml-36 text-3md "
                    style={{ width: "400px" }}
                  >
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      Personal Projects and learnings
                    </h1>
                    <p className="text-sm mt-3">
                      - Developed community projects with HTML5 and Bootstrap.
                    </p>
                    <p className="text-sm mt-3">
                      - Studying new web development technologies eg, React
                    </p>
                  </div>
                </div>

                <div className="container block flex flex-row mt-10 gap-20">
                  <div className="flex-col text-left -mt-5">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      Stock Merchandiser & General Assistant
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2017 Nov - 2018 Jan)
                    </h1>
                    <h1>
                      <em>Evoke Group Handling </em>
                    </h1>
                    <h1>- General Cashier, Merchandiser</h1>
                    <h1>- Assistant to manager</h1>
                    <h1>
                      - <b>Packaging stock </b> and recording <b> stock take</b>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreshenCv;
