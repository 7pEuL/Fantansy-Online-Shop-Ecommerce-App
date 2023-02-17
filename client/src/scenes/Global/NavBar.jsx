import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import { setIsWishlistOpen } from "../../wishlists"; // Work for another Day
import images from "../../Data/images";

const user = "true";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgb(0, 0, 0, 0.1)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="90%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          paddingBottom="3px"
          columnGap="20px"
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.skyBlue[500]}
        >
          <img
            width="40px"
            padding="10px"
            src={images.FancyPigeonLogo}
            alt=""
          />

          <Box
            sx={{
              display: !isNonMobile ? "none" : "block",
              "&:hover": { textShadow: "0px 0px 1px skyBlue" },
            }}
            paddingTop="3px"
            onClick={() => navigate("/Cars/Gallery")}
          >
            Fancy Pigeons
          </Box>

          {/* <Box
            sx={{ "&:hover": { textShadow: "0px 0px 1px skyBlue" } }}
            paddingTop="3px"
            onClick={() => navigate("/Gallery")}
          >
            Gallery
          </Box> */}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton
            sx={{ display: !isNonMobile ? "none" : "flex", color: "skyblue" }}
          >
            <SearchIcon />
          </IconButton>

          <IconButton
            onClick={() => dispatch(setIsWishlistOpen({}))}
            sx={{ color: "skyblue" }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>

          {!user ? (
            // user.name
            <IconButton sx={{ color: "red" }}>
              <AccountCircleOutlinedIcon />
            </IconButton>
          ) : (
            <Box borderColor={shades.black[100]}>
              <IconButton sx={{ color: "skyblue" }}>
                <AccountCircleOutlinedIcon />
              </IconButton>
              {/* Sign in / Register */}
            </Box>
          )}

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "skyblue" }}
            >
              <WorkOutlineOutlinedIcon />
            </IconButton>
          </Badge>

          <IconButton sx={{ color: "skyblue" }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
