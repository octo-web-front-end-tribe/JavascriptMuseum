import React from "react";
import { Animated, VrButton } from "react-vr";

export default function makeClickable(Component, componentProps) {
  return class ClickableComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        animationValue: new Animated.Value(0)
      };

      this.state.animation = Animated.timing(this.state.animationValue, {
        toValue: 1
      });
    }

    render() {
      return (
        <VrButton onClick={() => this.state.animation.start()}>
          <Component {...componentProps} />
        </VrButton>
      );
    }
  };
}
