import PostSummaryList from "../PostSummaryList/index.js";
import searchBar from "../searchBar/index.js";
import tablist from "../tabs/index.js";
import image_text from "../image_with_text/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       ${searchBar()}
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                        ${tablist()}
           </ul>
           <!-- image with overlaid text -->
           ${image_text("../../images/rocket.jpeg")}
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
