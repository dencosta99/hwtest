import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, TextInput, View } from "react-native";

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
        style={styles.searchIcon}
      />
      <TextInput
        style={[styles.input, value.length > 0 && styles.inputWithClear]}
        placeholder={placeholder}
        placeholderTextColor={Colors.textTertiary}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <Pressable
          onPress={() => onChangeText("")}
          style={styles.clearButton}
          hitSlop={8}
        >
          <Ionicons
            name="close-circle"
            size={18}
            color={Colors.textTertiary}
          />
        </Pressable>
      )}
    </View>
  </View>
);

export { SearchBar };
