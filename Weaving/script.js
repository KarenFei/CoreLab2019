var colors = ["pink","#6FBED7","#AE6FD7","#F2F795","#F7BD95"];
var i = 0;
var selectedColor;
    function button_click() {
        selectedColor = colors[i];
        document.getElementById("shape1").style.backgroundColor = selectedColor;
        document.getElementById("shape3").style.backgroundColor = selectedColor;
        i++;
        if(i > colors.length)
            i = 0;
    }


