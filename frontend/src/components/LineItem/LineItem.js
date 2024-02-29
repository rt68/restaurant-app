import styles from "./LineItem.module.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {


  console.log(lineItem.extPrice);
  if (!lineItem || !lineItem.item) {
    // Handle the case where lineItem or lineItem.item is undefined
    return null; // or render a placeholder or loading state
  }


  return (
    <div className={styles.LineItem}>
      {/* <div className="flex-ctr-ctr">{lineItem.item.img}</div> */}
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.name}</span>
        
        {/* <span>{lineItem.item.price.toFixed(2)}</span> */}
      </div>
      <div
        className={styles.qty}
        style={{ justifyContent: isPaid && "center" }}
      >
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item, lineItem.qty - 1)}
          >
            −
          </button>
        )}
        <span>{lineItem.qty}</span>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item, lineItem.qty + 1)}
          >
            +
          </button>
        )}
      </div>
      {/* <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div> */}
    </div>
  );
}