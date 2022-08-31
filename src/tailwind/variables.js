const screen = require("./breakpoint.js");
const colors = require("./colors.js");
const range = require("lodash/range");

class variables {
  constructor() {}

  static get space() {
    return 4;
  }

  static get fontSize() {
    return 2;
  }

  static get fontFamily() {
    return {
      zh: [
        "Microsoft JhengHei",
        "微軟正黑體",
        "PingFangTC",
        "Helvetica",
        "Arial",
        "Verdana",
        "sans-serif",
      ],
    };
  }

  static get theme() {
    return {
      screens: {
        xs: `${screen.xs}px`,
        sm: `${screen.sm}px`,
        md: `${screen.md}px`,
        lg: `${screen.lg}px`,
        xl: `${screen.xl}px`,
      },
      spacing: {
        default: "1px",
        ...range(25).reduce((acc, cur) => {
          return { ...acc, [cur]: `${cur * this.space}px` };
        }, {}),
      },
      colors,
    };
  }

  static get disabled() {
    return {
      backgroundImage: false,
      gradientColorStops: false,
    };
  }
}

module.exports = variables;
