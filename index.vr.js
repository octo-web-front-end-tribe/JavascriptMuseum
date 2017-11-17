import React from "react";
import {
  AppRegistry,
  asset,
  Box,
  Image,
  Pano,
  Sphere,
  SpotLight,
  View
} from "react-vr";

import javaScriptImage from './static_assets/JavaScript.png';
import texture from './static_assets/texture.png';
import makeClickable from "./enhancers/makeClickable";

const ClickableJavascriptImage = makeClickable(Image);
const ClickableBox = makeClickable(Box);
const ClickableSphere = makeClickable(Sphere);

export default class JavascriptMuseum extends React.Component {
  // todo make elements draggable
  render() {
    return (
      <View>
        <SpotLight intensity={1} />
        <Pano source={asset("chess-world.jpg")} />
        <ClickableJavascriptImage
          source={javaScriptImage}
          style={{
            width: 785 / 100 / 2,
            height: 340 / 100 / 2,
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3.6] }]
          }}
        />
        <ClickableBox
          dimWidth={1.2}
          dimDepth={1.2}
          dimHeight={1.2}
          lit
          style={{
            transform: [{ translate: [7, 0.5, 15] }]
          }}
          texture={texture}
        />
        <ClickableSphere
          radius={1}
          widthSegments={20}
          heightSegments={12}
          style={{
            transform: [{ translate: [2.5, 0.5, 18] }]
          }}
          texture={texture}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("JavascriptMuseum", () => JavascriptMuseum);
