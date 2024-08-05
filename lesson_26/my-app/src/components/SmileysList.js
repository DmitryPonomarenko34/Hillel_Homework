/* eslint-disable react/prop-types */
import { memo } from "react";
import SmileysItem from "./SmileysItem";

const SmileysList = memo(({ items }) => {
  console.log('re-render');

  return (
    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
      {items.map((item) => <li key={item.dec}><SmileysItem item={item} /></li> )}
    </ul>
  );
});

export default SmileysList;