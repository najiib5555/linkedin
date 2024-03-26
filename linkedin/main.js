let dropDown =document.querySelector('.profile-menu-wrap');
let pic =document.querySelector('.online');

let showMore =document.getElementById('show-more');
let sidebarActivity=document.querySelector('.sidebar-activity');


pic.addEventListener('click', ()=>{
    dropDown.classList.toggle('profile-menu-wrap-active')
});

showMore.addEventListener('click', ()=>{
    if(sidebarActivity.classList.contains('sidebar-activity-active')){
        sidebarActivity.classList.remove('sidebar-activity-active');
        showMore.textContent='show more <b>+</b>';

    }else{
        sidebarActivity.classList.toggle('sidebar-activity-active');
        showMore.textContent='show less';
    }
});

