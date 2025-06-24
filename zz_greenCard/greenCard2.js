let contTopMenuLi = document.querySelectorAll('.contTopMenu li');
let contents = [document.querySelector('.custContent_1'), document.querySelector('.custContent_2')];

// 메뉴 클릭 이벤트 추가
contTopMenuLi.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        // 모든 메뉴와 콘텐츠 초기화
        contTopMenuLi.forEach(item => item.classList.remove('on'));
        contents.forEach(content => content.classList.remove('on'));

        // 클릭된 메뉴와 대응하는 콘텐츠 활성화
        menuItem.classList.add('on');
        contents[index].classList.add('on');
    });
});


let custCon_2_Li = document.querySelectorAll('.custContent_2_mainUL li');
let detailss = document.querySelectorAll('.custContent_2 details');

custCon_2_Li.forEach((e, i) => {
    e.addEventListener('click',() => {
        custCon_2_Li.forEach(i => i.classList.remove('on'));
        document.querySelectorAll('details').forEach(i => i.classList.remove('on'));
        e.classList.add('on')
        if(i===0) {
            document.querySelectorAll('details').forEach(i => i.classList.add('on'));
        }
        if (i === 1) {
            document.querySelectorAll('details:has(.type1)').forEach(i => i.classList.add('on'));
        }
        if (i === 2) {
            document.querySelectorAll('details:has(.type2)').forEach(i => i.classList.add('on'));
        }
        if (i === 3) {
            document.querySelectorAll('details:has(.type3)').forEach(i => i.classList.add('on'));
        }
    })
});