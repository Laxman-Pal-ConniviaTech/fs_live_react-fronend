import React, { useState, useEffect } from "react";
import axios from "axios";

const BasicDetails = (props) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [allStates, setAllStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [taluka, setTaluka] = useState([]);
  const [village, setVillage] = useState([]);
  const [ passVisi , setPassVisi ] = useState(false);
  const [ cpassVisi , setCPassVisi ] = useState(false);


  useEffect(() => {
    const getAllStates = async () => {
      const allStates = await axios.get(
        BASE_URL + "/v1/settings/business/state"
      );
      setAllStates(allStates.data.data);
    };

    const getDistrict = async () => {
      const districts = await axios.get(
        BASE_URL + "/v1/settings/business/district"
      );
      setDistricts(districts.data.data);
    };
    const getTaluka = async () => {
      const talukas = await axios.get(
        BASE_URL + "/v1/settings/business/taluka"
      );
      setTaluka(talukas.data.data);
    };
    const getVillage = async () => {
      const villages = await axios.get(
        BASE_URL + "/v1/settings/business/village"
      );
      setVillage(villages.data.data);
    };
    getAllStates();
    getDistrict();
    getTaluka();
    getVillage();
  }, [BASE_URL]);

  return (
    <div className="row g-3">
      <div className="col-md-2">
        <label className="form-label">Title</label>
        <select onChange={props.onChange} className="form-control" name="title">
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
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Middle Name</label>
        <input
          type="text"
          className="form-control"
          name="middlename"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          name="lastname"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Gender</label>
        <select
          onChange={props.onChange}
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
          type="date"
          className="form-control"
          name="dob"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Relation Type</label>
        <div className="input-group">
          <select
            className="form-control w-25"
            name="relation_type"
            onChange={props.onChange}
          >
            <option value="">Select</option>
            <option>Son Of</option>
            <option>Father Of</option>
          </select>
          <input
            type="text"
            className="form-control w-75"
            name="relation_name"
            onChange={props.onChange}
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
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Mobile</label>
        <input
          type="text"
          className="form-control"
          name="mobile"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <div className="input-group">
          <input
            type={passVisi ? "text" : "password"}
            className="form-control"
            name="password"
            onChange={props.onChange}
          />
          <button
            className="btn btn-sm btn-outline-secondary show-password"
            type="button"
            onClick={() => {setPassVisi(!passVisi)}}
          >
            <i className="bi bi-eye-slash"></i>
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <label className="form-label">Confirm Password</label>
        <div className="input-group">
          <input
            type={cpassVisi ? "text" : "password"}
            className="form-control"
            name="password_confirmation"
            onChange={props.onChange}
           
          />
          <button
            className="btn btn-sm btn-outline-secondary show-password"
            type="button"
            onClick={() => {setCPassVisi(!cpassVisi)}}
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
          onChange={props.onChange}
          placeholder="Address"
          rows="1"
        ></textarea>
      </div>
      <div className="col-md-4">
        <label className="form-label">State</label>
        <select onChange={props.onChange} className="form-control" name="state">
          <option value="">--Select--</option>
          {allStates.map((e, i) => {
            return (
              <option key={i} value={e.state_name}>
                {e.state_name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">District</label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="district"
        >
          <option value="">--Select--</option>
          {districts.map((e, i) => {
            return (
              <option key={i} value={e.district_name}>
                {e.district_name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Taluka</label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="taluka"
        >
          <option value="">--Select--</option>
          {taluka.map((e, i) => {
            return (
              <option key={i} value={e.taluka_name}>
                {e.taluka_name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Village</label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="village"
        >
          <option value="">--Select--</option>
          {village.map((e, i) => {
            return (
              <option key={i} value={e.village_name}>
                {e.village_name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default BasicDetails;
