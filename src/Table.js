import { useEffect, useContext } from "react";

import DataStore from "./Contexts/DataStore";
import PageNum from "./Contexts/PageNum";
import UnsortedData from "./Contexts/UnsortedData";

import TableButtonRow from "./TableButtonRow";
import TableItemRow from "./TableItemRow";
import SortingButton from "./SortingButton";

function Table({ dataToShow, setDataToShow }) {
  const { data, setData } = useContext(DataStore);
  const { setUnsortedData } = useContext(UnsortedData);
  const { pageNum } = useContext(PageNum);

  useEffect(() => {
    async function fetchData() {
      const fetchResult = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const fetchResponse = await fetchResult.json();
      const choppedResponse = fetchResponse.slice(0, 500);
      setUnsortedData(choppedResponse);
      setData(choppedResponse);
      setDataToShow(choppedResponse.slice(0, 50));
    }

    fetchData();
  }, []);

  useEffect(() => {
    setDataToShow(data.slice(pageNum * 50, pageNum * 50 + 50));
  }, [pageNum]);

  return (
    <div className="table">
      <TableButtonRow className="buttons-row" setDataToShow={setDataToShow}>
        <SortingButton
          className="table-column-1"
          id={"id"}
          type={"number"}
          name={"ID"}
        />
        <SortingButton
          className="table-column-2"
          id={"postId"}
          type={"number"}
          name={"ID поста"}
        />
        <SortingButton
          className="table-column-3"
          id={"email"}
          type={"string"}
          name={"E-mail автора"}
        />
        <SortingButton
          className="table-column-4"
          id={"name"}
          type={"string"}
          name={"Заголовок"}
        />
        <SortingButton
          className="table-column-5"
          id={"body"}
          type={"number"}
          name={"Комментарий"}
        />
      </TableButtonRow>
      {dataToShow.map((elem) => (
        <TableItemRow
          className={"table-item"}
          key={elem.id}
          id={elem.id}
          postId={elem.postId}
          email={elem.email}
          name={elem.name}
          body={elem.body}
        />
      ))}
    </div>
  );
}

export default Table;
