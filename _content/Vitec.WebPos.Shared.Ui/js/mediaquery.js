window.mediaQueryHelper = {
    mediaQueries: new Map(),

    initialize: function (dotnetRef, query) {
        try {
            const mediaQuery = window.matchMedia(query);

            const handler = (e) => {
                dotnetRef.invokeMethodAsync('OnMediaQueryChanged', e.matches);
            };

            mediaQuery.addEventListener('change', handler);
            this.mediaQueries.set(dotnetRef, { mediaQuery, handler });

            // Explicitly return a boolean
            return !!mediaQuery.matches;
        } catch (error) {
            console.error('Media Query error:', error);
            return false;
        }
    },

    dispose: function (dotnetRef) {
        try {
            const entry = this.mediaQueries.get(dotnetRef);
            if (entry) {
                entry.mediaQuery.removeEventListener('change', entry.handler);
                this.mediaQueries.delete(dotnetRef);
            }
        } catch (error) {
            console.error('Media Query dispose error:', error);
        }
    }
};

// Simple test function to verify the JS is loaded
window.mediaQueryHelper.test = function () {
    return true;
}


window.addKeyListener = (dotnetHelper) => {
    window.keyHandler = (e) => {
        dotnetHelper.invokeMethodAsync('OnKeyPress', e.key);
    };
    document.addEventListener('keypress', window.keyHandler);
};

window.removeKeyListener = () => {
    if (window.keyHandler) {
        document.removeEventListener('keypress', window.keyHandler);
    }
};
