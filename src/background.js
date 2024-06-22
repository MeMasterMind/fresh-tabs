if (chrome) {
    chrome.browseraction.onClicked.addListener( ()=>{
        chrome.tabs.create({url:"chrome://newtab"})
        }
    )
}