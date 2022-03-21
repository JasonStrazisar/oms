import React from "react";
import { Pane, Text } from "evergreen-ui";
import PostCategory from "./PostCategory";

const PostCard = ({ title, cover, category, id }) => (
  <Pane
    width="23.5%"
    textOverflow="ellipsis"
    overflow="hidden"
    display="flex"
    flexDirection="column"
    marginBottom="3%"
    cursor="pointer"
  >
    <img
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
      }}
      src={cover}
    />
    <PostCategory category={category} />
    <Text fontWeight="bold" maxHeight="40px">
      {title}
    </Text>
  </Pane>
);

export default PostCard;
