import axios from "axios";

// Fetch data from API
const fetchData = async () => {
  const result = await axios.get("http://localhost:5000/api/someEndpoint");
  console.log(result.data);
};
