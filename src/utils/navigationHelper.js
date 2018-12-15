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
