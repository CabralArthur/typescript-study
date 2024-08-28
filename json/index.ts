import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';


// Interfaces are used to define the structure of an object
interface Post {
    id: number;
    title: string;
}

axios.get(url).then(response => {
    const post:Post = response.data;

    const id = post.id;
    const title = post.title;

    logPost(id, title);
});

const logPost = (id: number, title: string) => {
    console.log(`
        The post with id: ${id}
        has a title of: ${title}
    `);
};