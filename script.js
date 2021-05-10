function getbooks(){
    document.getElementById('output').innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById("input").value)
    .then(a => a.json())
    .then(response =>{
        console.log(response);
    for(var i=0; i<10; i++){
        var bookOutput = document.getElementById("output");
        var saveButton = document.createElement("button");
        bookOutput.innerHTML+="<br>TITLE:"+`<h2 class='titleBook'>`+response.docs[i].title+"</h2>"+"<br>AUTHOR:<br>"+response.docs[i].author_name[0]+"<br><img src='https://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br>"+"<br>ISBN:<br>"+response.docs[i].isbn[0]+"<br>";
        saveButton.innerHTML = "save book";
        saveButton.className = "save-button"
        saveButton.id = `bookTitle-${response.docs[i].title}`
        bookOutput.appendChild(saveButton);
    }
    console.log('does this hit?')
    $(".save-button").each(function(){
        console.log(this.id);
        var testing = this.id.split('-');
        var bookTitle = testing[1];
        
        this.addEventListener('click', function(){
            var existingSavedBooks = localStorage.getItem('bookTitles');
            if(existingSavedBooks){
                var parsedSavedBooks = JSON.parse(existingSavedBooks);
                parsedSavedBooks.push(bookTitle);
                localStorage.setItem('bookTitles', JSON.stringify(parsedSavedBooks))
            } else {
                localStorage.setItem('bookTitles', JSON.stringify([bookTitle]))
            }
            
        })
    
    
    })
    });

};
