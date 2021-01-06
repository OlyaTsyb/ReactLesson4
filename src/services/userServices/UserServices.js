export default class UserService {
    url = "https://jsonplaceholder.typicode.com/users";

     users() {
        return  fetch(this.url).then(value => value.json());
    }
};