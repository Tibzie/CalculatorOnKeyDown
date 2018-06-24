
			function Characters() {
				// declare up variables
				var zero=0, one=1, two=2, three=3, four=4, five=5, six=6, seven=7, eight=8, nine=9;
				var plus='+', minus='-', multi='*', dot='.', divide='/';
				// character appears on textbox when a key is pressed on keyboard

				textboxarea = window.document.Form.textbox;

				
				btnSci = document.getElementById("buttonSci");
				btnSta = document.getElementById("buttonSta");
				btnSin = document.getElementById("buttonSin");
				btnCos = document.getElementById("buttonCos");
				btnTan = document.getElementById("buttonTan");
				btnDel = document.getElementById("buttonDel");
				btnC = document.getElementById("buttonC");
				btn0 = document.getElementById("button0");
				btn1 = document.getElementById("button1");
				btn2 = document.getElementById("button2");
				btn3 = document.getElementById("button3");
				btn4 = document.getElementById("button4");
				btn5 = document.getElementById("button5");
				btn6 = document.getElementById("button6");
				btn7 = document.getElementById("button7");
				btn8 = document.getElementById("button8");
				btn9 = document.getElementById("button9");
				btnPlus = document.getElementById("buttonPlus");
				btnMinus = document.getElementById("buttonMinus");
				btnDot = document.getElementById("buttonDot");
				btnDiv = document.getElementById("buttonDivision");
				btnMult = document.getElementById("buttonMultiplication");
				btnEqual = document.getElementById("buttonEqual");


				if (event.keyCode==83) {   // 83 = s (Scientific)
					var x = window.document.getElementById("sc");
					x.style.visibility = "visible";

					btnSci.style.transition = "all .2s";
					btnSci.style.borderBottom = "none";
					setTimeout(function(){
						btnSci.style.backgroundColor = "#313f4f";
						btnSci.style.borderBottom = "5px solid #333";
					}, 500);


				} else if (event.keyCode==65) {   // 65 = a (Standard)
					var y = window.document.getElementById("sc");
					y.style.visibility = "hidden";

					btnSta.style.transition = "all .2s";
					btnSta.style.borderBottom = "none";
					setTimeout(function(){
						btnSta.style.backgroundColor = "#313f4f";
						btnSta.style.borderBottom = "5px solid #333";
					}, 500);


				} else if (event.keyCode==86) {   // 86 = v (Sin)
					textboxarea.value= Math.sin(textboxarea.value).toFixed(2);

					btnSin.style.transition = "all .2s";
					btnSin.style.borderBottom = "none";
					setTimeout(function(){
						btnSin.style.backgroundColor = "#795d0e";
						btnSin.style.borderBottom = "5px solid #333";
					}, 500);


 				} else if (event.keyCode==66) {   // 66 = b (Cos)
					textboxarea.value= Math.cos(textboxarea.value).toFixed(2);

					btnCos.style.transition = "all .2s";
					btnCos.style.borderBottom = "none";
					setTimeout(function(){
						btnCos.style.backgroundColor = "#795d0e";
						btnCos.style.borderBottom = "5px solid #333";
					}, 500);


				} else if (event.keyCode==78) {   // 78 = n (Tan)
					textboxarea.value= Math.tan(textboxarea.value).toFixed(2);

					btnTan.style.transition = "all .2s";
					btnTan.style.borderBottom = "none";
					setTimeout(function(){
						btnTan.style.backgroundColor = "#795d0e";
						btnTan.style.borderBottom = "5px solid #333";
					}, 500);


				} else if(event.keyCode==8) {   // 8 = backspace
					var b = window.document.Form.textbox.value;
					window.document.Form.textbox.value = b.substring(0,b.length-1);

					btnDel.style.transition = "all .2s";
					btnDel.style.borderBottom = "none";
					setTimeout(function(){
						btnDel.style.backgroundColor = "#795d0e";
						btnDel.style.borderBottom = "5px solid #333";
					}, 500);


				} else if(event.keyCode==67) {  // 67 = c
					textboxarea.value = "";

					btnC.style.transition = "all .2s";
					btnC.style.borderBottom = "none";
					setTimeout(function(){
						btnC.style.backgroundColor = "#795d0e";
						btnC.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==96) || (event.keyCode== 48)){  // 96 = right(0), 48 = left(0)
					textboxarea.value=textboxarea.value+zero;

					btn0.style.transition = "all .2s";
					btn0.style.borderBottom = "none";
					setTimeout(function(){
						btn0.style.backgroundColor = "#d2941e";
						btn0.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==97) || (event.keyCode==49)){  // 97 = right(1), 49 = left(1)
					textboxarea.value=textboxarea.value+one;

					btn1.style.transition = "all .2s";
					btn1.style.borderBottom = "none";
					setTimeout(function(){
						btn1.style.backgroundColor = "#d2941e";
						btn1.style.borderBottom = "5px solid #333";
					}, 500);
					
				
				} else if((event.keyCode==98) || (event.keyCode==50)){  // 98 = right(2), 50 = left(2)
					textboxarea.value=textboxarea.value+two;

					btn2.style.transition = "all .2s";
					btn2.style.borderBottom = "none";
					setTimeout(function(){
						btn2.style.backgroundColor = "#d2941e";
						btn2.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==99) || (event.keyCode==51)){ // 99 = right(3), 51 = left(3)
					textboxarea.value=textboxarea.value+three;

					btn3.style.transition = "all .2s";
					btn3.style.borderBottom = "none";
					setTimeout(function(){
						btn3.style.backgroundColor = "#d2941e";
						btn3.style.borderBottom = "5px solid #333";
					}, 500);

				} else if((event.keyCode==100) || (event.keyCode==52)){ // 100 = right(4), 52 = left(4)
					textboxarea.value=textboxarea.value+four;

					btn4.style.transition = "all .2s";
					btn4.style.borderBottom = "none";
					setTimeout(function(){
						btn4.style.backgroundColor = "#d2941e";
						btn4.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==101) || (event.keyCode==53)){ // 101 = right(5), 53 = left(5)
					textboxarea.value=textboxarea.value+five;

					btn5.style.transition = "all .2s";
					btn5.style.borderBottom = "none";
					setTimeout(function(){
						btn5.style.backgroundColor = "#d2941e";
						btn5.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==102) || (event.keyCode==54)){ // 102 = right(6), 54 = left(6)
					textboxarea.value=textboxarea.value+six;

					btn6.style.transition = "all .2s";
					btn6.style.borderBottom = "none";
					setTimeout(function(){
						btn6.style.backgroundColor = "#d2941e";
						btn6.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==103) || (event.keyCode==55)){ // 103 = right(7), 55 = left(7)
					textboxarea.value=textboxarea.value+seven;

					btn7.style.transition = "all .2s";
					btn7.style.borderBottom = "none";
					setTimeout(function(){
						btn7.style.backgroundColor = "#d2941e";
						btn7.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==104) || (event.keyCode==56)){ // 104 = right(8), 56 = left(8)
					textboxarea.value=textboxarea.value+eight;

					btn8.style.transition = "all .2s";
					btn8.style.borderBottom = "none";
					setTimeout(function(){
						btn8.style.backgroundColor = "#d2941e";
						btn8.style.borderBottom = "5px solid #333";
					}, 500);


				} else if((event.keyCode==105) || (event.keyCode==57)){ // 105 = right(9), 57 = left(9)
					textboxarea.value=textboxarea.value+nine;

					btn9.style.transition = "all .2s";
					btn9.style.borderBottom = "none";
					setTimeout(function(){
						btn9.style.backgroundColor = "#d2941e";
						btn9.style.borderBottom = "5px solid #333";
					}, 500);


				} else if(event.keyCode==107) { // +
					textboxarea.value=textboxarea.value+plus;

					btnPlus.style.transition = "all .2s";
					btnPlus.style.borderBottom = "none";
					setTimeout(function(){
						btnPlus.style.backgroundColor = "#795d0e";
						btnPlus.style.borderBottom = "5px solid #333";
					}, 500);


				} else if(event.keyCode==109) { // -
					textboxarea.value=textboxarea.value+minus;

					btnMinus.style.transition = "all .2s";
					btnMinus.style.borderBottom = "none";
					setTimeout(function(){
						btnMinus.style.backgroundColor = "#795d0e";
						btnMinus.style.borderBottom = "5px solid #333";
					}, 500);


				} else if(event.keyCode==106) { // *
					textboxarea.value=textboxarea.value+multi;

					btnMult.style.transition = "all .2s";
					btnMult.style.borderBottom = "none";
					setTimeout(function(){
						btnMult.style.backgroundColor = "#795d0e";
						btnMult.style.borderBottom = "5px solid #333";
					}, 500);
					

				} else if((event.keyCode==110) || (event.keyCode==190)){ // 110 - right dot , 190 - left dot
					textboxarea.value=textboxarea.value+dot;

					btnDot.style.transition = "all .2s";
					btnDot.style.borderBottom = "none";
					setTimeout(function(){
						btnDot.style.backgroundColor = "#795d0e";
						btnDot.style.borderBottom = "5px solid #333";
					}, 500);


				} else if(event.keyCode==111) { // /
					textboxarea.value=textboxarea.value+divide;

					btnDiv.style.transition = "all .2s";
					btnDiv.style.borderBottom = "none";
					setTimeout(function(){
						btnDiv.style.backgroundColor = "#795d0e";
						btnDiv.style.borderBottom = "5px solid #333";
					}, 500);


				} else if (event.keyCode==13) { // enter
					textboxarea.value = eval(textboxarea.value).toFixed(2);

					btnEqual.style.transition = "all .2s";
					btnEqual.style.borderBottom = "none";
					setTimeout(function(){
						btnEqual.style.backgroundColor = "#424242";
						btnEqual.style.borderBottom = "5px solid #333";
					}, 500);					
				}
				
			}
