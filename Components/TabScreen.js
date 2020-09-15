import React from 'react';
import { Container, Header, Tab, Tabs, Body, Title } from 'native-base';
import Tab1 from './Tabs/TabOne';
import Tab2 from './Tabs/TabTwo';
import Tab3 from './Tabs/TabThree';

function TabScreen() {
    return (
        <Container>
            <Header hasTabs>
                <Body>
                    <Title>News</Title>
                </Body>
            </Header>
            <Tabs>
                <Tab heading="health">
                    <Tab1 />
                </Tab>
                <Tab heading="sports">
                    <Tab2 />
                </Tab>
                <Tab heading="entertainment">
                    <Tab3 />
                </Tab>
            </Tabs>
        </Container>
    );
}
export default TabScreen;