(function () {
    document.dispatchEvent(new CustomEvent('connectExtension', {
        detail: window.ContextManager ? JSON.stringify(window.ContextManager) : '{}'
    }));
})();