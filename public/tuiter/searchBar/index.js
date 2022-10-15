function searchBar () {
    return (`<div class="row">
            <div class="col-11">
                <div class="input-group">
                    <span class="input-group-text wd-search-icon"><i class="fa fa-search" style="color:Gray"></i></span>
                    <input class="form-control wd-search-bar" type="text" placeholder="Search Twitter">
                </div>
            </div>
            <div class="col-1">
                <span class="fa fa-cog fa-2x float-end" style="color: deepskyblue"></span>
            </div>
        </div>`)}

export default searchBar;