import React, { useEffect, useState } from "react";
import { Animated, View } from "react-native";

import { styles } from "./styles";

const SkeletonLoader = (): React.JSX.Element => {
  const [opacity] = useState(() => new Animated.Value(0.3));

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.badgePlaceholder, { opacity }]} />
      <Animated.View style={[styles.lineLong, { opacity }]} />
      <Animated.View style={[styles.lineMedium, { opacity }]} />
      <Animated.View style={[styles.lineShort, { opacity }]} />
    </View>
  );
};

export { SkeletonLoader };
