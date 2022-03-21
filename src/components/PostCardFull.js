import { Button, Heading, Pane } from "evergreen-ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import PostCategory from "./PostCategory";

const PostCardFull = ({ title, cover, category, id }) => {
  const navigate = useNavigate();

  return (
    <Pane
      marginLeft="-40px"
      marginTop="-20px"
      marginBottom="3%"
      position="relative"
      width="calc(100% + 40px)"
    >
      <img
        src={cover}
        style={{
          width: "calc(100% + 40px)",
          aspectRatio: "1/0.45",
          objectFit: "cover",
        }}
      />
      <Pane
        backgroundColor="rgb(0, 0, 0, 0.6)"
        position="absolute"
        zIndex={10}
        width="calc(100% + 40px)"
        top={0}
        maxHeight="100%"
        minHeight="100%"
        display="flex"
        alignItems="center"
        padding="40px"
      >
        <Pane display="flex" flexDirection="column" gap="10px" width="100%">
          <PostCategory small category={category} />
          <Heading
            fontWeight="bold"
            width="80%"
            size={800}
            marginBottom="35px"
            color="#fff"
          >
            {title}
          </Heading>
          <Button width="25%" onClick={() => navigate(`/publications/${id}`)}>
            Lire plus
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default PostCardFull;
