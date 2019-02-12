import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import './App.css';

const Loader = () => <div className="loader" />;

class Switch extends Component {

  state = {
    isOn: false,
    color: "red",
    active: false,
  }

  setIsOn = (isOn) => {
    this.setState({ isOn });
  }

  setColor = (color) => {
    this.setState({ color });
  }

  setActive = (active) => {
    this.setState({ active });
  }

  toggle = () => {
    this.setIsOn(!this.state.isOn);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setActive(true);
    }, 4000);
    setTimeout(() => {
      this.setColor("yellow");
    }, 6000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.isOn !== this.state.isOn) ||
      (nextState.active !== this.state.active);
  }

  render () {
    const { isOn, color, active } = this.state;

    return (
      active ? <button onClick={this.toggle} style={{ backgroundColor: color }}>
        {isOn ? "ON" : "OFF"}
      </button> : <Loader />
    );
  }
}

Switch.propTypes = {
  isOn: PropTypes.bool,
  active: PropTypes.bool,
  color: PropTypes.string,
  setIsOn: PropTypes.func,
  setActive: PropTypes.func,
  setColor: PropTypes.func,
  toggle: PropTypes.func
};

const App = () => (
  <Fragment>
    <Switch />
  </Fragment>
);

export default App;
