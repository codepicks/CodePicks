import { Constants } from 'expo'
import {
  Analytics as GoogleAnalytics,
  Event,
  ScreenHit,
} from 'expo-analytics'
import { getCurrentRouteName } from '../utils'

class Analytics {
  constructor(code = null) {
    this.ga = null
    this.code = code
  }

  init = uid => {
    this.ga = new GoogleAnalytics(this.code, { uid })
  }

  screenHit = (prevState, currentState) => {
    if (__DEV__) return

    const currentScreen = getCurrentRouteName(currentState)
    const prevScreen = getCurrentRouteName(prevState)

    if (prevScreen === currentScreen) return

    this.ga.hit(new ScreenHit(currentScreen))
  }

  eventHit = (category = null, action = null, label = null, value = 0) => {
    if (!__DEV__ && category && action) {
      const params = [category, action]

      if (label) {
        params[2] = label;

        if (value >= 0) {
          params[3] = value;
        }
      }

      this.ga.event(new Event(...params));
    }
  }
}

export default new Analytics(Constants.manifest.extra.ga);
