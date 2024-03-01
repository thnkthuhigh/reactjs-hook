import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isErr } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`, //loc data tu phia backend chay nhanh honw
    // "https://jsonplaceholder.typicode.com/posts",
    false
  );

  // const index = parseInt(id);

  if (isLoading) return <div>Đang tải...</div>;
  if (isErr) return <div>Lỗi khi lấy dữ liệu</div>;

  // if (!data || !data[index - 1]) return <div>Không tìm thấy dữ liệu</div>;

  // const blog = data[index - 1];

  return (
    <div className="itemBlog">
      <div style={{ textAlign: "left" }}>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/Blog")}>
          &lt;-- Quay lại
        </span>{" "}
      </div>
      <br />
      <div> Chi tiết {id}</div>
      <div>Tiêu đề: {data.title}</div>
      <br />
      <div>Nội dung: {data.body}</div>
    </div>
  );
};

export default BlogDetail;
