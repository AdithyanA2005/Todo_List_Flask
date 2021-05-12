function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


function clear_text() {
	const text = document.getElementById('search')
	text.value = ''
}


function show_new() {
	const form = document.getElementById('todo-new-form')
	const button = document.getElementById('todo-form-open-btn')
	const target_btn = document.getElementById("add-button")

	var icon = document.getElementById('todo-form-open-btn').innerText
	
	target_btn.classList.remove('pulse')

	if (icon == 'add') {
		form.classList.remove('hide')
		button.innerText = 'close'
	}
	else if (icon == 'close') {
		form.classList.add('hide')
		button.innerText = 'add'
	} 
	else {
		form.classList.remove('hide')
		button.classList.add('hide')
	}
}


function discard_todo() {
	const title = document.getElementById('todo-title')
	const description = document.getElementById('todo-description')

	title.value = ''
	description.value = ''
}


function search_table() {
  	const input = document.getElementById("search");
  	const filter = input.value.toUpperCase();
  	const table = document.getElementById("table");
	const tr = table.getElementsByTagName("tr");

	var td = ''
	var text = ''

  	for (i = 0; i < tr.length; i++) {
    	td = tr[i].getElementsByTagName("td")[0];
    	if (td) {
      		text = td.textContent || td.innerText;
      		if (text.toUpperCase().indexOf(filter) > -1) {
        		tr[i].style.display = "";
      		} else {
        		tr[i].style.display = "none";
      		}
    	}
  	}
}


function discover_add() {
	console.log("jao")
	const target = document.getElementById("add-button")

	target.classList.add('pulse')
	target.style.transform = "rotate(180deg)"
}

