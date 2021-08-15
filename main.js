let ourForm = document.querySelector(".ourForm")
let ourField = document.querySelector(".ourField")
let ourList = document.querySelector(".ourList")


ourField.focus()
ourForm.addEventListener("submit", addItem)

function addItem(e){
  e.preventDefault()
  task=ourField.value
  showItem()
  ourField.value=""
  ourField.focus()
}

function showItem(){
  let item = `<li>${task} <button onClick="deleteItem(this)">delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", item)
}

function deleteItem(elementToDelete){
  elementToDelete.parentElement.remove()
}
