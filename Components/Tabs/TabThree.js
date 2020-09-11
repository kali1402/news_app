import React, { useEffect } from "react";
import { Text } from "react-native";
function TabThree() {
    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                ...Ionicons.font,
            });
        };
        loadFont();
    }, []);
    return (
        <>
            <Text>아아3</Text>
        </>
    );
}
export default TabThree;