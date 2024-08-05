import { useContext } from "react";
import MyContext from "../Context";

const SmileysItem = ({ item }) => {
  const emoji = String.fromCodePoint(item.dec);
  const { incrementCount } = useContext(MyContext);

  return (
    <div>
      <button onClick={() => incrementCount(item.dec)} className="emoji">
        {emoji}
      </button>
      <p>
        {item.count}
      </p>
    </div>
  );
};

export default SmileysItem;
