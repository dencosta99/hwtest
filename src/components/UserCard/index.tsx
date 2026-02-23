import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface UserCardProps {
  name: string;
  email: string;
  phone: string;
  onPress: () => void;
}

const UserCard = memo(function UserCard({
  name,
  email,
  phone,
  onPress,
}: UserCardProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.email} numberOfLines={1}>
        {email}
      </Text>
      <Text style={styles.phone} numberOfLines={1}>
        {phone}
      </Text>
    </TouchableOpacity>
  );
});

export { UserCard };
