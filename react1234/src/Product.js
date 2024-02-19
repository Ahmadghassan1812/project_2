import Camera from "./camera";
import React from "react";
import fujifilm from './Fujifilm-X-S10_36242.jpg';
import sony from './Sony-A6100_23711.jpg';
import canon from './Canon-EOS-R10_57450.jpg';
import nikon from './nikon-z6ii_42502.jpg';
import './App.css';


function Products()  {
    return(
        <div className='product'>
        <div>
        <Camera src={fujifilm} discription='High-resolution imagery: Cameras offer detailed and sharp images, capturing scenes with exceptional clarity.'  brand='fujifilm'/>
        <Camera src={sony} discription='Versatile shooting modes: They provide a variety of shooting modes such as portrait, landscape, and night mode, catering to different photography needs.'  brand='sony'/>
        </div>
        <div>
        <Camera src={canon} discription=' Advanced autofocus: Cameras feature sophisticated autofocus systems for quick and accurate focusing, ensuring sharp images even in fast-paced situations.'  brand='canon'/>
        <Camera src={nikon} discription='Connectivity options: Many cameras come equipped with built-in Wi-Fi or Bluetooth, enabling seamless connectivity for easy sharing and remote controlز'  brand='nikon'/>
        </div>
        </div>
    );
}

export default Products;