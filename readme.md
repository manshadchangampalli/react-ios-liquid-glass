# React Liquid Glass Component

A lightweight React component that applies a liquid glass effect to its children, providing a frosted glass aesthetic with customizable properties.

![React iOS Liquid Glass Editor](https://via.placeholder.com/800x400/ff6b9d/ffffff?text=React+iOS+Liquid+Glass+Editor)

## Live Editor

Try the component interactively: [https://react-ios-liquid-glass-doc-2ej2.vercel.app](https://react-ios-liquid-glass-doc-2ej2.vercel.app)

## Installation

You can install the `react-liquid-glass` package using one of the following package managers:

### npm

```bash
npm install react-ios-liquid-glass
```

### Yarn

```bash
yarn add react-ios-liquid-glass
```

### pnpm

```bash
pnpm add react-ios-liquid-glass
```

## Usage

Import the `LiquidGlass` component and its CSS file, then wrap your content with the component.

```jsx
import "react-ios-liquid-glass/dist/index.css";
import { LiquidGlass } from "react-ios-liquid-glass";

function App() {
  return (
    <LiquidGlass>
      <div>Your content here</div>
    </LiquidGlass>
  );
}
```

## Props

The `LiquidGlass` component accepts the following props:

| Prop           | Type                  | Description                                             | Default Value |
| -------------- | --------------------- | ------------------------------------------------------- | ------------- |
| `children`     | `React.ReactNode`     | The content to be wrapped with the liquid glass effect. | **Required**  |
| `width`        | `string`              | Sets the width of the component.                        | `"auto"`      |
| `height`       | `string`              | Sets the height of the component.                       | `"auto"`      |
| `borderRadius` | `string`              | Defines the border radius of the liquid glass effect.   | `"20px"`      |
| `blur`         | `string`              | Controls the blur intensity of the glass effect.        | `"10px"`      |
| `brightness`   | `string`              | Adjusts the brightness of the glass effect.             | `"1.1"`       |
| `padding`      | `string`              | Sets the padding inside the component.                  | `"10px"`      |
| `style`        | `React.CSSProperties` | Additional CSS styles to apply to the component.        | `undefined`   |

### Prop Details

- **`children`**: The content you want to apply the liquid glass effect to. This is a required prop.
- **`width`** and **`height`**: Define the dimensions of the component. Accepts any valid CSS length unit (e.g., `"100px"`, `"50%"`, `"auto"`).
- **`borderRadius`**: Controls the corner radius of the glass effect. Accepts valid CSS border-radius values (e.g., `"10px"`, `"50%"`).
- **`blur`**: Sets the blur effect intensity. Higher values create a more frosted appearance (e.g., `"5px"`, `"20px"`).
- **`brightness`**: Adjusts the brightness of the effect. Values greater than `1` increase brightness, while values less than `1` decrease it (e.g., `"1.2"`,
  `"0.8"`).
- **`padding`**: Adds inner spacing around the children. Accepts valid CSS padding values (e.g., `"15px"`, `"1rem"`).
- **`style`**: Allows custom CSS properties to be applied to the component, overriding default styles where applicable.

## Example

```jsx
import "react-ios-liquid-glass/dist/index.css";
import { LiquidGlass } from "react-ios-liquid-glass";

function App() {
  return (
    <LiquidGlass
      width="300px"
      height="200px"
      borderRadius="15px"
      blur="12px"
      brightness="1.3"
      padding="20px">
      <h1>Hello, Liquid Glass!</h1>
      <p>This is a frosted glass effect.</p>
    </LiquidGlass>
  );
}
```

## Notes

- Ensure the CSS file (`react-ios-liquid-glass/dist/index.css`) is imported to apply the liquid glass styling.
- The component inherits all standard HTML `div` attributes, as it extends `React.HTMLAttributes<HTMLDivElement>`.
- For optimal visual results, use a semi-transparent background or place the component over a visually rich background to enhance the frosted glass effect.

## License

This project is licensed under the MIT License.
