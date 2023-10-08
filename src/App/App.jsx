import "./App.css";
import React, { useState } from "react";
import Bar from "../sidebar/SideNav";
import SearchAppBar from "../SearchFolder/Search";
import Profile from "../Content/profile";
import Graph from "../Content/graph";
import Video from "../Content/Videos";
import Job_finder from "../Content/jobfinder";
import Discovery from "../Content/discover";
import Stores from "../Content/store";
import {Box } from "@mui/material";

const Contents = [
  <Profile />,
  <Graph />,
  <Video />,
  ,
  <Job_finder />,
  <Discovery />,
  <Stores />,
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="App">
        <SearchAppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            width: "100% ",
            marginTop: 8,
          }}
        >
          <Bar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          <Box
            sx={{
              marginTop: 8,
            }}
          >
            {Contents[currentIndex]}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;
