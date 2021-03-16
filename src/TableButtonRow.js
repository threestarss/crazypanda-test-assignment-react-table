import { useContext } from "react";
import DataStore from "./Contexts/DataStore";
import UnsortedData from "./Contexts/UnsortedData";
import PageNum from "./Contexts/PageNum";
import SortingMode from "./Contexts/SortingMode";

function TableButtonRow({ className, setDataToShow, buttons }) {
  const { data, setData } = useContext(DataStore);
  const { unsortedData } = useContext(UnsortedData);
  const { setPageNum } = useContext(PageNum);
  const { sortMode, setSortMode } = useContext(SortingMode);

  function sorter(event) {
    let defaultVal = unsortedData.slice();
    let newData = data.slice();

    if (sortMode === true) {
      newData.sort(ascending);
      setSortMode(false);
      setData(newData);
      setPageNum(0);
      setDataToShow(newData.slice(0, 50));
    } else if (sortMode === false) {
      newData.sort(descending);
      setSortMode(null);
      setData(newData);
      setPageNum(0);
      setDataToShow(newData.slice(0, 50));
    } else {
      setSortMode(true);
      setData(defaultVal);
      setPageNum(0);
      setDataToShow(defaultVal.slice(0, 50));
    }

    function ascending(a, b) {
      if (event.target.dataset.type === "string") {
        return a[event.target.id] > b[event.target.id] ? 1 : -1;
      }
    }

    function descending(a, b) {
      if (event.target.dataset.type === "string") {
        return a[event.target.id] < b[event.target.id] ? 1 : -1;
      }
    }
  }

  return (
    <div className={className} onClick={sorter}>
      {buttons}
    </div>
  );
}

export default TableButtonRow;

// { className, children, onClick }
