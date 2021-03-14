import { useState } from "react";
import "./App.css";
import DataStore from "./Contexts/DataStore";
import PageNum from "./Contexts/PageNum";
import UnsortedData from "./Contexts/UnsortedData";
import SortingMode from "./Contexts/SortingMode";

import Header from "./Header";
import Table from "./Table";
import Pagination from "./Pagination";

function App() {
  const [data, setData] = useState([]);
  const [unsortedData, setUnsortedData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [sortMode, setSortMode] = useState(true);
  const [dataToShow, setDataToShow] = useState([]);

  return (
    <DataStore.Provider value={{ data, setData }}>
      <UnsortedData.Provider value={{ unsortedData, setUnsortedData }}>
        <PageNum.Provider value={{ pageNum, setPageNum }}>
          <SortingMode.Provider value={{ sortMode, setSortMode }}>
            <div className="wrapper">
              <Header dataToShow={dataToShow} setDataToShow={setDataToShow} />
              <Table dataToShow={dataToShow} setDataToShow={setDataToShow} />
              <Pagination />
            </div>
          </SortingMode.Provider>
        </PageNum.Provider>
      </UnsortedData.Provider>
    </DataStore.Provider>
  );
}

export default App;
