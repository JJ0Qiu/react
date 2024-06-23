export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      {packedPercent === 100 ? (
        <em>You're ready to Go!✈️</em>
      ) : (
        <em>
          💼 You have {numItems} item on your list, and you already packed{" "}
          {numPackedItems}({packedPercent})% of them
        </em>
      )}
    </footer>
  );
}
