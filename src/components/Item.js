function Item(props) {
  function onClickHandler() {
    window.keplr.experimentalSuggestChain(props.networkDetails);
  }

  return (
    <li>
      <div className="card">
        <h2>{props.title}</h2>
        <p>
          Use {props.title} coins in{" "}
          <a href="https://www.keplr.app/" target="_blank" rel="noreferrer">
            Keplr wallet
          </a>
        </p>
        <div className="actions">
          <button className="btn" onClick={onClickHandler}>
            Add to Keplr
          </button>
        </div>
      </div>
    </li>
  );
}

export default Item;
