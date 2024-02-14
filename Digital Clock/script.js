const clock = document.querySelector('#clock');

setInterval(function(){
    const localtime = new Date();
    

    clock.innerHTML=`<span>${localtime.toLocaleTimeString()}</span>`
},1000)
