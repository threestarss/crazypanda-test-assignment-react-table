import { useContext } from "react";
import PageNum from "./Contexts/PageNum";

function PaginationButton({ setPage, children }) {
  const { pageNum } = useContext(PageNum);
  return (
    <button
      className={`${pageNum === children ? "active" : ""} page-btn`}
      onClick={setPage}
    >
      {children + 1}
    </button>
  );
}

export default PaginationButton;
