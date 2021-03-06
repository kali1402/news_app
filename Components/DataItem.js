import React from 'react';
import { View } from 'react-native';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import moment from 'moment';

function DataItem({ article, onPress }) {
    const viewPress = () => {
        onPress({
            url: article.url,
            title: article.title
        });
    };
    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: article.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png' }} />
            </Left>
            <Body>
                <Text numberOfLines={2}>{article.title}</Text>
                <Text note numberOfLines={2}>{article.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <Text note>{article.source.name}</Text>
                    <Text note>{moment(article.publishedAt || moment.now).fromNow()}</Text>
                </View>
            </Body>
            <Right>
                <Button transparent onPress={viewPress}>
                    <Text>보기</Text>
                </Button>
            </Right>
        </ListItem>
    );
};

export default DataItem;