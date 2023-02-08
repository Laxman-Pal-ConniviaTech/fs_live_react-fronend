import React from "react";
import axios from "axios";

const States = async () => {
  try {
    const stateData = await axios.get(
      "http://192.168.1.29/fs_live/api/v1/settings/business/state"
    );
    console.log('====================================');
    console.log(stateData);
    console.log('====================================');
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }

  return <div>
  </div>;
};

export default States;
