import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { formInitialData } from "../components/data";
import BasicDetails from "../components/BasicDetails";
import FPOdetails from "../components/FPOdetails";
import Bank from "../components/Bank";
const Registration = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState(formInitialData);
  const [allStates, setAllStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(`${name} : ${value}`);
  };

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

    getAllStates();
    getDistrict();
  }, [BASE_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(data);
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
                          {allStates.map((e, i) => {
                            return (
                              <option key={i} value={e.state_name}>
                                {e.state_name}
                              </option>
                            );
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
                          {districts.map((e, i) => {
                            return (
                              <option key={i} value={e.district_name}>
                                {e.district_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-header fw-bold">Basic Detail</div>
                  <div className="card-body">
                    <BasicDetails onChange={handleChange} />
                  </div>
                  <div className={`card-header fw-bold ${
                          data.account_type === "Farmer Producer Company (FPC)" ? "d-block"
                            : "d-none"
                        }`}>
                    FPO Organization Details
                  </div>
                  <div className={`card-body ${
                          data.account_type === "Farmer Producer Company (FPC)" ? "d-block"
                            : "d-none"
                        }`}>
                    <FPOdetails onChange={handleChange} />
                  </div>
                  <div className="card-header fw-bold">
                    Bank Details
                  </div>
                  <div className="card-body">
                    <Bank onChange={handleChange} />
                  </div>
                  <div className={`card-body ${
                          data.account_type === "Farmer Producer Company (FPC)" ? "d-block"
                            : "d-none"
                        }`}>
                    <div className="col-md-6">
                      <label className="form-label">
                      Upload Company Registration Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="company_registration_certificate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
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
