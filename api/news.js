import { useEffect } from 'react';
import { article_url, category, country_code, __api_key } from '../config/rest_config';
import axios from 'axios';

export const getArticles = async () => {
    useEffect(() => {
        async function get_articles() {
            setArticles(await getArticles());
            setIsLoading(false);
        }

        get_articles();
    }, []);
    try {
        const articles = await axios.get(`${article_url}?country=${country_code}&category=${category}&apiKey=${__api_key}`);
        return articles.data.articles;
    } catch (error) {
        throw error;
    }
}