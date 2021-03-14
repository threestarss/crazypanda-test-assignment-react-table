function SortingButton({ className, id, type, name }) {
  return (
    <button data-type={type} id={id} className={className}>
      {name}
    </button>
  );
}

export default SortingButton;
