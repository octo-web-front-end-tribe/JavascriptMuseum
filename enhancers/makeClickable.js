import React from "react";
import { Animated, VrButton } from "react-vr";

export default function MakeClickable(Component) {
  return class ClickableComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        animationValue: new Animated.Value(1)
      };

      this.state.animation = Animated.timing(this.state.animationValue, {
        toValue: 0,
        duration: 500
      });
    }

    render() {
      const animationProps = {
        style: {
          opacity: this.state.animationValue
        }
      };
      return (
        <Animated.View {...animationProps}>
          <VrButton
            onClick={this.state.animation.start}
						ignoreLongClick
          >
            <Component {...this.props} />
          </VrButton>
        </Animated.View>
      );
    }
  };
}
