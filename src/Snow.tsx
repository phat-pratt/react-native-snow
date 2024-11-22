import React from 'react';
import { StyleSheet, View, Dimensions, TextStyle } from 'react-native';

import Snowflake from './Snowflake';
import { lightSnowflakes, mediumSnowflakes, SnowflakeConfig } from '../config/snowflakeStrategies';

const windowHeight = Dimensions.get('window').height + Dimensions.get('window').height * 0.1;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    zIndex: 9999,
    elevation: 9999,
    position: 'absolute',
    top: 0,
    left: -30,
    width: Dimensions.get('window').width + 30,
    height: windowHeight,
    backgroundColor: 'transparent',
  },
});

interface SnowProps {
  snowfall?: 'light' | 'medium';
  snowflakesStyle?: TextStyle;
}

const Snow: React.FC<SnowProps> = ({ snowfall = 'light', snowflakesStyle }) => {
  const snowflakes = snowfall === 'medium' ? mediumSnowflakes : lightSnowflakes;

  return (
    <View style={styles.view} pointerEvents="none">
      {snowflakes.map((snowflake: SnowflakeConfig, i: number) => (
        <Snowflake key={`snowflake-${i}`} {...snowflake} style={snowflakesStyle} />
      ))}
    </View>
  );
};

export default Snow;
