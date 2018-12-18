const bodyWrap = document.getElementById('appMountPoint');

const observerConfig = {
    attributes: false,
    childList: true,
    subtree: true,
};

const callback = function(mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type == 'childList') {
            const nodeToLookAt = mutation.addedNodes[0];
            if (nodeToLookAt && nodeToLookAt.className && nodeToLookAt.className == 'skip-credits') {
                if (nodeToLookAt.children.length > 0) {
                    nodeToLookAt.children[0].click();
                }
            }
        }
    }
}

const observer = new MutationObserver(callback);
observer.observe(bodyWrap, observerConfig); 
