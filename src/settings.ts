import {config} from "dotenv";

config();

export const SETTINGS = {
    PORT: process.env.PORT,
    PATH: {
        BLOGS: '/blogs',
        POSTS: '/posts',
        TESTING: '/testing',
    },
    MONGO_URL: 'mongodb+srv://vladimir777:4kuughy1HAimmtzO@cluster0.fgdxrtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    DB_NAME: 'blog_db',
    BLOG_COLLECTION_NAME: 'blogs',
    POSTS_COLLECTION_NAME: 'posts',
}

export const HTTP_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

type AuthDataType = {
    ADMIN_AUTH: string,
    FAKE_AUTH: string
}

export const AUTH_DATA: AuthDataType = {
    ADMIN_AUTH: 'admin:qwerty',
    FAKE_AUTH: 'username:password'
}
