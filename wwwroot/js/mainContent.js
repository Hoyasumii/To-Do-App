let listOfCards = document.getElementsByClassName("card");

for (let index = 0; index < listOfCards.length; index++) {
    let selectedItem = listOfCards[index];

    let checkbox = selectedItem.getElementsByClassName("card-checkbox")[0];
    let content = selectedItem.getElementsByClassName("card-label")[0];

    if (checkbox.checked) {
        content.style.textDecoration = "line-through";
    }

}