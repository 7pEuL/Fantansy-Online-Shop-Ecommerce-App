import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton sx={{ color: "greenyellow" }}>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>

      <Typography color="greenyellow" variant="h3">
        Subscribe To Our Fancy Pigeons Gallery
      </Typography>
      <Typography style={{ color: "white" }}>
        To see our Beautiful Photo Collection of Fancy Pigeons of Ethiopia for
        Free
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F230"
        borderRadius="30px"
        border="1px solid white"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{
            p: "10px",
            ":hover": { cursor: "pointer" },
            color: "white",
          }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
