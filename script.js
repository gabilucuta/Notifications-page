const markAll = document.querySelector('[data-mark]');
const newNotifications = document.querySelectorAll('[data-new]');
const numberOfnewNotification = document.querySelector('[data-number]');
const newNot = document.querySelectorAll('[data-not]');
let inte = 0;


markAll.addEventListener('click' ,() =>{
    newNot.forEach(element => {
        element.style.opacity = '0';

        
    });

    newNotifications.forEach(element => {
        element.style.backgroundColor = 'white';
    });

    numberOfnewNotification.style.opacity = '0';

})

newNot.forEach(element => {
    element.addEventListener('click', () =>{
        element.parentElement.parentElement.parentElement.style.backgroundColor = 'white';
        element.style.opacity = '0';
        numberOfnewNotification.innerText -= 1;
        if(numberOfnewNotification.innerText == '0')
        {
            numberOfnewNotification.style.opacity = '0';
        }
    })
    
});
