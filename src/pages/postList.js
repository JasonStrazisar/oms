import { useQuery } from "@apollo/client";
import { Pane } from "evergreen-ui";
import React from "react";
import { GET_POSTS } from "../api/GET_POSTS";
import usePostsList from "../api/usePost";
import { PostCard, PostCardWide } from "../components";

const PostListPage = () => {
  const { posts, error, loading } = usePostsList();

  if (loading) return <p>Laogi</p>;
  if (error) return <p>error</p>;
  if (!posts) return <p>No data</p>;

  return (
    <Pane display="flex" gap="2%" flexWrap="wrap">
      {posts.map(({ titre, couverture, id, categorie, description }, index) => {
        if (index === 0) {
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
        return (
          <PostCard
            title={titre}
            cover={couverture}
            id={id}
            category={categorie}
          />
        );
      })}
    </Pane>
  );
};

export default PostListPage;
