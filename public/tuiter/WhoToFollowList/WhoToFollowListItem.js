function WhoToFollowListItem (who) {

    return (`                        
    <li class="list-group-item"> 
    <div class="row">
        <div class="col-1">
            <img class="wd-small-image img-rounded" src=${who.avatarIcon}>
        </div>
        <div class="col-9">
            <div class="fw-bold wd-small-font ms-2">
                ${who.userName}
                <span><i class="fa fa-check-circle"></i></span>
            </div>
            <div class="wd-small-font ms-2">
                @${who.handle}
            </div>
        </div>
        <div class="col-1">
            <button type="submit" class="btn btn-primary btn-sm rounded-pill">Follow</button>
        </div>
    </div>
    </li>`)
}

export default WhoToFollowListItem;