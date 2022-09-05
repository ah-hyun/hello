// mysource.js

      
// 서버 요청
    		let xhtp = new XMLHttpRequest();
    		xhtp.open('get', './board');
    		xhtp.send();

    		xhtp.onload = function () {
    			let data = JSON.parse(xhtp.response);
    			console.log(data);

    			let list = document.getElementById('list');
    			
    			data.forEach(data => {
    				let tr = makeTr(data);
    				list.append(tr);
    			})
    		}
    		
function makeTr(data) {
			// tr 생성하는 부분.
			let tr = document.createElement('tr');

			let td = document.createElement('td');
			let txt = document.createTextNode(data.bNumber);
			td.appendChild(txt); // bno

			let td2 = document.createElement('td');
			let txt2 = document.createTextNode(data.title);
			td2.appendChild(txt2); // title

			let td3 = document.createElement('td');
			let txt3 = document.createTextNode(data.content);
			td3.appendChild(txt3); // content
			
			let td4 = document.createElement('td');
			let txt4 = document.createTextNode(data.writer);
			td4.appendChild(txt4); // writer
			
			let td5 = document.createElement('td');
			let txt5 = document.createTextNode(data.creation_date);
			td5.appendChild(txt5); // creation_date

			let td6 = document.createElement('td');
			let btn = document.createElement('button');
			 tr.append(td, td2, td3, td4, td5,td6);
			return tr;
		}
		
			
		
    	