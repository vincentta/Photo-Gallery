import React, { Component } from "react";

class ThumbCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const template = this.props.template;
    const selected_id = this.props.selected_id;
    const first_id = this.props.first_id;

    let classStatus =
      (selected_id === null && first_id === template.id) ||
      selected_id === template.id
        ? "active"
        : "none";
    return (
      <a key={template.id} href="#" class={classStatus} title={template.id}>
        <img
          src={"images/thumbnails/" + template.thumbnail}
          alt="7111-m"
          width="145"
          height="121"
          onClick={() => this.props.onClick()}
        />
        <span>{template.id}</span>
      </a>
    );
  }
}

export default ThumbCard;
