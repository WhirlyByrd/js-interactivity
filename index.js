
const message = document.getElementById('message')

//grab html element
const inputField = document.querySelector('input')





//write function
const addMovie = (event) => {
    
    // stop refresh default
    event.preventDefault()
    
    // makes list item
    const movie = document.createElement('li')

    // gets the text
    const movieTitle = document.createElement('span')
    
    movieTitle.textContent = inputField.value
    
    movie.appendChild(movieTitle)
    
    document.querySelector('ul').appendChild(movie)
    
    movie.addEventListener('click', crossOffMovie)
   
    

    //make a delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


    
    inputField.value = ''

}


//add event listener to button
document.querySelector('form').addEventListener('submit', addMovie)




const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie add back!'
    }
}

const deleteMovie = (event) => {
    
    event.target.parentNode.remove()

    message.textContent = 'Movie Deleted!'
}
