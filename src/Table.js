import { useState, useEffect, useContext } from "react";

import DataStore from "./Contexts/DataStore";
import PageNum from "./Contexts/PageNum";
import UnsortedData from "./Contexts/UnsortedData";

import TableButtonRow from "./TableButtonRow";
import TableItemColumn from "./TableItemColumn";
import TableItemRow from "./TableItemRow";
import SortingButton from "./SortingButton";

function Table({ dataToShow, setDataToShow }) {
  const [buttons, setButtons] = useState();
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
      setButtons(
        Object.keys(choppedResponse[0]).map((elem, index) => (
          <SortingButton
            className={`table-column-${index + 1}`}
            id={elem}
            type={"string"}
            name={elem}
          />
        ))
      );
    }

    fetchData();
  }, []);

  useEffect(() => {
    setDataToShow(data.slice(pageNum * 50, pageNum * 50 + 50));
  }, [pageNum]);

  return (
    <div className="table">
      <TableButtonRow setDataToShow={setDataToShow} buttons={buttons} />
      {dataToShow.map((elem) => (
        <TableItemRow className={"table-item"}>
          {Object.values(elem).map((elem, index) => (
            <TableItemColumn index={index + 1} elem={elem} />
          ))}
        </TableItemRow>
      ))}
    </div>
  );
}

export default Table;
