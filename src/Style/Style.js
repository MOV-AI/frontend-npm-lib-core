import icons from "../../resources/fonts/movai.woff";
import { createGlobalStyle } from "styled-components";

// New added font
const Style = createGlobalStyle`
@font-face {
  font-family: 'mov.ai';
  src: url(${icons}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-time .path1:before {
  content: "\e900";
  color: rgb(0, 178, 188);
}
.icon-time .path2:before {
  content: "\e901";
  margin-left: -1em;
  color: rgb(250, 250, 250);
}
.icon-carts .path1:before {
  content: "\e902";
  color: rgb(0, 178, 188);
}
.icon-carts .path2:before {
  content: "\e903";
  margin-left: -1em;
  color: rgb(250, 250, 250);
}
.icon-tree_24px:before {
  content: "\e906";
}
.icon-expand_more_24px:before {
  content: "\e907";
}
.icon-expand_less_24px:before {
  content: "\e908";
}
.icon-chevron_right_24px:before {
  content: "\e909";
}
.icon-chevron_left_24px:before {
  content: "\e90a";
}
.icon-Statistics:before {
  content: "\e90b";
}
.icon-Scenes:before {
  content: "\e90c";
}
.icon-Sad:before {
  content: "\e90d";
}
.icon-Normal:before {
  content: "\e90e";
}
.icon-Nodes:before {
  content: "\e90f";
}
.icon-Layouts:before {
  content: "\e910";
}
.icon-Happy:before {
  content: "\e911";
}
.icon-Flows:before {
  content: "\e912";
}
.icon-Filters:before {
  content: "\e913";
}
.icon-Empty:before {
  content: "\e914";
}
.icon-Callbacks:before {
  content: "\e915";
}
.icon-Annotations:before {
  content: "\e916";
}
.icon-create_new_folder_24px:before {
  content: "\e918";
}
.icon-widgets_24px:before {
  content: "\e919";
}
.icon-log_24px:before {
  content: "\e91a";
}
.icon-outlinedhidden:before {
  content: "\e91b";
}
.icon-outlined:before {
  content: "\e91c";
}
.icon-repeat:before {
  content: "\e91d";
  color: #2090b7;
}
.icon-edit:before {
  content: "\e91e";
  color: #2091b7;
}
.icon-download:before {
  content: "\e91f";
  color: #2091b7;
}
.icon-details_24px:before {
  content: "\e920";
}
.icon-delete:before {
  content: "\e921";
  color: #2091b7;
}
.icon-check_circle_24px-copy:before {
  content: "\e922";
}
.icon-add:before {
  content: "\e923";
  color: #2091b7;
}
.icon-drag_indicator-24px-3:before {
  content: "\e924";
}

`;

export default Style;
