import { useQuery } from "@apollo/client";
import { Heading, Pane } from "evergreen-ui";
import React from "react";
import { GET_POSTS } from "../api/GET_POSTS";
import usePostsList from "../api/usePost";
import { PostCard, PostCardFull, PostCardWide } from "../components";

const HomePage = () => {
  const { posts, error: postError, loading: postLoading } = usePostsList();

  if (postLoading) return <p>loading</p>;
  if (postError) return <p>Error</p>;
  if (!posts) return <p>No data</p>;

  return (
    <Pane display="flex" gap="2%" flexWrap="wrap">
      {/* {posts[0] && (
        <PostCardFull
          title={posts[0].titre}
          cover={posts[0].couverture}
          category={posts[0].categorie}
          description={posts[0].description}
          id={posts[0].id}
        />
      )}
      <Heading
        size={800}
        marginTop="25px"
        paddingBottom="15px"
        marginBottom="20px"
        borderBottom="1px solid grey"
        width="100%"
      >
        Dernières publications
      </Heading>
      {posts.map(({ titre, couverture, id, categorie, description }, index) => {
        if (index === 0) return null;
        if (index === 1) {
          return (
            <PostCardWide
              title={titre}
              cover={couverture}
              category={categorie}
              description={description}
              id={id}
            />
          );
        }

        if (index > 5) return null;
        return (
          <PostCard
            title={titre}
            cover={couverture}
            id={id}
            category={categorie}
          />
        );
      })} */}
    </Pane>
  );
};

export default HomePage;
