import React, { useEffect } from 'react';
import { Container, Header, Tab, Tabs, Body, Title } from 'native-base';
import Tab1 from './Tabs/TabOne';
import Tab2 from './Tabs/TabTwo';
import Tab3 from './Tabs/TabThree';

function TabScreen() {
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
        <Container>
            <Header hasTabs>
                <Body>
                    <Title>News</Title>
                </Body>
            </Header>
            <Tabs>
                <Tab heading="Tab1">
                    <Tab1 />
                </Tab>
                <Tab heading="Tab2">
                    <Tab2 />
                </Tab>
                <Tab heading="Tab3">
                    <Tab3 />
                </Tab>
            </Tabs>
        </Container>
    );
}
export default TabScreen;