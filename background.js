function processPage(baseUrl) {
    const el = document.querySelector("h1");
    const algo = el.attributes['data-price'].value * el.attributes['data-total'].value;
    const rounded = Math.round(algo * 100) / 100;

    document.title = `${new Intl.NumberFormat().format(rounded)} ALGO`;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: processPage,
            args: []
        });
    }
});
