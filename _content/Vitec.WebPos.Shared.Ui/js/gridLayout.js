let grid;

export function gridLayout(cols = 5, rows = 4) {
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

function reinitGridLayout(layout) {
    if (!grid) {
        gridLayout();
        return;
    }

    // Start batch update for performance
    grid.batchUpdate();

    // Remove existing widgets but keep DOM elements
    grid.removeAll(false);

    // Add widgets from layout
    if (layout && layout.length > 0) {
        layout.forEach(item => {
            var element = document.querySelector(`[gs-id="${item.id}"]`);
            if (element) {
                try {
                    grid.makeWidget(element);
                } catch (error) {
                    console.warn(`Failed to make widget for id=${item.id}:`, error);
                }
            } else {
                console.warn(`Element with gs-id="${item.id}" not found`);
            }
        });
    }

    // End batch update
    grid.commit();
}

function enableGridLayout(edit) {
    grid.setStatic(!edit);
}

function saveGrid() {
    if (!grid) {
        gridLayout();
    }

    return grid.save();
}

function removeGridItem(gridItemID) {
    if (grid) {
        const node = grid.engine.nodes.find(n => n.id === gridItemID);
        if (node) {
            grid.removeWidget(node.el);
            return true;
        }
    }
    return false;
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
window.removeGridItem = removeGridItem;
window.reinitGridLayout = reinitGridLayout;
