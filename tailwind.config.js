/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-1": "#fff",
        gray: {
          "100": "#fdfdff",
          "200": "#1e293b",
          "300": "#161c2d",
          "400": "#18181b",
          "500": "rgba(0, 0, 0, 0.4)",
          "600": "rgba(255, 255, 255, 0.8)",
          "700": "rgba(0, 0, 0, 0.5)",
          "800": "rgba(255, 255, 255, 0.7)",
          "900": "rgba(22, 28, 45, 0.7)",
        },
        "consumer-colors-primary-1": "#fce7cc",
        tomato: "#f64b4b",
        orange: "rgba(255, 157, 38, 0.2)",
        "m3-black": "#000",
        lightcoral: "#e98080",
        "consumer-colors-monochromatic": "#ff9d26",
        "character-title-85": "rgba(0, 0, 0, 0.85)",
        hitbox: "rgba(255, 255, 255, 0)",
        "neutral-10": "#262626",
        "m3-sys-light-primary": "#6750a4",
        "m3-sys-light-outline": "#79747e",
        "neutral-8": "#595959",
        "neutral-7": "#8c8c8c",
        whitesmoke: {
          "100": "#f4f7fa",
          "200": "#f2f4f8",
          "300": "#e7e9ed",
        },
        "consumer-colors-primary": "#f28500",
        "consumer-colors-complemantary": "#006cf0",
        "neutral-5": "#d9d9d9",
        "neutral-9": "#434343",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        "input-standard-enabledborder": "rgba(0, 0, 0, 0.42)",
        "m3-ref-neutral-neutral20": "#322f35",
        ghostwhite: {
          "100": "#f3f5f9",
          "200": "#f4f1fc",
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e6e6",
          "300": "#dbd9e3",
        },
        divider: "rgba(0, 0, 0, 0.12)",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "structure-border": "#dcdee4",
        "text-subtext": "#696f8c",
        "status-active": "#0085ff",
        "text-header": "#141414",
        "primary-green": "#6cbc6e",
        "components-input-outlined-enabledborder": "rgba(0, 0, 0, 0.23)",
        "text-disabled": "rgba(0, 0, 0, 0.38)",
        "consumer-colors-primary-6": "#e08e2b",
        "neutral-11": "#1f1f1f",
        "input-field-background": "#f3f4f8",
        "grey-600": "#757575",
        "primary-main": "#2196f3",
        cornflowerblue: "rgba(33, 150, 243, 0.38)",
        "highlight-lightest": "#eaf2ff",
        "highlight-darkest": "#006ffd",
        "primary-6": "#1890ff",
        "conditional-divider": "rgba(0, 0, 0, 0.06)",
        "character-disabled-placeholder-25": "rgba(0, 0, 0, 0.25)",
        "neutral-light-light": "#f8f9fe",
        "neutral-dark-light": "#71727a",
        "grey-grey-300": "#e0e0e0",
        "neutral-3": "#f5f5f5",
        "components-avatar-fill": "#bdbdbd",
        "success-main": "#2e7d32",
        "primary-dark": "#1e88e5",
        aliceblue: "#f1f5f9",
        darkslategray: "#4a4a4a",
        "blue-gray-900": "#0f172a",
        "blue-gray-600": "#475569",
        "vendor-colors-primary-1": "#70fbfb",
        "default-alert": "#da1e28",
        "blue-600": "#2563eb",
        "vendor-colors-triadic": "#a4a404",
        "vendor-colors-monochromatic": "#006a6a",
        "material-theme-source-primary": "#0b57d0",
      },
      spacing: {
        boundvariablesdata: "8px",
      },
      fontFamily: {
        "web-primary-h3-primary-dm-sans": "'DM Sans'",
        "open-sans": "'Open Sans'",
        "gilroy-bold": "Gilroy-Bold",
        "h5-medium": "Roboto",
        "heading-h5": "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "81xl": "100px",
        "25xl": "44px",
        "13xl": "32px",
        "2xs-1": "10.1px",
        "7xs-1": "5.1px",
        "6xl-4": "25.4px",
        "9xl": "28px",
        "45xl": "64px",
        "31xl": "50px",
        borderradius: "4px",
      },
    },
    fontSize: {
      mini: "15px",
      "4xs-4": "8.4px",
      mid: "17px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      smi: "13px",
      "13xl": "32px",
      "7xl": "26px",
      sm: "14px",
      "2xl": "21px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      lg: "18px",
      "41xl": "60px",
      "17xl": "36px",
      xs: "12px",
      "base-2": "15.2px",
      "mid-7": "17.7px",
      "5xl": "24px",
      "3xl": "22px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
