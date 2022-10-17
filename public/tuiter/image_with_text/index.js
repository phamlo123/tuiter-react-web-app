
function image_text (img_src) {
    return (`
    <div class="card text-white">
        <img class="img-fluid card-img-top mt-1" alt="Responsive image" src= "${img_src}">
        <div class="card-img-overlay flex-column d-flex">
            <div class="mt-auto"> <h2> SpaceX's Starship </h2></div>
        </div>
    </div>
    `)
}

export default image_text;