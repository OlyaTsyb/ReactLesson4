export default  class PostService {
    url = "https://jsonplaceholder.typicode.com/posts";

    posts() {
        return fetch(this.url).then(value => value.json());
    }
};