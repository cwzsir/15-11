const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const notification = document.querySelector('#notification');

const showNotification = (options) => {
    notification.classList.remove('d-none');
    notification.classList.add(options.className);
}

primary_btn.addEventListener('click', () => {
    showNotification({className:'notification-primary'});
})

secondary_btn.addEventListener('click', () => {
    showNotification({className:'notification-secondary'});
})

success_btn.addEventListener('click', () => {
    showNotification({className:'notification-success'});
})

/*const primary_btn = document.querySelector('#primary-btn');*/

primary_btn.style.width = '350px';
primary_btn.style.backgroundColor = 'red';
