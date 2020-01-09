import icons from "../../resources/fonts/movai.woff";

const Style = `
  @font-face {
    font-family: "mov.ai";
    src: url(${icons}) format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"],
  [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: "mov.ai" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-Empty-Results:before {
    content: "\e900";
  }
  .icon-Sad:before {
    content: "\e90a";
  }
  .icon-Happy:before {
    content: "\e90b";
  }
  .icon-Normal:before {
    content: "\e903";
  }
  .icon-Callbacks:before {
    content: "\e901";
  }
  .icon-Filters:before {
    content: "\e902";
  }
  .icon-Flows:before {
    content: "\e904";
  }
  .icon-Layouts:before {
    content: "\e905";
  }
  .icon-Nodes:before {
    content: "\e906";
  }
  .icon-Scenes:before {
    content: "\e907";
  }
  .icon-Statistics:before {
    content: "\e908";
  }
  .icon-Annotations:before {
    content: "\e909";
  }
`;

export default Style;
