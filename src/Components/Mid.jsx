import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { TiLocationArrow } from "react-icons/ti";
import {ImLocation} from 'react-icons/im'
import axios from "axios";



export const Mid = () => {
  const [current, setcurrent] = useState([])
  const [places, setplaces] = useState([])
  const [location, setlocation] = useState("")
  console.log(places);
  const getData=()=>{
    axios.get(`https://devapi.wtfup.me/gym/places`).then((res)=>{
      // console.log(res.data.data[0].addressComponent);
      // setcurrent(res.data)
      setplaces(res.data)
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  
  const HandleLocation =()=>{
    console.log("handle");
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=${position.coords.latitude}&long=${position.coords.longitude}`).then((res)=>{
        // console.log(res.data.data);
        setcurrent(res.data)
      }).catch((err)=>{
        console.log(err.message);
      })
    });
  }

  useEffect(() => {
    getData()
  }, [location])

  return (
    <>
    <div className="container my-5">
      <div className="m-auto border p-1">
        <div class="input-group">
          <div class="input-group-prepend border rounded" >
            <span class="input-group-text text-white" style={{backgroundColor:"#920909"}}><FiSearch /></span>
          </div>
          <input
            type="text"
            class="form-control border-0"
            aria-label="Amount (to the nearest dollar)"
            onChange={(e)=>{setlocation(e.target.value)}}
          />
          <div class="input-group-append border rounded">
            <button class="input-group-text text-white btn-danger" onClick={HandleLocation} style={{backgroundColor:"#920909"}}><ImLocation/></button>
          </div>

          <div class="input-group-append rounded ml-2">
            <span class="input-group-text text-white" style={{backgroundColor:"#920909"}}>Clear</span>
          </div>
        </div>
      </div>
    </div>

    <div className="row m-0  text-white p-2">
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12" style={{position:"sticky", top:"0",height:"100vh"}}>
        <h2 className="mt-5">Filters</h2>
        <div className="mt-4">
          <h6>Location</h6>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text border-right-0" id="basic-addon1">
                <FiSearch />
              </span>
            </div>
            <input
              type="text"
              class="form-control border-left-0 "
              placeholder="Enter Location"
            />
          </div>
        </div>
        <div class="mt-4">
          <h6>Price</h6>
          <div class="input-group twoinputno">
            <input
              type="number"
              class="twoinput form-control"
              placeholder="Min"
              />
            <input
              type="number"
              class=" form-control twoinput "
              placeholder="Max"
              />
          </div>
        </div>
        <div class="mt-4">
          <h6>Cities</h6>
          <select class="custom-select">
            <option selected>Select Cities</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12  rightdarkpart round ">
{current && current.data?.map((item)=>(
        <div>
          <div className="row  sepeatediv">
            <div className="col-5 ">
              <div className="freetag">
                <p>Free</p>
              </div>
            </div>
            <div className="col-7 ">
              <div className="rightmainside mt-2 ">
                <div>
                  <h4>{item.gym_name}</h4>
                  <h6>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </h6>
                  <h6>{item.address1}, {item.address2}, {item.state}</h6>
                  <div className="iconsloc">
                    <h6>
                      <TiLocationArrow className="text-success iconsloc" />
                    </h6>
                    <h6> {item.duration_text} |{item.distance_text}</h6>
                  </div>
                </div>
                <div className="bookknow">
                  <h5 className="text-warning">₹ 3500 for 3 Months</h5>
                  <button class="btn btn-danger ">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
))}

{/* {places.length===0 && places?.data[0]?.addressComponent?.map((item)=>(
        <div>
          <div className="row  sepeatediv">
            <div className="col-5 ">
              <div className="freetag">
                <p>Free</p>
              </div>
            </div>
            <div className="col-7 ">
              <div className="rightmainside mt-2 ">
                <div>
                  <h4>{item.gym_name}</h4>
                  <h6>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </h6>
                  <h6>{item.address1}, {item.address2}, {item.state}</h6>
                  <div className="iconsloc">
                    <h6>
                      <TiLocationArrow className="text-success iconsloc" />
                    </h6>
                    <h6> {item.duration_text} |{item.distance_text}</h6>
                  </div>
                </div>
                <div className="bookknow">
                  <h5 className="text-warning">₹ 3500 for 3 Months</h5>
                  <button class="btn btn-danger ">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
))} */}

      </div>
    </div>
              </>
  );
};
