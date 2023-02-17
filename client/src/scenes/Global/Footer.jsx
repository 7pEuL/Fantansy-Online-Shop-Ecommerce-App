import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.skyBlue[500]}
          >
            Fancy Pigeons
          </Typography>
          <div>
            Fancy pigeon refers to any breed of domestic pigeon, which is a
            domesticated form of the wild rock dove.
            <br />
            <br />
            They are bred by pigeon fanciers for various traits relating to
            size, shape, color, and behavior, and often exhibited at pigeon
            shows, fairs and other livestock exhibits.
          </div>
        </Box>

        <Box>
          <Typography
            color={shades.skyBlue[500]}
            variant="h4"
            fontWeight="bold"
            mb="30px"
          >
            About Us
          </Typography>
          <Typography mb="30px">Contact</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography
            color={shades.skyBlue[500]}
            variant="h4"
            fontWeight="bold"
            mb="30px"
          >
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            color={shades.skyBlue[500]}
            variant="h4"
            fontWeight="bold"
            mb="30px"
          >
            Contact Us
          </Typography>
          <Typography mb="30px">
            70 South Fancy Road, Washington, DC 2023
          </Typography>
          <Typography
            color={shades.skyBlue[500]}
            mb="30px"
            sx={{ wordWrap: "break-word" }}
          >
            Email: fancyjacobin7@gmail.com
          </Typography>
          <Typography color={shades.skyBlue[500]} mb="30px">
            (267)333-7777
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
