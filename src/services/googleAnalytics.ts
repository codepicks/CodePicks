import { Analytics as GoogleAnalytics, Event, ScreenHit } from "expo-analytics";
// @ts-ignore TODO: add types for dotenv
import { GOOGLE_ANALYTICS_UID } from "react-native-dotenv";
import { getCurrentRouteName, getCurrentRouteParams } from "../utils";

class Analytics {
  ga: any;

  code: any;

  constructor(code = "") {
    this.ga = null;
    this.code = code;
  }

  init = (uid: string) => {
    this.ga = new GoogleAnalytics(this.code, { uid });
  };

  screenHit = (prevState: any, currentState: any) => {
    if (__DEV__) return;

    const currentScreen = getCurrentRouteName(currentState);
    const prevScreen = getCurrentRouteName(prevState);

    if (prevScreen === currentScreen) return;

    const params = getCurrentRouteParams(currentState);
    if (typeof params === "object") {
      const { source_url, category } = params;

      if (category) {
        this.ga.addCustomDimension(1, category);
      }
      if (source_url) {
        this.ga.addCustomDimension(2, source_url);
      }
    }

    this.ga.hit(new ScreenHit(currentScreen));
  };

  eventHit = (category = "", action = "", label = "", value = 0) => {
    if (!__DEV__ && category && action) {
      const params: [string, string, string?, number?] = [category, action];

      if (label) {
        params[2] = label;

        if (value >= 0) {
          params[3] = value;
        }
      }

      this.ga.event(new Event(...params));
    }
  };
}

export default new Analytics(GOOGLE_ANALYTICS_UID);
