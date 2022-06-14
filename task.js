import React from "react";
import { Input, Button } from "reactstrap";
import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import "./task.css";

const Task = () => {
  return (
    <div>
      <div className="header">
        <h1>Header</h1>
      </div>
      <div className="bodySection">
        <div className="bodySectionText">
          <h1>Contact Our Sale Team</h1>
          <p>
            If you need our help, have questions about how to use the platform
            or an experiencing difficulties, please do not hesitate to contact
            us.
          </p>
        </div>
        <div className="style1 card"></div>
        <div className="circle">
          <div className="line"></div>
          <div className="bodyContact card">
            <form action="">
              <div className="first">
                <div className="formName">
                  <label htmlFor="name">Your Name*</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                  ></Input>
                </div>
                <div className="formName">
                  <label htmlFor="number">Phone Number*</label>
                  <Input
                    type="text"
                    id="number"
                    placeholder="Enter Your Phone Number"
                  ></Input>
                </div>
              </div>
              <div>
                <div className="formName">
                  <label htmlFor="mail">Contact Email*</label>
                  <Input
                    type="email"
                    id="mail"
                    placeholder="Sample@gmail.com"
                  ></Input>
                </div>
                <div className="formName">
                  <label htmlFor="city">City*</label>
                  <Input type="select" name="select" id="city">
                    <option>Lahore</option>
                    <option>Faislabad</option>
                    <option>Islamabad</option>
                    <option>Karachi</option>
                  </Input>
                </div>
              </div>
              <div className="formName" >
                <label htmlFor="textArea">Message*</label>
                <Input
                  type="textarea"
                  name="text"
                  id="textArea"
                  cols="85"
                  rows="7"
                  placeholder="Type your message..."
                ></Input>
              </div>
            </form>
            <div className="formPara">
              By submiting this form you agree to our terms and conditions and
              privacy polciy which explains how we may collect,use and disclose
              your personal information including to third party.
            </div>
            <div className="Formbtn">
              <Button  size="lg">
                Contact Sale
              </Button>
            </div>
          </div>
        </div>
        <div className="help d-flex flex-md-row flex-column">
          <div className="contact">
            <h1>
              <AiTwotoneMail />
            </h1>
            <h4>Email us</h4>
            <p>
              Email us for generel queries,including marketing and partnership
              oppertunities
            </p>
            <h6>support@autodeal.pk</h6>
          </div>
          <div className="call">
            <h1>
              <AiFillPhone />
            </h1>
            <h4>Call us</h4>
            <p>
              Call us to speak to a member of our team.We are always happy to
              help
            </p>
            <h6>+1(646)786-5060</h6>
          </div>
          <div className="support">
            <h1>
              <MdSupportAgent />
            </h1>
            <h4>Support</h4>
            <p>Check out helpfull resources,FAQs and developer tool</p>
            <h6>Support Center</h6>
          </div>
        </div>
        <div className="style"></div>
        <div className="footerUp">
          <div className="alert">
            <div>
              <h1>
                <AiOutlineBell />
              </h1>
            </div>
            <div>
              <h4>Email Alert</h4>
              <p>
                Set your alert for toyota prius 2004 in Lahore we will email you
                relevants adds
              </p>
            </div>
          </div>
          <div className="info">
            <Input type="text" id="infoMail" placeholder="Mail"></Input>
            <div className="infoNext">
              <Input type="select" id="routine">
                <option value="">Daily</option>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </Input>
              <Button  size="lg" id="submitbtn">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
};

export default Task;
