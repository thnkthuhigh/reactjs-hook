import { useState } from "react";
import "./Love.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Love = () => {
  const [check, setCheck] = useState(false);
  const [love, setLove] = useState(""); // Biến `love` là một chuỗi
  const [checkHV, setCheckHV] = useState(false); // Biến `checkHV` để xác định khi nào hover vào button

  // Hàm xử lý sự kiện thay đổi giá trị của input
  const handleOnChange = (event) => {
    const inputValue = "Em yêu anh!";
    // Cắt chuỗi để không vượt quá độ dài cho phép
    const slicedLove = inputValue.slice(0, event.target.value.length); // Giả sử giới hạn độ dài chuỗi là 20 ký tự
    setLove(slicedLove); // Cập nhật giá trị của state `love`
  };

  const handleOnClick = () => {
    if (love.length === 11) {
      setCheck(true);
    }
  };

  const handleOnClickbt = () => {
    toast.success("Moahh");
  };

  // Hàm xử lý hover vào button
  const handleHover = () => {
    setCheckHV(true);
  };

  // Hàm xử lý rời khỏi button
  const handleLeave = () => {
    setCheckHV(false);
  };

  return (
    <>
      {check === false ? (
        <div>
          Muốn nói gì với tui <br />
          {/* Sử dụng giá trị của state `love` trong input */}
          <input value={love} onChange={handleOnChange} />
          <button onClick={() => handleOnClick()}> Gửi </button>
        </div>
      ) : (
        <div>
          Lớp bờ du &lt;3
          <br />
          <br />
          <br />
          Vậy hôn ngta 1 cái nha
          <br />
          <br />
          <br />
          <div>
            {/* Sử dụng className để thêm CSS cho button và sử dụng sự kiện onMouseEnter và onMouseLeave */}
            <button
              className={checkHV ? "er" : ""}
              onClick={() => {
                handleOnClickbt();
              }}
            >
              {!checkHV ? "Đồng ý" : "Từ Chối"}
            </button>
            <button
              className={!checkHV ? "er" : ""}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onClick={() => {
                handleOnClickbt();
              }}
            >
              {!checkHV ? "Từ Chối" : "Đồng ý"}
            </button>
          </div>
          <div></div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Love;
