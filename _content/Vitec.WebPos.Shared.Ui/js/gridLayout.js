let grid;

export function gridLayout(cols, rows) {
    GridStack.renderCB = function (el, w) {
        el.innerHTML = w.content;
    };

    grid = GridStack.init({
        column: cols,
        float: true,
        cellHeight: 100 / rows,
        cellHeightUnit: "%",
        maxRow: rows,
        minRow: rows,
        margin: 10,
        staticGrid: true
    });
    grid.on("added removed change", function (e, items) {
        let str = "";
        items.forEach(function (item) {
            str += " (x,y)=" + item.x + "," + item.y;
        });
        console.log(e.type + " " + items.length + " items:" + str);
    });
}

function enableGridLayout(edit) {
    grid.setStatic(!edit);
}

function saveGrid() {
    if (grid) {
        return grid.save();
    }

    return null;
}
function clearGrid() {
    if (grid) {
         grid.destroy(false);
         grid = null;
    }
}

window.clearGrid = clearGrid;
window.saveGrid = saveGrid;
window.gridLayout = gridLayout;
window.enableGridLayout = enableGridLayout;
