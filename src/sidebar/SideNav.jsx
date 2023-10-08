import React, { useState } from "react";
import "./SideNav.css";
import { SidebarData } from "./SideData";
import { Box } from "@mui/material";

export default function Bar({ currentIndex, setCurrentIndex }) {
  console.log(currentIndex);

  return (
    <Box
      sx={{
        width: 100,
        height: "100vh",
        backgroundColor: "#2f3136",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
	}}
	m={0}
    >
      <Box component={"ul"} sx={{
		height: "100%",
		padding: 0,
		width: "90%",
	  }}>
        {SidebarData.map((val, key) => {
          return (
            <Box key={key} sx={{
				height: 80,
				width: "100%",
				padding: 0,
				margin: "0%",
				listStyleType: "none",
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}>
              <button
                onClick={() => {
                  setCurrentIndex(key);
                }}
              >
                {val.icon}
              </button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
