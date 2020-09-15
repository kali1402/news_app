import { article_url, category_general, category_sports, category_entertainment, country_code, __api_key } from '../config/rest_config';
import axios from 'axios';

export const getArticle_general = async () => {
    try {
        const articles_general = await axios.get(`${article_url}?country=${country_code}&category=${category_general}&apiKey=${__api_key}`);
        return (
            articles_general.data.articles
        );
    } catch (error) {
        throw error;
    }
}

export const getArticle_sports = async () => {
    try {
        const articles_sports = await axios.get(`${article_url}?country=${country_code}&category=${category_sports}&apiKey=${__api_key}`);
        return (
            articles_sports.data.articles
        );
    } catch (error) {
        throw error;
    }
}

export const getArticle_entertainment = async () => {
    try {
        const articles_entertainment = await axios.get(`${article_url}?country=${country_code}&category=${category_entertainment}&apiKey=${__api_key}`);
        return (
            articles_entertainment.data.articles
        );
    } catch (error) {
        throw error;
    }
}