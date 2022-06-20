import { useNavigate } from "react-router-dom";
const DeleteButton = ({ id }) => {
  const navigate = useNavigate();
  function Delete() {
    fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  }
  return (
    <button onClick={Delete} className="btn">
      Delete
    </button>
  );
};

export default DeleteButton;
