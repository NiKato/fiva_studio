/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")
const { ColorModeScript } = require("@chakra-ui/react")
const theme = require("./src/theme/theme").default

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` })

  setPreBodyComponents([
    <ColorModeScript
      key="chakra-color-mode"
      initialColorMode={theme.config.initialColorMode}
    />,
  ])
}
