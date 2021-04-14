import React, { Component } from "react";
import mirador from "mirador";
import Button from '@material-ui/core/Button';
import Timeline from './Timeline';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ReactDOM, unmountComponentAtNode, render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  fabBack:{
    backgroundColor: "#da2626",
    zIndex: "100000",
    top: "340px",
    marginLeft: "8px",
  },
}

class Mirador extends Component {
  
  dismiss() {
    render(
      <Timeline />, document.getElementById("root")
    );
  }
  componentDidMount() {
    const { config, plugins } = this.props;
    mirador.viewer(config, plugins);
  }
  render() {
    const { config } = this.props;
    return (
      <div>
        <Fab color="secondary" size="medium" aria-label="back" style={{ ...styles.fabBack }} onClick={() => this.dismiss()}>
          <ArrowBackIcon />
        </Fab>
        <div id={config.id}>
        </div>
        
      </div>
    );
  }
}

export default Mirador;