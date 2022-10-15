
function PostSummaryItem (post) {

    return (` 
    <li class="list-group-item">
    <div class="row">
        <div class="col-10">
            <div style="color:gray">${post.topic}</div>
            <div>
                <span class="fw-bold"> ${post.userName} </span>
                <span><i class="fa fa-check-circle"></i></span>
                <span style="color:gray">  - ${post.time} </span>
            </div>
            <div> ${post.title}</div>
        </div>
    
        <div class="col-2">
            <img class="img-fluid float-end wd-image" alt="Responsive image" src= ${post.image}>
        </div>
    </div>    
    </li>`)
;}


export default PostSummaryItem;