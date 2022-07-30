import * as dotenv from "dotenv";
dotenv.config();

export default {
  ANDROID_DEVICE_NAME: process.env.ANDROID_DEVICE_NAME,
  ANDROID_VERSION: process.env.ANDROID_VERSION,
  ANDROID_APP_FILE: process.env.ANDROID_APP_FILE,
  ANDROID_APP_PACKAGE: process.env.ANDROID_APP_PACKAGE,
  ANDROID_APP_ACTIVITY: process.env.ANDROID_APP_ACTIVITY,

  IOS_DEVICE_NAME: process.env.IOS_DEVICE_NAME,
  IOS_VERSION: process.env.IOS_VERSION,
  IOS_APP_FILE: process.env.IOS_APP_FILE,
};
