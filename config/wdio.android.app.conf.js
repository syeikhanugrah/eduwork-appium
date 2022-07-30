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
    platformName: "Android",
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // This is `appium:` for all Appium Capabilities which can be found here
    // http://appium.io/docs/en/writing-running-appium/caps/
    "appium:deviceName": constant.ANDROID_DEVICE_NAME,
    "appium:platformVersion": constant.ANDROID_VERSION,
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app
    "appium:app": join(process.cwd(), `./apps/${constant.ANDROID_APP_FILE}`),
    "appium:newCommandTimeout": 240,
    "appium:appPackage": constant.ANDROID_APP_PACKAGE,
    "appium:appActivity": constant.ANDROID_APP_ACTIVITY,
  },
];

export const config = {
  ...baseConfig,
};
