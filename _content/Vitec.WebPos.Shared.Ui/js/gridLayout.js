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
}

function enableGridLayout(edit) {
    grid.setStatic(!edit);
}

function saveGrid() {
    console.log(grid.save());
    return grid.save();
}

window.saveGrid = saveGrid;
window.gridLayout = gridLayout;
window.enableGridLayout = enableGridLayout;
