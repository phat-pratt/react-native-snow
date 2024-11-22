import React, { useEffect, useRef } from 'react';
import { StyleSheet, Dimensions, Animated, Easing, TextStyle } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const topOffset = HEIGHT * 0.1;
const windowHeight = HEIGHT + topOffset;

const styles = StyleSheet.create({
    text: {
        top: -topOffset,
        height: windowHeight,
        color: 'white',
        backgroundColor: 'transparent',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

interface SnowflakeProps {
    glyph?: string;
    size?: number;
    offset?: `${number}%`;
    amplitude?: number;
    fallDuration?: number;
    shakeDuration?: number;
    fallDelay?: number;
    shakeDelay?: number;
    style?: TextStyle;
}

const Snowflake: React.FC<SnowflakeProps> = ({
    glyph = '❅',
    size = 12,
    amplitude = 60,
    fallDuration = 10000,
    shakeDuration = 4000,
    fallDelay = 0,
    shakeDelay = 0,
    offset = 0,
    style,
}) => {
    const translateY = useRef(new Animated.Value(0)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const fallAnimation = useRef<Animated.CompositeAnimation | null>(null);
    const shakeAnimation = useRef<Animated.CompositeAnimation | null>(null);

    const stopAnimation = () => {
        if (fallAnimation.current) {
            fallAnimation.current.stop();
            fallAnimation.current = null;
            translateY.setValue(0);
        }
        if (shakeAnimation.current) {
            shakeAnimation.current.stop();
            shakeAnimation.current = null;
            translateX.setValue(0);
        }
    };

    const initAnimation = () => {
        fallAnimation.current = Animated.loop(
            Animated.timing(translateY, {
                toValue: 1,
                easing: Easing.linear,
                duration: fallDuration,
                useNativeDriver: true,
            })
        );

        shakeAnimation.current = Animated.loop(
            Animated.sequence([
                Animated.timing(translateX, {
                    toValue: 1,
                    easing: Easing.inOut(Easing.sin),
                    duration: shakeDuration / 2,
                    useNativeDriver: true,
                }),
                Animated.timing(translateX, {
                    toValue: 0,
                    easing: Easing.inOut(Easing.sin),
                    duration: shakeDuration / 2,
                    useNativeDriver: true,
                }),
            ])
        );

        setTimeout(() => {
            fallAnimation.current?.start();
        }, fallDelay);

        setTimeout(() => {
            shakeAnimation.current?.start();
        }, shakeDelay);
    };

    useEffect(() => {
        initAnimation();
        return () => {
            stopAnimation();
        };
    }, []);

    const interpolatedX = translateX.interpolate({
        inputRange: [0, 1],
        outputRange: [0, amplitude],
    });

    const interpolatedY = translateY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, windowHeight],
    });

    return (
        <Animated.Text
            style={[
                styles.text,
                {
                    fontSize: size,
                    left: offset,
                    transform: [{ translateX: interpolatedX }, { translateY: interpolatedY }],
                },
                style,
            ]}
        >
            {glyph}
        </Animated.Text>
    );
};

export default Snowflake;
