import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  return <div>Hello deteil {id}</div>;
};

export default BlogDetail;
