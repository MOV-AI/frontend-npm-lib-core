import icons from "../../resources/fonts/movai.woff";
import { createGlobalStyle } from "styled-components";

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
  font-family: 'mov.ai' !important;
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

.icon-AddGlobal:before {
  content: "\\e900";
}
.icon-out:before {
  content: "\\e901";
}
.icon-in:before {
  content: "\\e902";
}
.icon-account_circle:before {
  content: "\\e903";
}
.icon-data_setting:before {
  content: "\\e904";
}
.icon-supervisor_account:before {
  content: "\\e905";
}
.icon-add_box:before {
  content: "\\e906";
}
.icon-time .path1:before {
  content: "\\e907";
  color: rgb(0, 178, 188);
}
.icon-time .path2:before {
  content: "\\e908";
  margin-left: -1em;
  color: rgb(250, 250, 250);
}
.icon-carts .path1:before {
  content: "\\e909";
  color: rgb(0, 178, 188);
}
.icon-carts .path2:before {
  content: "\\e90a";
  margin-left: -1em;
  color: rgb(250, 250, 250);
}
.icon-tree_24px:before {
  content: "\\e90b";
}
.icon-expand_more_24px:before {
  content: "\\e90c";
}
.icon-expand_less_24px:before {
  content: "\\e90d";
}
.icon-chevron_right_24px:before {
  content: "\\e90e";
}
.icon-chevron_left_24px:before {
  content: "\\e90f";
}
.icon-Statistics:before {
  content: "\\e910";
}
.icon-Scenes:before {
  content: "\\e911";
}
.icon-Sad:before {
  content: "\\e912";
}
.icon-Normal:before {
  content: "\\e913";
}
.icon-Nodes:before {
  content: "\\e914";
}
.icon-Layouts:before {
  content: "\\e915";
}
.icon-Happy:before {
  content: "\\e916";
}
.icon-Flows:before {
  content: "\\e917";
}
.icon-Filters:before {
  content: "\\e918";
}
.icon-Empty:before {
  content: "\\e919";
}
.icon-Callbacks:before {
  content: "\\e91a";
}
.icon-Annotations:before {
  content: "\\e91b";
}
.icon-create_new_folder_24px:before {
  content: "\\e91c";
}
.icon-widgets_24px:before {
  content: "\\e91d";
}
.icon-log_24px:before {
  content: "\\e91e";
}
.icon-outlined_hidden:before {
  content: "\\e91f";
}
.icon-outlined:before {
  content: "\\e920";
}
.icon-repeat:before {
  content: "\\e921";
  color: #2090b7;
}
.icon-edit:before {
  content: "\\e922";
  color: #2091b7;
}
.icon-download:before {
  content: "\\e923";
  color: #2091b7;
}
.icon-details_24px:before {
  content: "\\e924";
}
.icon-delete:before {
  content: "\\e925";
  color: #2091b7;
}
.icon-check_circle_24px-copy:before {
  content: "\\e926";
}
.icon-add:before {
  content: "\\e927";
  color: #2091b7;
}
.icon-drag_indicator-24px-3:before {
  content: "\\e928";
}
`;
export default Style;
