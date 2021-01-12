import React, { Component } from "react";
import Details from "./Details";

class LargeImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: null
    };
  }

  render() {
    if (this.props.selectedData == null) {
      return (
        <div id="large">
          {this.props.templates.slice(0, 1).map(item => (
            <Details key={item.id} data={item} />
          ))}
        </div>
      );
    } else {
      return (
        <div id="large">
          <Details
            key={this.props.selectedData.id}
            data={this.props.selectedData}
          />
        </div>
      );
    }
  }
}

export default LargeImg;
