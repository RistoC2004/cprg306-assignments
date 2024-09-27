const Item = ({ name, quantity, category }) => {
    return (
      <li className="p-2 border-b border-gray-300 flex justify-between">
        <span className="w-1/3">{name}</span>
        <span className="w-1/3 text-center">Quantity: {quantity}</span>
        <span className="w-1/3 text-right">Category: {category}</span>
      </li>
    );
  };
  
  export default Item;