function colorirdata(){
    let days  = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendor = document.getElementById('calendor');
    let td  = calendor.getElementsByTagName('td')[parseint(days)+5];
    td.style.backgroundcalor = color;
}