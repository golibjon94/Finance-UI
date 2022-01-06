import React, { useState } from "react";
import "./main.css";
import Map from "../Map/Map";
import RegionsData from "../RegionsData/RegionsData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { height } from "@mui/system";






   

export default function Main() {
  const [month, setMonth] = useState('');
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  
  const handleType = (event) => {
    setType(event.target.value);
  };
  


  return (
   
    <Router>
      <div className="main">
        <div className="searchs">
       

<Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Oy va Yil</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={month}
        label="Month"
        onChange={handleChange}
        >
          <MenuItem value={12}>Dekabr 2021</MenuItem>
          <MenuItem value={11}>Noyabr 2021</MenuItem>
          <MenuItem value={10}>Oktyabr 2021</MenuItem>
          <MenuItem value={9}>Sentyabr 2021</MenuItem>
          <MenuItem value={8}>Avgust 2021</MenuItem>
          <MenuItem value={7}>Iyul 2021</MenuItem>
          <MenuItem value={6}>Iyun 2021</MenuItem>
          <MenuItem value={5}>May 2021</MenuItem>
          <MenuItem value={4}>Aprel 2021</MenuItem>
          <MenuItem value={3}>Mart 2021</MenuItem>
          <MenuItem value={2}>Fevral 2021</MenuItem>
          <MenuItem value={1}>Yanvar 2021</MenuItem>
          
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ariza turi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleType}
        >
          <MenuItem value={10}>Bolali oilalar uchun nafaqa (0-14)</MenuItem>
          <MenuItem value={20}>Moddiy yordam</MenuItem>
          <MenuItem value={30}>Bolaga qarash bo'yicha nafaqa (0-2)</MenuItem>
          <MenuItem value={30}>Kam ta'minlangan oilalarga bolalar nafaqasi</MenuItem>
          <MenuItem value={30}>Kam ta'minlangan oilalarga moddiy yordam</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Stack direction="row" spacing={2}>
      <Button variant="primary">Tanlang</Button>
    </Stack>
      


 

       
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
