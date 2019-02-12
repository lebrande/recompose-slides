import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  compose,
  withState,
  withHandlers,
  renameProps,
  lifecycle,
  branch,
  renderComponent,
  onlyUpdateForKeys,
  setPropTypes,
} from "recompose";
import './App.css';

const addEnergySaving = onlyUpdateForKeys(["active", "isOn"]);

const withRemoteConfig = lifecycle({
  componentDidMount() {
    setTimeout(() => {
      this.props.setActive(true);
    }, 4000);
    setTimeout(() => {
      this.props.setColor("yellow");
    }, 6000);
  }
});

const addHandlers = withHandlers({
  toggle: ({ isOn, setIsOn }) => () => setIsOn(!isOn)
});

const addIsOnState = withState("isOn", "setIsOn", false);
const addColorState = withState("color", "setColor", "red");
const addIsActiveState = withState("active", "setActive", false);

const addFancyNames = renameProps({
  isOn: "isReallyReallyOn"
});

const SwitchBody = ({ isReallyReallyOn, toggle, color }) => (
  <button onClick={toggle} style={{ backgroundColor: color }}>
    {isReallyReallyOn ? "ON" : "OFF"}
  </button>
);

const Loader = () => <div className="loader" />;

const withLoader = branch(({ active }) => !active, renderComponent(Loader));

const addSwitchTypes = setPropTypes({
  isOn: PropTypes.bool,
  active: PropTypes.bool,
  color: PropTypes.string,
  setIsOn: PropTypes.func,
  setActive: PropTypes.func,
  setColor: PropTypes.func,
  toggle: PropTypes.func
});

const Switch = compose(
  addIsActiveState,
  addColorState,
  addIsOnState,
  addHandlers,
  withRemoteConfig,
  addEnergySaving,
  withLoader,
  addSwitchTypes,
  addFancyNames,
)(SwitchBody);

const App = () => (
  <Fragment>
    <Switch />
  </Fragment>
);

export default App;
