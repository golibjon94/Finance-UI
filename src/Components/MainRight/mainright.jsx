import React from "react";
import "./mainright.css";
import AudienceIcon from "../../assets/icons/audience.png";
import Chartt from "../charts/chart";
import ProgressBar from "react-bootstrap/ProgressBar";

const Mainright = () => {
  return (
    <div className="mainRight">
      <div className="top">
        <img src={AudienceIcon} alt="audience" />
        <h4>Audience Demografic</h4>
      </div>
      <div className="order_time">
        <div className="order_left">
          <h4>Order Time</h4>
          <p>From 1-6 Dec 2021</p>
        </div>
        <button>View Report</button>
      </div>
      <Chartt />
      <div className="audience_infos">
        {/* <ProgressBar>
          <ProgressBar striped variant="success" now={35} key={1} />
          <ProgressBar variant="warning" now={20} key={2} />
          <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar> */}
        <div className="years">
        <div style={{display:"flex",alignItems:"center"}}>
        <div className="circle"></div>
          <h6>Kam ta'minlangan oilalarga yordam</h6>
            </div>
          
          <span>32%</span>
        </div>
        <div className="years">
        <div style={{display:"flex",alignItems:"center"}}>
        <div className="circle"></div>
          <h6>Bolaga qarash bo'yicha nafaqa (0-2)</h6>
            </div>
          <p>(0-2)</p>
          <span>27%</span>
        </div>
        <div className="years">
        <div style={{display:"flex",alignItems:"center"}}>
        <div className="circle"></div>
          <h6>Bolali oilalar uchun nafaqa </h6>
            </div>
          <p>(0-14)</p>
          <span>45%</span>
        </div>
        <div className="years">
            <div style={{display:"flex",alignItems:"center"}}>
        <div className="circle"></div>
          <h6>Moddiy yordam</h6>
            </div>
          
          <span>34%</span>
        </div>
      </div>
    </div>
  );
};

export default Mainright;
