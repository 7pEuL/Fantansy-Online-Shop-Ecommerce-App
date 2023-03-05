import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useMediaQuery, Tabs, Tab } from "@mui/material";

import { setItems } from "../../state";
import Item from "../../components/Item";
// import { useTheme } from "@emotion/react";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  // console.log("item", items)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      // "/Product.json",
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "Top Rated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "New Arrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "Best Sellers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography
        color="white"
        style={{ textShadow: "1px 0px 0px greenyellow" }}
        variant="h3"
        textAlign="center"
      >
        Ethiopian Fancy Pigeons
      </Typography>
      <Tabs
        textColor="secondary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="New Arrivals" />
        <Tab label="BEST SELLERS" value="Best Sellers" />
        <Tab label="TOP RATED" value="Top Rated" />
      </Tabs>

      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
        color="black"
        style={{ textShadow: "1px 0px 0px gray" }}
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "New Arrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Best Sellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Top Rated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
