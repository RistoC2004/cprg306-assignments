export default function Item({ name, quantity, category }) {
  return (
      <li className="border p-4 rounded shadow-md bg-white flex justify-between items-center">
          <span className="font-semibold">{name}</span>
          <span className="text-gray-600">Qty: {quantity}</span>
          <span className="text-blue-500 italic">{category}</span>
      </li>
  );
}
