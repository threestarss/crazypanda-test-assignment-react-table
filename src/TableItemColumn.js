function TableItemColumn({ index, elem }) {
  return (
    <div className={`table-column-${index}`}>
      <p>{elem}</p>
    </div>
  );
}

export default TableItemColumn;
