import React from 'react';

import FontPicker from "font-picker-react";

import '../styles/FontPicker.css'

class FontSelector extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeFontFamily: "Open Sans",
        };
    }

    render(){
        return (
            <div>
                <FontPicker
                apiKey="AIzaSyDv842R4CjWGDqZ8sTlMI4FcyX-VXnfmtA"
                activeFontFamily={this.state.activeFontFamily}
                onChange={(nextFont) =>
                    this.setState({
                        activeFontFamily: nextFont.family,
                    })
                }/>
                <h2 className="apply-font">Sample Text</h2>
            </div>
        )
    }
}

export default FontSelector;