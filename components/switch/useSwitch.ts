import React from "react";

const ACTION_TYPE = {
  toggle: "TOGGLE",
  on: "ON",
  off: "OFF",
};

export function toggleReducer(state: any, action: any) {
  switch (action.type) {
    case ACTION_TYPE.toggle: {
      return { on: !state.on };
    }
    case ACTION_TYPE.on: {
      return { on: true };
    }
    case ACTION_TYPE.off: {
      return { on: false };
    }
    default:
      throw new Error(`Unhandled type: ${action.type}`);
      break;
  }
}

export default function useSwitch({ reducer = toggleReducer } = {}) {
  const [{ on }, dispatch] = React.useReducer(reducer, { on: false });

  const toggle = () => dispatch({ type: ACTION_TYPE.toggle });
  const setOn = () => dispatch({ type: ACTION_TYPE.on });
  const setOff = () => dispatch({ type: ACTION_TYPE.off });

  return { on, toggle, setOn, setOff };
}
