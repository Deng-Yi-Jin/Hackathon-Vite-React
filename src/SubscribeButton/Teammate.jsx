import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Teammate_pfp() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ position: "relative", right: -260 }}
        alt="Alex"
        src="/static/images/avatar/1.jpg"
      />
      <Avatar
        sx={{ position: "relative", right: -260 }}
        alt="Lucas"
        src="/static/images/avatar/2.jpg"
      />
      <Avatar
        sx={{ position: "relative", right: -260 }}
        alt="Joshua"
        src="/static/images/avatar/3.jpg"
      />
    </Stack>
  );
}
