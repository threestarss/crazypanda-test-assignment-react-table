import { useContext, useEffect, useState } from "react";
import DataStore from "./Contexts/DataStore";
import PageNum from "./Contexts/PageNum";

import PaginationButton from "./PaginationButton";

function Pagination() {
  const { pageNum, setPageNum } = useContext(PageNum);
  const { data } = useContext(DataStore);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(data.length / 50));
  }, [data]);

  function prevPage() {
    setPageNum(pageNum - 1);
  }

  function setPage(event) {
    setPageNum(+event.target.textContent - 1);
  }

  function nextPage() {
    setPageNum(pageNum + 1);
  }

  return (
    <nav className="pagination">
      <button onClick={prevPage} disabled={pageNum < 1 ? true : false}>
        Prev Page
      </button>
      {[...Array(pageCount)].map((elem, index) => (
        <PaginationButton key={index} setPage={setPage}>
          {index}
        </PaginationButton>
      ))}
      <button
        onClick={nextPage}
        disabled={pageNum === pageCount - 1 ? true : false}
      >
        Next Page
      </button>
    </nav>
  );
}

export default Pagination;
