# CSS Color Mixing Functions Playground

This is an interactive playground for demonstrating various CSS color mixing functions. It provides visual examples of how different CSS color functions work and includes an interactive color mixer.

## Features

- Demonstrations of common CSS color functions:
  - `mix()` - Blends two colors together
  - `lighten()` and `darken()` - Adjusts the lightness of a color
  - `saturate()` and `desaturate()` - Adjusts the saturation of a color
  - `adjust-hue()` - Adjusts the hue of a color
  - `rgba()` and `transparentize()` - Adjusts the opacity of a color

- Interactive color mixer that allows you to:
  - Select two colors using color pickers
  - Adjust the mix percentage with a slider
  - See the resulting mixed color in real-time

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Playground

To start the playground:

```bash
npm start
```

This will start a local development server and open the playground in your default browser.

## How CSS Color Functions Work

### mix(color1, color2, weight)
Mixes two colors together. The `weight` parameter (0-100%) determines how much of the second color to include.

### lighten(color, amount) / darken(color, amount)
Increases or decreases the lightness of a color. The `amount` parameter (0-100%) determines how much to lighten or darken.

### saturate(color, amount) / desaturate(color, amount)
Increases or decreases the saturation of a color. The `amount` parameter (0-100%) determines how much to saturate or desaturate.

### adjust-hue(color, degrees)
Adjusts the hue of a color by rotating it around the color wheel. The `degrees` parameter determines how many degrees to rotate.

### rgba(color, alpha) / transparentize(color, amount)
Adjusts the opacity of a color. The `alpha` parameter (0-1) determines the opacity level.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 