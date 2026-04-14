const React = require("react")
const { ColorModeScript } = require("@chakra-ui/react")
const theme = require("./src/theme/theme").default

exports.onRenderBody = ({
  setHtmlAttributes,
  setPreBodyComponents,
  setHeadComponents,
}) => {
  setHtmlAttributes({ lang: `en` })

  setHeadComponents([
    <script
      key="gtag-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-JLTLQD7YNX"
    ></script>,

    <script
      key="gtag-init"
      dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-JLTLQD7YNX');
    gtag('config', 'AW-11139973355');

    window.gtag_report_conversion = function(url) {
      var callback = function () {
        if (typeof(url) != 'undefined' && url !== null) {
          window.location = url;
        }
      };
      
      gtag('event', 'conversion', {
        'send_to': 'AW-11139973355/2dw2CIip_PAZEOuB-r8p',
        'value': 1.0,
        'currency': 'USD',
        'event_callback': callback
      });

      return false;
    };
  `,
}}
    />,
  ])

  setPreBodyComponents([
    <ColorModeScript key="chakra-color-mode" initialColorMode="dark" />,
  ])
}
