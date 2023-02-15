import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// const schema = yup.object({
//   role : yup.string().required(),
//   account_type : yup.string(),
//   email : yup.string().email().required(),
//   mobile : yup.number().positive().integer().required(),
//   password : yup.string().required(),
//   password_confirmation : yup.string().oneOf([yup.ref("password") , null]).required(),
//   registerlevel : yup.string(),
//   mandi_state : yup.string(),
//   // apmcname,
//   // title,
//   // firstname,
//   // middlename,
//   // lastname,
//   // gender,
//   // dob,
//   // relation_type,
//   // relation_name,
//   // address,
//   // state,
//   // district,
//   // taluka,
//   // village,
//   // collection_center,
//   // fpo_email,
//   // company_reg_no,
//   // organisation_name,
//   // organisation_address,
//   // organization_cin,
//   // org_pincode,
//   // fpo_state,
//   // fpo_district,
//   // fpo_city_village,
//   // establishment_date,
//   // bank_name,
//   // acc_holder_name,
//   // bank_acc_num,
//   // confirm_bank_acc_num,
//   // ifsc_code,
//   // confirm_ifsc_code,
// })

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [allStates, setAllStates] = useState([]);
  const [apmc, setApmc] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [fetchtaluka, setFetchTaluka] = useState([]);
  const [fetchvillage, setFetchVillage] = useState([]);
  const [passVisi, setPassVisi] = useState(false);
  const [cpassVisi, setCPassVisi] = useState(false);
 
  const {
    role,
    account_type,
    email,
    mobile,
    password,
    password_confirmation,
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
    bank_name,
    acc_holder_name,
    bank_acc_num,
    confirm_bank_acc_num,
    ifsc_code,
    confirm_ifsc_code,
    passbook_copy,
    pic,
    company_registration_certificate,
  } = watch();

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
      setApmc(apmc.data.data);
    };
    getAllStates();
    getapmc();
    getDistrict();
    getTaluka();
    getVillage();
  }, [BASE_URL]);

  const Submit = (data) => {
    const formData = {
      role: data.role,
      account_type: data.account_type,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      password_confirmation: data.password_confirmation,
      basicDetails : {
        registerlevel: data.registerlevel,
        mandi_state: data.mandi_state,
        apmcname: data.apmcname,
        title: data.title,
        firstname:data.firstname,
        middlename: data.middlename,
        lastname: data.lastname,
        gender: data.gender,
        dob: data.dob,
        relation_type: data.relation_type,
        relation_name: data.relation_name,
        address: data.address,
        state: data.state,
        district: data.district,
        taluka: data.taluka,
        village: data.village,
      },
      fpo : {
        collection_center: data.collection_center,
        fpo_email: data.fpo_email,
        company_reg_no: data.company_reg_no,
        organisation_name: data.organisation_name,
        organisation_address: data.organisation_address,
        organization_cin: data.organization_cin,
        org_pincode: data.org_pincode,
        fpo_state: data.fpo_state,
        fpo_district: data.fpo_district,
        fpo_city_village: data.fpo_city_village,
        establishment_date: data.establishment_date,
      },
      bankInitialDetails : {
        bank_name: data.bank_name,
        acc_holder_name: data.acc_holder_name,
        bank_acc_num: data.bank_acc_num,
        confirm_bank_acc_num: data.confirm_bank_acc_num,
        ifsc_code: data.ifsc_code,
        confirm_ifsc_code: data.confirm_ifsc_code,
        passbook_copy: data.passbook_copy,
        pic: data.pic,
        company_registration_certificate: data.company_registration_certificate,
      }
    }

    // console.log('====================================');
    // console.log(yup);
    // console.log('====================================');
    // axios({
    //   method: "POST",
    //   url: BASE_URL + "/v1/register",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then((res) => {
    //     console.log("====================================");
        console.log(formData);
        console.log(mandi_state.toLowerCase().replace(/\s+/g, '-'));
    //     console.log("====================================");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div id="app">
      <Navbar />
      <main className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <form onSubmit={handleSubmit(Submit)}>
                <div className="card">
                  <div className="card-header fw-bold">Registration </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-5">
                        <label className="form-label">
                          Registration Type
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("role", {
                            required: {
                              value: true,
                              message: "Please select Registration type.",
                            },
                          })}
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
                        <span className="text-danger">
                          {errors.role?.message}
                        </span>
                      </div>
                      <div
                        className={`col-md-5 ${
                          role === "seller" || role === "buyer"
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        <label className="form-label">
                          Registration Category
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("account_type", {
                            required: {
                              value:
                                role === "seller" || role === "buyer"
                                  ? true
                                  : false,
                              message: "Please select Account type.",
                            },
                          })}
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
                              <option value="">--SELECT--</option>
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
                        <span className="text-danger">
                          {errors.account_type?.message}
                        </span>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Registration Level
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="state_level"
                              onClick={() =>
                                reset((formValues) => ({
                                  ...formValues,
                                  apmcname: "",
                                  registerlevel: "state",
                                }))
                              }
                              value="state"
                              {...register("registerlevel")}
                            />
                            <label className="form-check-label">State</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="mandi_level"
                              value="mandi"
                              {...register("registerlevel")}
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
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("mandi_state", {
                            required: {
                              value: true,
                              message: "Please Select State",
                            },
                          })}
                        >
                          <option value="">--Select--</option>
                          {allStates.map((e) => {
                            return (
                              <option key={e.id} value={e.state_name}>
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
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("apmcname", {
                            required: {
                              value: registerlevel === "mandi" ? true : false,
                              message: "Please fill this field.",
                            },
                          })}
                        >
                          <option value="">--Select--</option>
                          {apmc.map((e) => {
                            return (
                              <option key={e.id} value={e.name}>
                                {e.name}
                              </option>
                            );
                          })}
                        </select>
                        <span className="text-danger">
                          {errors.apmcname?.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-header fw-bold">Basic Detail</div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-2">
                        <label className="form-label">
                          Title <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("title", {
                            required: "Please select name title.",
                          })}
                        >
                          <option value="">--Select--</option>
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Ms.</option>
                        </select>
                        <span className="text-danger">
                          {errors.title?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          First Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("firstname", {
                            required: "Please enter first name.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.firstname?.message}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Middle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("middlename")}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Last Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lastname", {
                            required: "Please enter middle name.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.lastname?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Gender <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("gender", {
                            required: "Please fill this field.",
                          })}
                        >
                          <option value="">--Select--</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                        <span className="text-danger">
                          {errors.gender?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Date Of Birth <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          {...register("dob", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.dob?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Relation Type <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <select
                            className="form-control w-25"
                            {...register("relation_type", {
                              required: "Please fill this field.",
                            })}
                          >
                            <option value="">Select</option>
                            <option>Son Of</option>
                            <option>Father Of</option>
                          </select>
                          <input
                            type="text"
                            className="form-control w-75"
                            placeholder="Enter Relation Name"
                            {...register("relation_name", {
                              required: "Please fill this field.",
                            })}
                          />
                        </div>
                        <span className="text-danger">
                          {errors.relation_type?.message}
                        </span>
                        <span className="text-danger">
                          {errors.relation_name?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("email", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.email?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Mobile <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("mobile", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.mobile?.message}
                        </span>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Password <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type={passVisi ? "text" : "password"}
                            className="form-control"
                            {...register("password", {
                              required: {
                                // value  : password === password_confirmation && !password ? true : false
                                value: true,
                              },
                            })}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary show-password"
                            type="button"
                            onClick={() => {
                              setPassVisi(!passVisi);
                            }}
                          >
                            <i
                              className={`bi bi-eye${passVisi ? "" : "-slash"}`}
                            ></i>
                          </button>
                        </div>
                        <span className="text-danger">
                          {errors.password?.message}
                        </span>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Confirm Password
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type={cpassVisi ? "text" : "password"}
                            className="form-control"
                            {...register("password_confirmation", {
                              required: true,
                            })}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary show-password"
                            type="button"
                            onClick={() => {
                              setCPassVisi(!cpassVisi);
                            }}
                          >
                            <i
                              className={`bi bi-eye${
                                cpassVisi ? "" : "-slash"
                              }`}
                            ></i>
                          </button>
                        </div>
                        <span className="text-danger">
                          {errors.password_confirmation?.message}
                        </span>
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">
                          Address <span style={{ color: "red" }}>*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          rows="1"
                          {...register("address", {
                            required: "Please fill this field.",
                          })}
                        ></textarea>
                        <span className="text-danger">
                          {errors.address?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          State <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("state", {
                            required: "Please fill this field.",
                          })}
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
                        <span className="text-danger">
                          {errors.state?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          District <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("district", {
                            required: "Please fill this field.",
                          })}
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
                        <span className="text-danger">
                          {errors.district?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Taluka <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("taluka", {
                            required: "Please fill this field.",
                          })}
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
                        <span className="text-danger">
                          {errors.taluka?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Village <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("village", {
                            required: "Please fill this field.",
                          })}
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
                        <span className="text-danger">
                          {errors.village?.message}
                        </span>
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
                        <label className="form-label">
                          Collection Center
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("collection_center", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                            },
                          })}
                        >
                          <option value="">--Select--</option>
                          <option value="Yes">YES</option>
                          <option value="No">NO</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Email ID <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("fpo_email", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
                        />
                        <span className="text-danger">
                          {errors.fpo_email?.message}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Company Reg. No
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("company_reg_no", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
                        />
                        <span className="text-danger">
                          {errors.company_reg_no?.message}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Organisation Name
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("organisation_name", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
                        />
                        <span className="text-danger">
                          {errors.organisation_name?.message}
                        </span>
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">
                          Organisation Address
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          rows="1"
                          {...register("organisation_address", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
                        ></textarea>
                        <span className="text-danger">
                          {errors.organisation_address?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Organization CIN/ Reg No
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("organization_cin", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please enter Org Cin No.",
                            },
                          })}
                        />
                        <span className="text-danger">
                          {errors.organization_cin?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Org Pincode<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("org_pincode", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                            },
                            message: "Please enter pin code.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.org_pincode?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Fpo State<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("fpo_state", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
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
                        <span className="text-danger">
                          {errors.fpo_state?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Fpo District<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("fpo_district", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
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
                        <span className="text-danger">
                          {errors.fpo_district?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Fpo City/Village
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          {...register("fpo_city_village", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
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
                        <span className="text-danger">
                          {errors.fpo_city_village?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Establishment Date
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          {...register("establishment_date", {
                            required: {
                              value:
                                account_type === "Farmer Producer Company (FPC)"
                                  ? true
                                  : false,
                              message: "Please fill this field.",
                            },
                          })}
                        />
                      </div>
                      <span className="text-danger">
                        {errors.establishment_date?.message}
                      </span>
                    </div>
                  </div>
                  <div className="card-header fw-bold">Bank Details</div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-2">
                        <label className="form-label">
                          Bank Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("bank_name", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.bank_name?.message}
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Account Holder Name as per Bank A/C
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("acc_holder_name", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.acc_holder_name?.message}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Bank Account No<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("bank_acc_num", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.bank_acc_num?.message}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Confirm Account No
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("confirm_bank_acc_num", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.confirm_bank_acc_num?.message}
                        </span>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          IFSC Code<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("ifsc_code", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.ifsc_code?.message}
                        </span>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Confirm IFSC Code
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("confirm_ifsc_code", {
                            required: "Please fill this field.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.confirm_ifsc_code?.message}
                        </span>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Upload Copy Of Passbook/Cancelled Check in Support
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          {...register("passbook_copy")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Upload One Scan Copy Of Id Proof
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          {...register("pic")}
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
                        {...register("company_registration_certificate")}
                      />
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
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
