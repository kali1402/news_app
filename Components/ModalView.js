import React from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Body, Content, Left, Icon, Right, Title, Button } from 'native-base';

function ModalView({ showModal, onClose, articleData }) {

    const webViewHeight = Dimensions.get('window').height - 100;

    const handleShare = () => {
        const { url, title } = articleData;
        const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            { title, message, url: message },
            { dialogTitle: '`Share ${title}`' }
        );
    };

    return (
        <Modal
            animationType="slide"
            transparent
            visible={showModal}
        >
            <Container style={{ margin: 15, marginBottom: 0, backgroundColor: 'white' }}>
                <Header style={{ backgroundColor: 'silver' }}>
                    <Left>
                        <Button onPress={onClose} transparent >
                            <Icon name="close" style={{ color: 'white', fontSize: 30 }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title children={articleData.title} style={{ color: 'white' }}></Title>
                    </Body>
                    <Right>
                        <Button onPress={handleShare} transparent >
                            <Icon name="share" style={{ color: 'white', fontSize: 30 }} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <WebView
                        containerStyle={{ height: webViewHeight }}
                        source={{ uri: articleData.url }}
                        style={{ flex: 1 }}
                        onError={onClose}
                        startInLoadingState
                        scalesPageToFit
                    />
                </Content>
            </Container>
        </Modal>
    );
};

export default ModalView;