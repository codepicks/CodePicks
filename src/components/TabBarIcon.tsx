import React from "react";
import * as Icon from "@expo/vector-icons";

import { colors } from "../constants";

type Props = {
  type: string;
  name: string;
  focused: boolean;
};
const TabBarIcon = ({ type = "Ionicons", name, focused }: Props) => {
  // @ts-ignore
  const IconComponent = Icon[type];

  return (
    <IconComponent
      name={name}
      size={22}
      style={{ marginBottom: -3 }}
      color={focused ? colors.tabIconSelected : colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
