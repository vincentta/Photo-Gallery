import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    return (
      <div class="group">
        <img
          src={"images/large/" + data.image}
          alt="Large Image"
          width="430"
          height="360"
        />
        <div class="details">
          <p>
            <strong>Title</strong> {data.title}
          </p>
          <p>
            <strong>Description</strong> {data.description}
          </p>
          <p>
            <strong>Cost</strong> {data.cost}
          </p>
          <p>
            <strong>ID #</strong> {data.id}
          </p>
          <p>
            <strong>Thumbnail File</strong> {data.thumbnail}
          </p>
          <p>
            <strong>Large Image File</strong> {data.image}
          </p>
        </div>
      </div>
    );
  }
}

export default Details;
