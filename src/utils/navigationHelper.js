import { StackActions, NavigationActions } from 'react-navigation'

export const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]

  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

export const getCurrentRouteParams = navigationState => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]

  if (route.routes) {
    return getCurrentRouteParams(route)
  }
  return route.params
}

export const navigateWithReset = (routeName, navigation) => {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName })],
  })
  navigation.dispatch(resetAction)
}
