import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from "axios";
const Registration = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const [data, setData] = useState({
    role: "",
    account_type: "",
    registerlevel: "",
    mandi_state: "",
    apmcname: "",
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    dob: "",
    relation_type: "",
    relation_name: "",
    email: "",
    mobile: "",
    password: "",
    password_confirmation: "",
    address: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
  });
const [allStates , setAllStates] = useState([]);
const [districts , setDistricts] = useState([]);
  // const sellerCategory = [ ,  ,  ,  ,  , ] ;

  // const [regCategory , setRegcategory] = useState("d-none")

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(`${name} : ${value}`);

  };

  useEffect(()=>{
    const getAllStates = async ()=>{
      try {
        const allStates = await axios.get(BASE_URL+"/api/v1/settings/business/state");
        setAllStates(allStates.data.data)
      } catch (error) {
        console.log(error);
      }
     }
    
    const getDistrict = async ()=>{
      try {
       const state_id = allStates.map(e=>{return e.state_name});
       const id = state_id.map(e=>{return e})
      const districts = await axios.get(BASE_URL+"/api/v1/settings/business/district") ;
      console.log(id);
      setDistricts(districts.data.data);
     } catch (error) {
      console.log(error);
     }
    }

    getAllStates();
    getDistrict();
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    // console.log(states());
    console.log("====================================");
  };

  return (
    <div id="app">
      <Navbar />
      <main className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-header fw-bold">Registration </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-5">
                        <label className="form-label">Registration Type</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="role"
                        >
                          <option value="">--Select--</option>
                          <option value="seller">Seller</option>
                          <option value="buyer">Buyer</option>
                          <option value="commission agent">
                            Commission Agent
                          </option>
                          <option value="service provider">
                            Service Provider
                          </option>
                        </select>
                      </div>
                      {/* {data.role === "seller" ? setRegcategory("d-block") } */}
                      <div
                        className={`col-md-5 ${
                          data.role === "seller" || data.role === "buyer"
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registration Category
                        </label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="account_type"
                        >
                          {data.role === "seller" ? (
                            <>
                              <option value="">--SELECT--</option>
                              <option value="Individual Farmer">
                                Individual Farmer
                              </option>
                              <option value="Farmer Producer Company (FPC)">
                                Farmer Producer Company (FPC)
                              </option>
                              <option value="Co-Operative">Co-Operative</option>
                              <option value="Farmer Group(SHG)">
                                Farmer Group(SHG)
                              </option>
                              <option value="Government Agency">
                                Government Agency
                              </option>
                              <option value="other">
                                Other(Aggregator etc.)
                              </option>
                            </>
                          ) : (
                            <>
                              <option>Select Please</option>
                              <option value="Trader">Trader</option>
                              <option value="Commission Agent">
                                Commission Agent
                              </option>
                              <option value="Co-Operative">Co-Operative</option>
                              <option value="Exporter">Exporter</option>
                              <option value="Processor">Processor</option>
                              <option value="Government Agency">
                                Government Agency
                              </option>
                              <option value="Retailor">Retailor</option>
                              <option value="Aggregator">Aggregator</option>
                              <option value="Other">Other</option>
                            </>
                          )}
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Registration Level</label>
                        <div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="registerlevel"
                              id="state_level"
                              value="state"
                              onChange={handleChange}
                            />
                            <label className="form-check-label">State</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="registerlevel"
                              onChange={handleChange}
                              id="mandi_level"
                              value="mandi"
                            />
                            <label className="form-check-label">Mandi</label>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`col-md-5 ${
                          data.registerlevel === "state" ||
                          data.registerlevel === "mandi"
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registered With State
                        </label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="mandi_state"
                        >
                          <option value="">--Select--</option>
                          {allStates.map((e , i)=>{
                           return <option key={i} value={e.state_name}>{e.state_name}</option>
                          })}
                        </select>
                      </div>
                      <div
                        className={`col-md-5 ${
                          data.registerlevel === "mandi" ? "d-block" : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registered With Mandi
                        </label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="apmcname"
                        >
                          <option value="">--Select--</option>
                          {districts.map((e , i)=>{
                            return <option key={i} value={e.district_name}>{e.district_name}</option>
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-header fw-bold">Basic Detail</div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-2">
                        <label className="form-label">Title</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="title"
                        >
                          <option value="">--Select--</option>
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Ms.</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Middle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="middlename"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Gender</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="gender"
                        >
                          <option value="">--Select--</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Date Of Birth</label>
                        <input
                          type="text"
                          className="form-control"
                          name="dob"
                          onChange={handleChange}
                          placeholder="DD/MM/YYYY"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Relation Type</label>
                        <div className="input-group">
                          <select
                            className="form-control w-25"
                            name="relation_type"
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            <option>Son Of</option>
                            <option>Father Of</option>
                          </select>
                          <input
                            type="text"
                            className="form-control w-75"
                            name="relation_name"
                            onChange={handleChange}
                            placeholder="Enter Relation Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Mobile</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary show-password"
                            type="button"
                          >
                            <i className="bi bi-eye-slash"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            name="password_confirmation"
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary show-password"
                            type="button"
                          >
                            <i className="bi bi-eye-slash"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Address</label>
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          name="address"
                          onChange={handleChange}
                          placeholder="Address"
                          rows="1"
                        ></textarea>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">State</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="state"
                        >
                          <option value="">State</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">District</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="district"
                        >
                          <option value="">District</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Taluka</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="taluka"
                        >
                          <option value="">taluka</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Village</label>
                        <select
                          onChange={handleChange}
                          className="form-control"
                          name="village"
                        >
                          <option value="">Village</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-header fw-bold">
                    FPO Organization Details
                  </div>
                  <div className="card-body"></div>
                  <button type="submit" className="btn btn-info">
                    Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;
