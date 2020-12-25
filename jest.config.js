exports.module = {
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
};
