/* eslint-disable react/prop-types */
import { Component } from "react";
import { Context } from '../context';

class SmileysItem extends Component {
  static contextType = Context;

  render() {
    const { item } = this.props;
    const { incrementCount } = this.context;
    const emoji = String.fromCodePoint(item.dec);

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
  }
}

export default SmileysItem;