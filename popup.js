const btn = document.getElementById("btn-remove-notion-baner");
btn.addEventListener("click",() => {
    // Получить активную вкладку браузера
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        // и если она есть, то выполнить на ней скрипт
        if (tab) {
            execScript(tab);
        } else {
            alert("There are no active tabs")
        }
    })
})

function execScript(tab) {
    // Выполнить функцию на странице указанной вкладки
    // и передать результат ее выполнения в функцию onResult
    chrome.scripting.executeScript(
        {
            target:{tabId: tab.id, allFrames: true},
            func:remove_baner
        }
    )
}

function remove_baner() {
    document.querySelector(
        "#notion-app > div > div:nth-child(1) > div > div:nth-child(2) > header > div:nth-child(2) > div"
        ).style.display = "none";
}
