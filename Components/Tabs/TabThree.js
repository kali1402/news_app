import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from "react-native";
import { Container, Content, List } from 'native-base';
import { getArticle_entertainment } from '../../api/news';
import DataItem from '../DataItem';
import ModalView from '../ModalView';

function TabOne() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    const [modalView, setModalView] = useState(false);
    const [modalArticleData, setModalArticleData] = useState({});

    useEffect(() => {
        async function get_articles() {
            setArticles(await getArticle_entertainment());
            setIsLoading(false);
        }

        get_articles();
    }, []);

    const viewModal = (articleData) => {
        setModalView(true);
        setModalArticleData(articleData);
    };

    const handleModalClose = () => {
        setModalView(false);
        setModalArticleData({});
    };

    const pageView = isLoading ? (
        <View>
            <ActivityIndicator animating={isLoading} size="large" />
            <Text style={{ marginTop: 10 }}>로딩중...</Text>
        </View>
    ) : (
            <List
                dataArray={articles}
                renderRow={(article) => {
                    return <DataItem article={article} onPress={viewModal} />
                }}
            />
        );

    return (
        <Container>
            <Content>
                {pageView}
            </Content>
            <ModalView
                showModal={modalView}
                articleData={modalArticleData}
                onClose={handleModalClose}
            />
        </Container>
    );
};

export default TabOne;