export default {
  theme_id: "default",
  layout: "normal",
  // [light,dark]
  mode: "light",
  // colors [teal,blue,...]
  color: "lightBlue",
  // [ltr,rtl]
  direction: "rtl",
  // [small,normal,medium,large,very_large]
  font_size: "normal",
  // [normal,chip]
  breadcrumb_style: "normal",
  // global table format, flexList, useTheme = true
  table: {
    alternative: true,
    background: "fill",
    vertical_line: false
  },
  // app bar theme
  app_bar: {
    bottom_line: false,
    box_shadow: 0,
    style: {
      // [default, primary]
      base: "primary",
      /**
       * [
       *    background,
       *    primary,
       *    primaryDark,
       *    gradient,
       *    gradientLight,
       *    secondary,
       *    style1..style4
       * ]
       * */
      type: "style4"
    }
  },
  // tools bar - left/right
  aside_tools_bar: {
    arrow:{
      show:true,       
      cover:true
    },
    box_shadow: 1,
    // [static, fixed]
    position: "static",
    style: {
      // [default, primary]
      base: "default",
      /**
       * [
       *    default,
       *    primary,
       * ]
       * */
      type: "default"
    },
  },  
  access_setting: {}
};
