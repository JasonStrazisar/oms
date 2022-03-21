import React from "react";
import { Pane, Text } from "evergreen-ui";
import PostCategory from "./PostCategory";

const PostCardWide = ({ title, cover, category, description, id }) => (
  <Pane width="100%" display="flex" marginBottom="3%" cursor="pointer">
    <img
      src={cover}
      style={{
        width: "70%",
        aspectRatio: "1/0.4",
        objectFit: "cover",
      }}
    />
    <Pane
      width="30%"
      backgroundColor="#000"
      padding="25px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Pane display="flex" flexDirection="column">
        <PostCategory category={category} />
        <Text color="#fff" fontWeight="bold">
          {title}
        </Text>
      </Pane>
      <Text color="#fff">{description}</Text>
    </Pane>
  </Pane>
);

export default PostCardWide;
