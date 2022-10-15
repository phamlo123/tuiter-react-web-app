
function TablistItem(t) {
    return (`
    <li class="nav-item">
        <a class="nav-link ${t.active ? "active" : ""}" href="#">${t.title}</a>
    </li>
    `)
}
export default TablistItem;
