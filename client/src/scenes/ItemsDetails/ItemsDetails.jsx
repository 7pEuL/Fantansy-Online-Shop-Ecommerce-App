import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
// import { addToWishlist } from "../../wishlists";
import { useDispatch } from "react-redux";

const ItemsDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      // `Product.json`,
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      // `Product.json`,
      `http://localhost:1337/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    if (liked) {
      console.log("Button was unliked");
      // perform some action
    } else {
      console.log("Button was liked");
      // perform some action
    }
  };

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            // src={`Product.json${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box color="black" style={{ textShadow: "1px 0px 0px gray" }}>
              Home/Item
            </Box>
            <Box color="black" style={{ textShadow: "1px 0px 0px gray" }}>
              Prev Next
            </Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography
              variant="h3"
              color={shades.greenYellow[500]}
              style={{ textShadow: "1px 0px 0px gray" }}
            >
              {item?.attributes?.name}
            </Typography>

            <Typography
              color={shades.greenYellow[200]}
              style={{ textShadow: "1px 0px 0px black" }}
            >
              ${item?.attributes?.price}
            </Typography>

            <Typography sx={{ mt: "20px" }} color={shades.greenYellow[500]}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>

              <Typography sx={{ p: "0 5px" }}>{count}</Typography>

              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex" alignItems="center">
              <IconButton
                variant="plain"
                aria-label="like"
                onClick={handleClick}
                // onClick={() =>
                //   dispatch(addToWishlist({ item: { ...item, count } }))
                // }
              >
                {!liked ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteIcon style={{ color: "red" }} />
                )}
              </IconButton>

              <Typography sx={{ ml: "5px" }} color={shades.greenYellow[700]}>
                ADD TO WISHLIST
              </Typography>
            </Box>
            <Typography
              sx={{ ml: "39px" }}
              color={shades.greenYellow[300]}
              style={{ textShadow: "1px 0px 0px green" }}
            >
              CATEGORIES: {item?.attributes?.category}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs
          textColor="secondary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="15px"
        color="white"
        // style={{ textShadow: "1px 0px 0px gray" }}
      >
        {value === "description" && (
          <div>{item?.attributes?.LongDescription}</div>
        )}
        {value === "reviews" && <div>Under Constriction...</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography
          variant="h3"
          fontWeight="bold"
          color={shades.greenYellow[400]}
        >
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
          color="black"
          style={{ textShadow: "1px 0px 0px gray" }}
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemsDetails;
