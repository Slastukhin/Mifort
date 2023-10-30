const provudtab   = document.querySelectorAll(".provide-list");
const tabcontent = document.querySelectorAll(".provide__content");


provudtab.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            provudtab.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabcontent.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.provide-list').click();
