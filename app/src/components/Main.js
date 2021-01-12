import React, { Component } from "react";
import axios from "axios";
import LargeImg from "./LargeImg";
import Thumbnails from "./Thumbnails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [],
      first_id: null,
      largeImgData: null
    };
  }

  async componentDidMount() {
    const baseURL = "http://localhost:4000/api/templates";
    await axios.get(baseURL).then(response =>
      this.setState({
        templates: response.data.templates
      })
    );
    this.state.templates
      .slice(0, 1)
      .map(item => this.setState({ first_id: item.id }));
  }

  getSelectedThumbnailData = dataFromChild => {
    this.setState({ largeImgData: dataFromChild });
  };

  render() {
    return (
      <div id="container">
        <header>Code Development Project</header>
        <div id="main" role="main">
          <LargeImg
            templates={this.state.templates}
            selectedData={this.state.largeImgData}
          />
          <Thumbnails
            templates={this.state.templates}
            first_id={this.state.first_id}
            appCallback={this.getSelectedThumbnailData}
          />
        </div>
        <footer>
          <a href="instructions.pdf">Download PDF Instructions</a>
        </footer>{" "}
      </div>
    );
  }
}

export default App;
