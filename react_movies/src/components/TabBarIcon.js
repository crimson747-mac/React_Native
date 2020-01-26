import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVATE_COLOR, INACTIVATE_COLOR } from "../../constants/Colors";


const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    size={26}
    name={name}
    color={focused ? ACTIVATE_COLOR : INACTIVATE_COLOR}
  />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;
