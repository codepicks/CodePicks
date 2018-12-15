import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
import { getCurrentRouteName, getCurrentRouteParams } from '../utils'

export const tracker = new GoogleAnalyticsTracker('UA-116967180-7', {
  Category: 1,
  URL: 2,
})

export const logScreenView = (prevState, currentState) => {
  if (__DEV__) return

  const currentScreen = getCurrentRouteName(currentState)
  const prevScreen = getCurrentRouteName(prevState)

  if (prevScreen !== currentScreen) {
    const params = getCurrentRouteParams(currentState)
    let customDimensions = {}

    if (typeof params === 'object') {
      const { source_url, category } = params

      if (category) {
        customDimensions = { Category: category, ...customDimensions }
      }
      if (source_url) {
        customDimensions = { URL: source_url, ...customDimensions }
      }
    }

    tracker.trackScreenView(currentScreen, { customDimensions })
  }
}
