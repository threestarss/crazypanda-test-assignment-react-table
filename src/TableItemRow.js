function TableItemRow({ className, id, postId, email, name, body }) {
  return (
    <div className={className}>
      <div className="table-column-1">
        <p>{id}</p>
      </div>
      <div className="table-column-2">
        <p>{postId}</p>
      </div>
      <div className="table-column-3">
        <p>{email}</p>
      </div>
      <div className="table-column-4">
        <p>{name}</p>
      </div>
      <div className="table-column-5">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default TableItemRow;
