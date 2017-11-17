import React from 'react';
import {
	AppRegistry,
	Animated,
	asset,
	Box,
	Image,
	Pano,
	Sphere,
	SpotLight,
	View,
	VrButton,
} from 'react-vr';

import javaScriptImage from './static_assets/JavaScript.png';
import texture from './static_assets/texture.png';

export default class JavascriptMuseum extends React.Component {
	render() {
		return (
			<View>
				<SpotLight intensity={1} />
				<Pano source={ asset('chess-world.jpg') }/>
				<VrButton
					onClick={() => console.log('click')}
				>
					<Image
						source={ javaScriptImage }
						style={{
							width: 785 / 100 / 2, height: 340 / 100 / 2,
							layoutOrigin: [0.5, 0.5],
							transform: [{ translate: [0, 0, -3.6] }],
						}}
					/>
				</VrButton>
				<Box
					dimWidth={1}
					dimDepth={1}
					dimHeight={1}
					lit
					style={{
						layoutOrigin: [0.5, 0.5],
						transform: [{ translate: [2.85, -0.2, 6] }],
					}}
					texture={texture}
				/>
				<Sphere
					radius={0.5}
					widthSegments={20}
					heightSegments={12}
					lit
					style={{
						layoutOrigin: [0.5, 0.5],
						transform: [{ translate: [0.9, -0.2, 6] }],
					}}
					texture={texture}
				/>
			</View>
		);
	}
};

AppRegistry.registerComponent('JavascriptMuseum', () => JavascriptMuseum);
