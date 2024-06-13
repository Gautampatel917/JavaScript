const buttons= document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)
        switch(event.target.id){
            case 'gray':
                body.style.backgroundColor = 'gray'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            default:
                alert("sorry some issue occurred");
                break;
        }
    })
})