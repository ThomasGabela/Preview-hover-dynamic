window.onload = () => 
{
    
    let atribute = {
        offsets : [20, -30],
        fadeSpeed : 1000,
        fadeIn : (target, time) => { //https://stackoverflow.com/questions/23244338/pure-javascript-fade-in-function
            target.style.opacity = 0;

            let last = +new Date();
            let tick = function () {
                target.style.opacity = +target.style.opacity + (new Date() - last) / time;
                last = +new Date();

                if (target.style.opacity < 1) {
                    setTimeout(tick, 40);
                }
                
            };
            // window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 400)
            tick();
        },
        coords : (event, stick) => { // https://www.w3schools.com/jsref/event_onmousemove.asp            
            let coordX = +event.x + atribute.offsets[0],
            coordY = +event.y + atribute.offsets[1];
            stick.style.left = coordX + "px";
            stick.style.top = coordY + "px";
        },
        init : (stick, element) => {
            element.onmouseover = (e) => {
                stick.style.display = "block";
                atribute.fadeIn(stick, atribute.fadeSpeed);
            }
            element.onmouseout = () => {stick.style.display = "none"}
            element.onmousemove = (e) => { atribute.coords(e, stick) }
        }
    }

    let elements = document.querySelectorAll(".hover")
    for (let element of elements){
        let target = "stick"+ element.getAttribute("idElement")
        let stick = document.getElementById(target);
        atribute.init(stick, element)
        //element.onmousemove = (e) => console.log(e)
    }
    //console.log(elements)

}



/*function myFunction(id) {
    
    document.getElementById(id).style.display = "block"
  }
  
function clearCoor(id) {
    document.getElementById(id).style.display = "none"
  }*/
