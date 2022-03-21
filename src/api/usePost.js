import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_POSTS } from "./GET_POSTS";
import useSubdomaine from "./useSubdomaine";
import moment from "moment";

export function usePostsList() {
  const [posts, setPost] = useState();
  const { data, error, loading } = useQuery(GET_POSTS);
  const subdomaine = useSubdomaine();

  function sortByDate(a, b) {
    const date1 = a.dateDePublication;
    const date2 = b.dateDePublication;
    if (
      new moment(date1.date).format("YYYY-MM-DD") >
      new moment(date2.date).format("YYYY-MM-DD")
    ) {
      return -1;
    }

    if (
      new moment(date1.date).format("YYYY-MM-DD") <
      new moment(date2.date).format("YYYY-MM-DD")
    ) {
      return 1;
    }

    return 0;
  }

  useEffect(() => {
    if (loading || error) return;
    const prePost = data.publications;

    if (subdomaine === "oms-chatenois" || subdomaine === "localhost") {
      setPost(prePost);
    }

    const filteredOnClub = prePost.filter((post) => {
      return post.club?.clubId === subdomaine || post.club?.clubId === "oms";
    });
    setPost(filteredOnClub);
  }, [data, loading, error]);

  return { posts, error, loading };
}

export default usePostsList;
