import React, { useEffect } from "react";
import TabOne from "./Tabs/TabOne";
function TabTwo() {
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
        <TabOne />
    );
}
export default TabTwo;