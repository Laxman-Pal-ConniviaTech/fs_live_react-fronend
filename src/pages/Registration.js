import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
const Registration = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [allStates, setAllStates] = useState([]);
  const [apmc, setApmc] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [fetchtaluka, setFetchTaluka] = useState([]);
  const [fetchvillage, setFetchVillage] = useState([]);
  const [passVisi, setPassVisi] = useState(false);
  const [cpassVisi, setCPassVisi] = useState(false);
  const [role, setrole] = useState("");
  const [account_type, setaccount_type] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [registerlevel, setregisterlevel] = useState("");
  const [mandi_state, setmandi_state] = useState("");
  const [apmcname, setapmcname] = useState("");
  const [title, settitle] = useState("");
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [relation_type, setrelation_type] = useState("");
  const [relation_name, setrelation_name] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [taluka, settaluka] = useState("");
  const [village, setvillage] = useState("");
  const [collection_center, setcollection_center] = useState("");
  const [fpo_email, setfpo_email] = useState("");
  const [company_reg_no, setcompany_reg_no] = useState("");
  const [organisation_name, setorganisation_name] = useState("");
  const [organisation_address, setorganisation_address] = useState("");
  const [organization_cin, setorganization_cin] = useState("");
  const [org_pincode, setorg_pincode] = useState("");
  const [fpo_state, setfpo_state] = useState("");
  const [fpo_district, setfpo_district] = useState("");
  const [fpo_city_village, setfpo_city_village] = useState("");
  const [establishment_date, setestablishment_date] = useState("");
  const [bank_name, setbank_name] = useState("");
  const [acc_holder_name, setacc_holder_name] = useState("");
  const [bank_acc_num, setbank_acc_num] = useState("");
  const [confirm_bank_acc_num, setconfirm_bank_acc_num] = useState("");
  const [ifsc_code, setifsc_code] = useState("");
  const [confirm_ifsc_code, setconfirm_ifsc_code] = useState("");
  const [passbook_copy, setpassbook_copy] = useState("");
  const [pic, setpic] = useState("");
  const [
    company_registration_certificate,
    setcompany_registration_certificate,
  ] = useState("");

  // const clearapmc = () => {
  //   setapmcname(...initApmcname);
  // };

  const handlerole = (e) => {
    const { name, value } = e.target;
    setrole(value);
    console.log(name, value);
  };
  const handleaccount_type = (e) => {
    const { name, value } = e.target;
    setaccount_type(value);
    console.log(name, value);
  };
  const handleemail = (e) => {
    const { name, value } = e.target;
    setemail(value);
    console.log(name, value);
  };
  const handlemobile = (e) => {
    const { name, value } = e.target;
    setmobile(value);
    console.log(name, value);
  };
  const handlepassword = (e) => {
    const { name, value } = e.target;
    setpassword(value);
    console.log(name, value);
  };
  const handlepassword_confirmation = (e) => {
    const { name, value } = e.target;
    setPassword_confirmation(value);
    console.log(name, value);
  };
  const handleregisterlevel = (e) => {
    const { name, value } = e.target;
    setregisterlevel(value);
    console.log(name, value);
  };
  const handlemandi_state = (e) => {
    const { name, value } = e.target;
    setmandi_state(value);
    console.log(name, value);
  };
  const handleapmcname = (e) => {
    const { name, value } = e.target;
    setapmcname(value);
    console.log(name, value);
  };
  const handletitle = (e) => {
    const { name, value } = e.target;
    settitle(value);
    console.log(name, value);
  };
  const handlefirstname = (e) => {
    const { name, value } = e.target;
    setfirstname(value);
    console.log(name, value);
  };
  const handlemiddlename = (e) => {
    const { name, value } = e.target;
    setmiddlename(value);
    console.log(name, value);
  };
  const handlelastname = (e) => {
    const { name, value } = e.target;
    setlastname(value);
    console.log(name, value);
  };
  const handlegender = (e) => {
    const { name, value } = e.target;
    setgender(value);
    console.log(name, value);
  };
  const handledob = (e) => {
    const { name, value } = e.target;
    setdob(value);
    console.log(name, value);
  };
  const handlerelation_type = (e) => {
    const { name, value } = e.target;
    setrelation_type(value);
    console.log(name, value);
  };
  const handlerelation_name = (e) => {
    const { name, value } = e.target;
    setrelation_name(value);
    console.log(name, value);
  };
  const handleaddress = (e) => {
    const { name, value } = e.target;
    setaddress(value);
    console.log(name, value);
  };
  const handlestate = (e) => {
    const { name, value } = e.target;
    setstate(value);
    console.log(name, value);
  };
  const handledistrict = (e) => {
    const { name, value } = e.target;
    setdistrict(value);
    console.log(name, value);
  };
  const handletaluka = (e) => {
    const { name, value } = e.target;
    settaluka(value);
    console.log(name, value);
  };
  const handlevillage = (e) => {
    const { name, value } = e.target;
    setvillage(value);
    console.log(name, value);
  };
  const handlecollection_center = (e) => {
    const { name, value } = e.target;
    setcollection_center(value);
    console.log(name, value);
  };
  const handlefpo_email = (e) => {
    const { name, value } = e.target;
    setfpo_email(value);
    console.log(name, value);
  };
  const handlecompany_reg_no = (e) => {
    const { name, value } = e.target;
    setcompany_reg_no(value);
    console.log(name, value);
  };
  const handleorganisation_name = (e) => {
    const { name, value } = e.target;
    setorganisation_name(value);
    console.log(name, value);
  };
  const handleorganisation_address = (e) => {
    const { name, value } = e.target;
    setorganisation_address(value);
    console.log(name, value);
  };
  const handleorganization_cin = (e) => {
    const { name, value } = e.target;
    setorganization_cin(value);
    console.log(name, value);
  };
  const handleorg_pincode = (e) => {
    const { name, value } = e.target;
    setorg_pincode(value);
    console.log(name, value);
  };
  const handlefpo_state = (e) => {
    const { name, value } = e.target;
    setfpo_state(value);
    console.log(name, value);
  };
  const handlefpo_district = (e) => {
    const { name, value } = e.target;
    setfpo_district(value);
    console.log(name, value);
  };
  const handlefpo_city_village = (e) => {
    const { name, value } = e.target;
    setfpo_city_village(value);
    console.log(name, value);
  };
  const handleestablishment_date = (e) => {
    const { name, value } = e.target;
    setestablishment_date(value);
    console.log(name, value);
  };
  const handlebank_name = (e) => {
    const { name, value } = e.target;
    setbank_name(value);
    console.log(name, value);
  };
  const handleacc_holder_name = (e) => {
    const { name, value } = e.target;
    setacc_holder_name(value);
    console.log(name, value);
  };
  const handlebank_acc_num = (e) => {
    const { name, value } = e.target;
    setbank_acc_num(value);
    console.log(name, value);
  };
  const handleconfirm_bank_acc_num = (e) => {
    const { name, value } = e.target;
    setconfirm_bank_acc_num(value);
    console.log(name, value);
  };
  const handleifsc_code = (e) => {
    const { name, value } = e.target;
    setifsc_code(value);
    console.log(name, value);
  };
  const handleconfirm_ifsc_code = (e) => {
    const { name, value } = e.target;
    setconfirm_ifsc_code(value);
    console.log(name, value);
  };
  const handlepassbook_copy = (e) => {
    const { name, value } = e.target;
    setpassbook_copy(value);
    console.log(name, value);
  };
  const handlepic = (e) => {
    const { name, value } = e.target;
    setpic(value);
    console.log(name, value);
  };
  const handlecompany_registration_certificate = (e) => {
    const { name, value } = e.target;
    setcompany_registration_certificate(value);
    console.log(name, value);
  };

  const formData = {
    user: {
      role,
      account_type,
      email,
      mobile,
      password,
      password_confirmation,
    },
    basicDetails: {
      registerlevel,
      mandi_state,
      apmcname,
      title,
      firstname,
      middlename,
      lastname,
      gender,
      dob,
      relation_type,
      relation_name,
      address,
      state,
      district,
      taluka,
      village,
    },
    bankDetails: {
      bank_name,
      acc_holder_name,
      bank_acc_num,
      confirm_bank_acc_num,
      ifsc_code,
      confirm_ifsc_code,
      passbook_copy,
      pic,
      company_registration_certificate,
    },
    fpo: {
      collection_center,
      fpo_email,
      company_reg_no,
      organisation_name,
      organisation_address,
      organization_cin,
      org_pincode,
      fpo_state,
      fpo_district,
      fpo_city_village,
      establishment_date,
    },
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
    const getTaluka = async () => {
      const talukas = await axios.get(
        BASE_URL + "/v1/settings/business/taluka"
      );
      setFetchTaluka(talukas.data.data);
    };
    const getVillage = async () => {
      const villages = await axios.get(
        BASE_URL + "/v1/settings/business/village"
      );
      setFetchVillage(villages.data.data);
    };

    const getapmc = async () => {
      const apmc = await axios.get(BASE_URL + "/v1/settings/business/apmc");
      console.log(apmc.data.data);
      setApmc(apmc.data.data);
    };
    getAllStates();
    getapmc();
    getDistrict();
    getTaluka();
    getVillage();
  }, [BASE_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: BASE_URL + "/v1/register",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log("====================================");
        console.log(formData);
        console.log("====================================");
      })
      .catch((err) => {
        console.log(err);
      });
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
                          onChange={handlerole}
                          className="form-control"
                          name="role"
                          value={role}
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
                          role === "seller" || role === "buyer"
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registration Category
                        </label>
                        <select
                          onChange={handleaccount_type}
                          className="form-control"
                          name="account_type"
                          value={account_type}
                        >
                          {role === "seller" ? (
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
                              onClick={() => setapmcname("")}
                              value="state"
                              onChange={handleregisterlevel}
                            />
                            <label className="form-check-label">State</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="registerlevel"
                              onChange={handleregisterlevel}
                              id="mandi_level"
                              value="mandi"
                            />
                            <label className="form-check-label">Mandi</label>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`col-md-5 ${
                          registerlevel === "state" || registerlevel === "mandi"
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registered With State
                        </label>
                        <select
                          onChange={handlemandi_state}
                          className="form-control"
                          name="mandi_state"
                          value={mandi_state}
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
                          registerlevel === "mandi" ? "d-block" : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registered With Mandi
                        </label>
                        <select
                          className="form-control"
                          name="apmcname"
                          value={apmcname}
                          onChange={handleapmcname}
                        >
                          <option value="">--Select--</option>
                          {apmc.map((e, i) => {
                            return (
                              <option key={i} value={e.name}>
                                {e.name}
                              </option>
                            );
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
                          onChange={handletitle}
                          className="form-control"
                          name="title"
                          value={title}
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
                          onChange={handlefirstname}
                          value={firstname}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Middle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="middlename"
                          onChange={handlemiddlename}
                          value={middlename}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          onChange={handlelastname}
                          value={lastname}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Gender</label>
                        <select
                          onChange={handlegender}
                          className="form-control"
                          name="gender"
                          value={gender}
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
                          onChange={handledob}
                          value={dob}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Relation Type</label>
                        <div className="input-group">
                          <select
                            className="form-control w-25"
                            name="relation_type"
                            onChange={handlerelation_type}
                            value={relation_type}
                          >
                            <option value="">Select</option>
                            <option>Son Of</option>
                            <option>Father Of</option>
                          </select>
                          <input
                            type="text"
                            className="form-control w-75"
                            name="relation_name"
                            onChange={handlerelation_name}
                            placeholder="Enter Relation Name"
                            value={relation_name}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleemail}
                          value={email}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Mobile</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          onChange={handlemobile}
                          value={mobile}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                          <input
                            type={passVisi ? "text" : "password"}
                            className="form-control"
                            name="password"
                            onChange={handlepassword}
                            value={password}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary show-password"
                            type="button"
                            onClick={() => {
                              setPassVisi(!passVisi);
                            }}
                          >
                            <i className={`bi bi-eye${passVisi ? "": "-slash"}`}></i>
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
                            onChange={handlepassword_confirmation}
                            value={password_confirmation}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary show-password"
                            type="button"
                            onClick={() => {
                              setCPassVisi(!cpassVisi);
                            }}
                          >
                             <i className={`bi bi-eye${cpassVisi ? "": "-slash"}`}></i>
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
                          onChange={handleaddress}
                          placeholder="Address"
                          rows="1"
                          value={address}
                        ></textarea>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">State</label>
                        <select
                          onChange={handlestate}
                          className="form-control"
                          name="state"
                          value={state}
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
                        <label className="form-label">District</label>
                        <select
                          onChange={handledistrict}
                          className="form-control"
                          name="district"
                          value={district}
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
                          onChange={handletaluka}
                          className="form-control"
                          name="taluka"
                          value={taluka}
                        >
                          <option value="">--Select--</option>
                          {fetchtaluka.map((e, i) => {
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
                          onChange={handlevillage}
                          className="form-control"
                          name="village"
                          value={village}
                        >
                          <option value="">--Select--</option>
                          {fetchvillage.map((e, i) => {
                            return (
                              <option key={i} value={e.village_name}>
                                {e.village_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`card-header fw-bold ${
                      account_type === "Farmer Producer Company (FPC)"
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    FPO Organization Details
                  </div>
                  <div
                    className={`card-body ${
                      account_type === "Farmer Producer Company (FPC)"
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    <div className="row g-3">
                      <div className="col-md-2">
                        <label className="form-label">Collection Center </label>
                        <select
                          onChange={handlecollection_center}
                          className="form-control"
                          name="collection_center"
                          value={collection_center}
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
                          onChange={handlefpo_email}
                          value={fpo_email}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Company Reg. No</label>
                        <input
                          type="text"
                          className="form-control"
                          name="company_reg_no"
                          onChange={handlecompany_reg_no}
                          value={company_reg_no}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Organisation Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="organisation_name"
                          onChange={handleorganisation_name}
                          value={organisation_name}
                        />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">
                          Organisation Address
                        </label>
                        <textarea
                          className="form-control"
                          name="organisation_address"
                          onChange={handleorganisation_address}
                          placeholder="Address"
                          rows="1"
                          value={organisation_address}
                        ></textarea>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Organization CIN/ Reg No
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="organization_cin"
                          onChange={handleorganization_cin}
                          value={organization_cin}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Org Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          name="org_pincode"
                          onChange={handleorg_pincode}
                          value={org_pincode}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Fpo State</label>
                        <select
                          onChange={handlefpo_state}
                          className="form-control"
                          name="fpo_state"
                          value={fpo_state}
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
                          onChange={handlefpo_district}
                          className="form-control"
                          name="fpo_district"
                          value={fpo_district}
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
                          onChange={handlefpo_city_village}
                          className="form-control"
                          name="fpo_city_village"
                          value={fpo_city_village}
                        >
                          <option value="">--Select--</option>
                          {fetchvillage.map((e, i) => {
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
                          onChange={handleestablishment_date}
                          value={establishment_date}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-header fw-bold">Bank Details</div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-2">
                        <label className="form-label">Bank Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="bank_name"
                          onChange={handlebank_name}
                          value={bank_name}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Account Holder Name as per Bank A/C
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="acc_holder_name"
                          onChange={handleacc_holder_name}
                          value={acc_holder_name}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Bank Account No</label>
                        <input
                          type="text"
                          className="form-control"
                          name="bank_acc_num"
                          onChange={handlebank_acc_num}
                          value={bank_acc_num}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Confirm Account No</label>
                        <input
                          type="text"
                          className="form-control"
                          name="confirm_bank_acc_num"
                          onChange={handleconfirm_bank_acc_num}
                          value={confirm_bank_acc_num}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">IFSC Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="ifsc_code"
                          onChange={handleifsc_code}
                          value={ifsc_code}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Confirm IFSC Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="confirm_ifsc_code"
                          onChange={handleconfirm_ifsc_code}
                          value={confirm_ifsc_code}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Upload Copy Of Passbook/Cancelled Check in Support
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="passbook_copy"
                          onChange={handlepassbook_copy}
                          value={passbook_copy}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Upload One Scan Copy Of Id Proof
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="pic"
                          onChange={handlepic}
                          value={pic}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`card-body ${
                      account_type === "Farmer Producer Company (FPC)"
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    <div className="col-md-6">
                      <label className="form-label">
                        Upload Company Registration Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="company_registration_certificate"
                        onChange={handlecompany_registration_certificate}
                        value={company_registration_certificate}
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
