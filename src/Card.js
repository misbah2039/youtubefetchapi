import React from "react";

const Card = ({ finalData, channelId, setChannelId }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center bg-warning p-5">
            <select
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
            >
              <option value={"UCBwmMxybNva6P_5VmxjzwqA"}>Apna College</option>
              <option value={"UCeVMnSShP_Iviwkknt83cww"}>
                Code With Harry
              </option>
              <option value={"UCfgZg9Vl5AwedH14BYgLXTQ"}>SidTak</option>
              <option value={"UCvyssw6EYBCU8frRGBIAgDA"}>Sharique Jamal</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          {finalData.map((misbah,index) => {
            return (
              <div className="col overflow-auto" key={index}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Channel Image</th>
                      <th scope="col">Channel Name</th>
                      <th scope="col">Published Date</th>
                      <th scope="col">Views Count</th>
                      <th scope="col">Video Count</th>
                      <th scope="col">Subscriber Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Images</td>
                      <td>{misbah.brandingSettings.channel.title}</td>
                      <td>{misbah.snippet.publishedAt}</td>
                      <td>{misbah.statistics.viewCount}</td>
                      <td>{misbah.statistics.videoCount}</td>
                      <td>{misbah.statistics.subscriberCount}</td>
                    </tr>
                  </tbody>
                </table>
                {/* <div class="card bg-primary">
                  <div className="card-body text-center">
                    <h1>Channel Name</h1>
                    <p>{misbah.kind}</p>
                    <h1>Views Count</h1>
                    {misbah.statistics.viewCount}
                    <h1>Video Count</h1>
                    {misbah.statistics.videoCount}
                    <h1>Subscriber Count</h1>
                    {misbah.statistics.subscriberCount}
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
