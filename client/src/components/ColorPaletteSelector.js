import React from "react";

import RangeSlider from "./RangeSlider";
import ColorPicker from "./ColorPicker";

import RandomPalette from "../models/randomPalette";
import StyledButton from "./StyledButton";
class ColorPaletteSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = { numColors: 5, colors: [] };

    this.randomPalette = new RandomPalette();
  }

  componentDidMount() {
    this.generateColor();
  }

  handleSliderValue() {}

  handleColorChange(color, index) {}



  generateColor() {
    this.randomPalette.generateRandomColor().then((colors) => {
      console.log(colors);
      this.setState({ colors: colors });
    });
    this.setState({colors: []})
  }

  render() {
    let colorDivs = this.state.colors.length > 0 ? (
      <div className="colors-row">
        <ColorPicker
          colorNumber={0}
          color={this.state.colors[0]}
          callback={this.handleColorChange}
        />
        <ColorPicker
          colorNumber={1}
          color={this.state.colors[1]}
          callback={this.handleColorChange}
        />
        <ColorPicker
          colorNumber={2}
          color={this.state.colors[2]}
          callback={this.handleColorChange}
        />
        <ColorPicker
          colorNumber={3}
          color={this.state.colors[3]}
          callback={this.handleColorChange}
        />
        <ColorPicker
          colorNumber={4}
          color={this.state.colors[4]}
          callback={this.handleColorChange}
        />
      </div>
    ) : <div className="colors-row">Loading Colors ...</div>;
    return (
      <div>
        {colorDivs}
        <div
          onClick={(e) => {
            this.generateColor();
          }}
        >
          <StyledButton title="Generate" />
        </div>
      </div>
    );
  }
}

export default ColorPaletteSelector;
