
//This line selects the first HTML element with the class btn and assigns it to the btn variable.
const btn = document.querySelector('.btn');
 
//The event listener listens for a click event, executes the code when condition is true
btn.addEventListener('click', () => {   
    btn.style.backgroundColor = '#DC143C';
    btn.style.boxShadow = '0 0 40px #DC143C';
    btn.style.transition = '.5s ease';
});