import axios from "axios";
// export const getAllStates  = async ({allStates})=>{
//     const [allStates , setAllStates] = useState([]);
//     try {
//       const allStates = await axios.get("http://192.168.1.29/fs_live/api/v1/settings/business/state");
//       setAllStates(allStates.data.data)
//     } catch (error) {
//       console.log('====================================');
//       console.log(error);
//       console.log('====================================');
//     }
//    };


export const buyerCategory = [
    {
      opt: "--SELECT--",
    },
    {
      opt: "Trader",
    },
    {
      opt: "Commission Agent",
    },
    {
      opt: "Co-Operative",
    },
    {
      opt: "Exporter",
    },
    {
      opt: "Processor",
    },
    {
      opt: "Government Agency",
    },
    {
        opt:"Retailor"
    },
    {
        opt:"Aggregator"
    },
    {}
  ];