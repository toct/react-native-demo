import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';

export const CommonDimensions = {
    screenH : Dimensions.get('window').height,
    screenW : Dimensions.get('window').width,
}

export const CommonColor = {
    navigationBarColor: 'purple',
    SceneBackgroundColor: 'white',
}

export const AuthContext = React.createContext('sss');


export default class ColorSet extends PureComponent{
    static rendomColor() {
        this.r = Math.floor(Math.random()*255);
        this.g = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
        this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
        return this.color;
    }
}


export class GB_Debug extends PureComponent{
    static Show(object) {
        let description='';
        for(let i in object) {
            description += i + '= '+object[i] + ';';
        }
        alert(description);
    }
}