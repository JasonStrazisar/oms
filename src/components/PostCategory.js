import { Badge } from "evergreen-ui";
import React from "react";

const categories = {
  asso: { label: "Vie Associative", color: "green" },
  training: { label: "Entrainement", color: "blue" },
  compt: { label: "Compétition", color: "red" },
};

const PostCategory = ({ category, small }) => (
  <Badge
    width={small ? "25%" : "100%"}
    marginTop="5px"
    color={categories[category].color}
    marginBottom="5px"
  >
    {categories[category].label}
  </Badge>
);

export default PostCategory;
