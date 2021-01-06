export default class CommentService{
    url = "https://jsonplaceholder.typicode.com/comments";

     comments(){
        return  fetch(this.url).then(value => value.json())
    }
};
