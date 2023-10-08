import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./Avatar.css"

export default function ImageAvatars() {
  return (
    <Stack direction="row">
      <Avatar className="avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack>
  );
}