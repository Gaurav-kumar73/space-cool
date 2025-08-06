import { useTheme } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { icon } from '../constant/icon';


const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, color, label }) => {
    const { colors } = useTheme();

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0, { duration: 500 });

    }, [scale, isFocused])

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleVale = interpolate(scale.value, [1, 0], [1, 1.2]);

        const top = interpolate(scale.value, [0, 1], [0, 9])

        return {
            transform: [{
                scale: scaleVale
            }],
            top
        }
    })

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])

        return { opacity }
    })

    return (
        <Pressable

            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
        >
            <Animated.View style={animatedIconStyle}>
                {icon[routeName]({
                    color: isFocused ? "#fff" : "#222"
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? "#fff" : "#222", fontSize: 12 }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

export default TabBarButton

const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }

})