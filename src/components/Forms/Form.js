import React from "react";

export class Form extends React.Component {
  // Scope our 'proxy' to 'this' entire object - class
  stateProxy = new Proxy(this, {
    // 'Trap' the object on which we attempted to change a 'prop' - 'comp'
    set(comp, prop, value) {
      // 'this' is scoped to 'set' - so we must 'comp' which will be the original 'this'
      comp.setState({ [prop]: value });
      return true;
    },
  });
}
