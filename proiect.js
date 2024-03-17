	var idx = 0;
    	show_me();

	function show_me() {
	var i;
	var x = document.getElementsByClassName("gallery");
	for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
           	   }
	idx++;
	if (idx > x.length) {idx = 1}
	x[idx-1].style.display = "block";
	setTimeout(show_me, 3000);}
	
	var dt = new Date();
        document.getElementById("datetime").innerHTML=dt.toLocaleString();

	var hobby = document.getElementById("hobbys");

                var img = document.getElementById("hobby1");
                var hobbyImg = document.getElementById("hobbyimg");
                img.onclick = function(){
                    hobby.style.display = "block";
                    hobbyImg.src = 'pool.jpg';
                }

                var aux = document.getElementsByClassName("close")[0];
                aux.onclick = function(){
                    hobby.style.display="none";
                }

	var hobby = document.getElementById("hobbys");

                var img = document.getElementById("hobby2");
                var hobbyImg = document.getElementById("hobbyimg");
                img.onclick = function(){
                    hobby.style.display = "block";
                    hobbyImg.src = "gaming.jpg";
                }

                var aux = document.getElementsByClassName("close")[0];
                aux.onclick = function(){
                    hobby.style.display = "none";
		}
	
	var hobby = document.getElementById("hobbys");

                var img = document.getElementById("hobby3");
                var hobbyImg = document.getElementById("hobbyimg");
                img.onclick = function(){
                    hobby.style.display = "block";
                    hobbyImg.src = "lifting.jpg";
                }

                var aux = document.getElementsByClassName("close")[0];
                aux.onclick = function(){
                    hobby.style.display = "none";
		}