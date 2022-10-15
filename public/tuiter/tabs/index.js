import TablistItem from "./tabListItem.js";
import tabs from "./tabs.js";
function tablist () {
    return (`
    <ul class="nav nav-tabs mt-1">
    ${tabs.map(t => TablistItem(t)).join('')}
    </ul>
    `);
}
export default tablist;