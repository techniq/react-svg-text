React `<Text>` component that provides enhancements over using SVG's `<text>` directly including:

- Word-wrapping (when `width` prop is defined)
- Vertical alignment (`verticalAnchor` prop)
- Rotation (`angle` prop)
- Scale-to-fit text (`scaleToFit` prop)

See [demo](https://techniq.github.io/react-svg-text/) to see how it works


TODO:
- Fix tests (jsdom does not support `getComputedTextLength()` or `getBoundingClientRect()`) and setup CI
- Streamline build
- Improve documentation
- Publish to npm