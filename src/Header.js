import { useContext } from "react";

import UnsortedData from "./Contexts/UnsortedData";
import DataStore from "./Contexts/DataStore";
import PageNum from "./Contexts/PageNum";
import SortingMode from "./Contexts/SortingMode";

function Header({ setDataToShow }) {
  const { unsortedData } = useContext(UnsortedData);
  const { setData } = useContext(DataStore);
  const { setSortMode } = useContext(SortingMode);
  const { setPageNum } = useContext(PageNum);

  function filterData(event) {
    setPageNum(0);
    let query = String(event.target.value);
    let newData = unsortedData.slice();
    let filtered = newData.filter((obj) => {
      return Object.values(obj).some((elem) => String(elem).includes(query));
    });
    setData(filtered);
    setDataToShow(filtered.slice(0, 50));
  }

  function cleanFilters() {
    let newData = unsortedData.slice();
    setPageNum(0);
    setSortMode(true);
    setData(newData);
    setDataToShow(newData.slice(0, 50));
  }

  return (
    <header>
      <input onChange={filterData} placeholder={"Поиск..."} type="text" />
      <button onClick={cleanFilters}>Сброс фильтров и сортировки</button>
    </header>
  );
}

export default Header;
