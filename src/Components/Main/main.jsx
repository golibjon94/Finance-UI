import React from "react";
import "./main.css";
import Map from "../Map/Map";
import RegionsData from "../RegionsData/RegionsData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function Main() {
  return (
    <Router>
      <div className="main">
        <div className="searchs">
          <select name="" id="">
            <option value="">Dekabr 2021</option>
            <option value="">Noyabr 2021</option>
            <option value="">Oktyabr 2021</option>
            <option value="">Sentyabr 2021</option>
            <option value="">Iyul 2021</option>
            <option value="">Iyun 2021</option>
            <option value="">May 2021</option>
            <option value="">Aprel 2021</option>
            <option value="">Mart 2021</option>
            <option value="">Fevral 2021</option>
            <option value="">Yanvar 2021</option>
          </select>
          <select name="" id="">
            <option value="">Bolali oilalar uchun nafaqa (0-14)</option>
            <option value="">Moddiy yordam</option>
            <option value="">Bolaga qarash bo'yicha nafaqa (0-2)</option>
            <option value="">Kam ta'minlangan oilalarga bolalar nafaqasi</option>
            <option value="">Kam ta'minlangan oilalarga moddiy yordam</option>
          </select>
          <button>Tanlash</button>
        </div>
        {/* MAP------------------- */}
        {/*  */}
        <Switch>
        <Route exact path="/mainMap">
          <Map />
        </Route>
        <Route exact path="/regionData/:id">
          <RegionsData/>
        </Route>
        <Route>
          <Map />
        </Route>
        </Switch>
        <div className="main_infos">
          <div className="info">
            <h2>150k</h2>
            <p>Aholi soni</p>
          </div>
          <div className="info">
            <h2>10000</h2>
            <p>Arizalar soni</p>
          </div>
          <div className="info">
            <h2>2000</h2>
            <p>Rad etilganlari</p>
          </div>
          <div className="info">
            <h2>8000</h2>
            <p>Hal etilganlari</p>
          </div>
        </div>
      </div>
    </Router>
  );
}
