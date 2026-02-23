import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search contacts...",
}: SearchBarProps): React.JSX.Element => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Ionicons
        name="search"
        size={18}
        color={Colors.textTertiary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.textTertiary}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  </View>
);

export { SearchBar };
