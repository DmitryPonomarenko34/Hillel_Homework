/* eslint-disable react/prop-types */
import { Component } from "react";
import SmileysItem from "./SmileysItem";

class SmileysList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {items.map((item) => <li key={item.dec}><SmileysItem item={item} /></li> )}
      </ul>
    );
  }
}

export default SmileysList;