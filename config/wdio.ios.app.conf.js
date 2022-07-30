import { join } from "path";
import { config as baseConfig } from "./wdio.shared.conf";
import constant from "./constant";

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
baseConfig.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "iOS",
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // This is `appium:` for all Appium Capabilities which can be found here
    // http://appium.io/docs/en/writing-running-appium/caps/
    "appium:deviceName": constant.IOS_DEVICE_NAME,
    "appium:platformVersion": constant.IOS_VERSION,
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    // The path to the app
    "appium:app": join(process.cwd(), `./apps/${constant.IOS_APP_FILE}`),
    "appium:newCommandTimeout": 240,
  },
];

export const config = {
  ...baseConfig,
};
