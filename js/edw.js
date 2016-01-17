window.onload = function () {
    var adver = document.getElementById('adver');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('img');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;


    var SDmodel = new scrollDoor();
	SDmodel.sd(["m01","m02","m03"],["c01","c02","c03"],"sro01","sro02");
    


    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }
    

    
    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        
        list.style.left = newLeft + 'px';
        
        if (newLeft > -750) {
            list.style.left = -6000 + 'px';
        }
        if (newLeft < -6000) {
            list.style.left = -750 + 'px';
        }
    }
    
    next.onclick = function () {
        if (index == 6) {
            index = 1;
        }
        else {
            index += 1;
        }
        
        showButton();
        animate(-752);
    }
    prev.onclick = function () {
        if (index == 1) {
            index = 6;
        }
        else {
            index -= 1;
        }
        
        showButton();
        animate(752);
    }
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -750 * (myIndex - index);
            
            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    
    
}





















function scrollDoor(){
}
scrollDoor.prototype = {
	sd : function(menu,divs,openClass,closeClass){
		var _this = this;
		if(menu.length != divs.length)
		{
			alert("菜单层数量和内容层数量不一样!");
			return false;
		}				
		for(var i = 0 ; i < menu.length ; i++)
		{	
			_this.$(menu[i]).value = i;				
			_this.$(menu[i]).onmouseover = function(){
					
				for(var j = 0 ; j < menu.length ; j++)
				{						
					_this.$(menu[j]).className = closeClass;
					_this.$(divs[j]).style.display = "none";
				}
				_this.$(menu[this.value]).className = openClass;	
				_this.$(divs[this.value]).style.display = "block";				
			}
		}
		},
	$ : function(oid){
		if(typeof(oid) == "string")
		return document.getElementById(oid);
		return oid;
	}
}

















