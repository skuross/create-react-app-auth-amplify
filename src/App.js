import React from "react";
import "./App.css";
import Amplify, { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

Amplify.configure({
  //Auth is the same as before
  Auth: {
    region: "eu-west-1",
    userPoolId: "eu-west-1_btBXyQgb0",
    userPoolWebClientId: "2pktc8ufthjn8lmj7uoqtscbk3",
  },
  // Add in our new API, "name" can be whatever we want
  API: {
    endpoints: [
      {
        name: "matching",
        endpoint:
          "https://api.skuuudle.cloud",
      },
    ],
  },
});

function App() {
  const [apiData, setApiData] = React.useState("");

  const handleClick = async () => {
    const data = await API.get("demo", "/local/", {
      headers: {
        "x-api-key": "NxeVUoKfXO1yAygYgc2L6aDNHdOpPkfm55XihMvT",
      },
    });
    setApiData(data.body);
  };
  return (
    <div className="App">
      <header className="App-header">
       <p>Response: {apiData}</p>
        <button onClick={handleClick}>Click Here to Generate Work!</button>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);