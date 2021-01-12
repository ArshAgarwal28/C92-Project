import * as React from 'react';
import { Dimensions } from 'react-native';
export function ScaleWidth(size, width) {
	console.log('used');
	var deviceWidth = Dimensions.get('window').width;
	var scale = (size / width) * deviceWidth;
	return scale;
}
