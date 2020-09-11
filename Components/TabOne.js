import React, { useEffect } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

function TabOne() {
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
            <Content>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'Image URL' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}
export default TabOne;