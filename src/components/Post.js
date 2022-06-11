import { Link } from "react-router-dom";

const Post = ({ id, name, price, seller }) => {
  return (
    <tr>
      <td>
        <Link to={`/single-post/${id}`}> {name}</Link>
      </td>
      <td>{price}</td>
      <td>{seller}</td>
    </tr>
  );
};

export default Post;
