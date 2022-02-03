import Item from "./Item";

function List(props) {
  return (
    <ul className="list">
      {props.items.map((item) => (
        <Item key={item.id} id={item.id} title={item.title} networkDetails={item.networkDetails} />
      ))}
    </ul>
  );
}

export default List;
