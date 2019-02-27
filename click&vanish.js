                var start = new Date().getTime();

        	function getRandomColor() {
				  var letters = '0123456789ABCDEF';
				  var color = '#';
				  for (var i = 0; i < 6; i++) {
				    color += letters[Math.floor(Math.random() * 16)];
				  }
				  return color;
			}

        	function appearAgain(){
        		var upDown = Math.random()*400;
        		var leftRight = Math.random()*1000;
        		var smallLarge =(Math.random()*200)+100;
        		if(Math.random()>.5){
        			document.getElementById("shape").style.borderRadius ="50%";
        		}
        		else{
        			document.getElementById("shape").style.borderRadius="0";
        		}
        		document.getElementById("shape").style.backgroundColor=getRandomColor();
        		document.getElementById("shape").style.top= upDown+"px"
        		document.getElementById("shape").style.left= leftRight+"px"
        		document.getElementById("shape").style.width=smallLarge+"px"
        		document.getElementById("shape").style.height=smallLarge+"px"
        		document.getElementById("shape").style.display ="block";
        		start = new Date().getTime();
        		
        	}
        	function appearDelay(){	
        		setTimeout(appearAgain, Math.random()*2000);
        	}
        	
        	appearDelay();
        	
        	document.getElementById("shape").onclick = function(){
        		
        	document.getElementById("shape").style.display = "none";
        	var end = new Date().getTime();
			var timeTaken = (end - start)/1000;
			document.getElementById("time").innerHTML=timeTaken;
			appearDelay();

			
        	}