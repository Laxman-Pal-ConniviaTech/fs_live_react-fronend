import React, { useState, useEffect } from "react";
import axios from "axios";

const FPOdetails = (props) => {


    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const [allStates, setAllStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    // const [taluka, setTaluka] = useState([]);
    const [village, setVillage] = useState([]);
  
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
    //   const getTaluka = async () => {
    //     const talukas = await axios.get(
    //       BASE_URL + "/v1/settings/business/taluka"
    //     );
    //     setTaluka(talukas.data.data);
    //   };
      const getVillage = async () => {
        const villages = await axios.get(
          BASE_URL + "/v1/settings/business/village"
        );
        setVillage(villages.data.data);
      };
      getAllStates();
      getDistrict();
    //   getTaluka();
      getVillage();
    }, [BASE_URL]);


  return (
    <div className="row g-3">
      <div className="col-md-2">
        <label className="form-label">Collection Center </label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="collection_center"
        >
          <option value="">--Select--</option>
          <option value="Yes">YES</option>
          <option value="No">NO</option>
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Email ID</label>
        <input
          type="email"
          className="form-control"
          name="fpo_email"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Company Reg. No</label>
        <input
          type="text"
          className="form-control"
          name="company_reg_no"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Organisation Name</label>
        <input
          type="text"
          className="form-control"
          name="organisation_name"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-8">
        <label className="form-label">Organisation Address</label>
        <textarea
          className="form-control"
          name="organisation_address"
          onChange={props.onChange}
          placeholder="Address"
          rows="1"
        ></textarea>
      </div>
      <div className="col-md-4">
        <label className="form-label">Organization CIN/ Reg No</label>
        <input
          type="text"
          className="form-control"
          name="organization_cni"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Org Pincode</label>
        <input
          type="text"
          className="form-control"
          name="org_pincode"
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Fpo State</label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="fpo_state"
        >
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
        <label className="form-label">Fpo District</label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="fpo_district"
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
        <label className="form-label">Fpo City/Village</label>
        <select
          onChange={props.onChange}
          className="form-control"
          name="fpo_city_village"
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
      <div className="col-md-4">
        <label className="form-label">Establishment Date</label>
        <input
          type="text"
          className="form-control"
          name="establishment_date"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default FPOdetails;
