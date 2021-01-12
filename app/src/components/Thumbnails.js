import React, { Component } from "react";
import ThumbCard from "./ThumbCard";

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: null,
      prev_status: "previous disabled",
      next_status: "next",
      start_idx: 0,
      end_idx: 4
    };
  }

  handleImgClick(item) {
    this.props.appCallback(item);
    this.setState({ selected_id: item.id });
  }

  async handlePrevClick() {
    if (this.state.start_idx > 0) {
      this.setState({ next_status: "next" });
      await this.setState({ start_idx: this.state.start_idx - 4 });
      await this.setState({ end_idx: this.state.end_idx - 4 });
    }
    if (this.state.start_idx == 0) {
      this.setState({ prev_status: "previous disabled" });
    }
  }

  async handleNextClick() {
    if (this.state.end_idx < this.props.templates.length) {
      this.setState({ prev_status: "previous" });
      await this.setState({ start_idx: this.state.start_idx + 4 });
      await this.setState({ end_idx: this.state.end_idx + 4 });
    }
    if (this.state.end_idx >= this.props.templates.length) {
      this.setState({ next_status: "next disabled" });
    }
  }

  render() {
    const templates = this.props.templates;
    return (
      <div class="thumbnails">
        <div class="group">
          {templates
            .slice(this.state.start_idx, this.state.end_idx)
            .map(item => (
              <ThumbCard
                key={item.id}
                template={item}
                onClick={() => this.handleImgClick(item)}
                selected_id={this.state.selected_id}
                first_id={this.props.first_id}
              />
            ))}
          <span
            class={this.state.prev_status}
            title="Previous"
            onClick={() => this.handlePrevClick()}
          >
            Previous
          </span>
          <a
            href="#"
            class={this.state.next_status}
            title="Next"
            onClick={() => this.handleNextClick()}
          >
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default Thumbnails;
