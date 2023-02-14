import React, { useEffect, useState } from "react";
import { fetchApi } from "./utils/fetchApi";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Card from "./Card"

const App = () => {
  const [channelId, setChannelId] = useState("UCBwmMxybNva6P_5VmxjzwqA");
  const [finalData, setFinalData] = useState([]);
  const getData = async () => {
    const response = await fetchApi(channelId);
    setFinalData(response.items);
    console.log(finalData);
  };
  useEffect(() => {
    getData();
  }, [channelId]);
  return (
    <Card
      finalData={finalData}
      channelId={channelId}
      setChannelId={setChannelId}
    />
  );
};

export default App;
