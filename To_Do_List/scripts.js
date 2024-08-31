//move right function
function moveRight(fromListId, toListId) {
    const fromList = document.getElementById(fromListId);
    const toList = document.getElementById(toListId);

    if (fromList.children.length > 0) {
        const todo = fromList.children[0];
        toList.appendChild(todo);
    }
}
//move left function 
function moveLeft(fromListId, toListId) {
    const fromList = document.getElementById(fromListId);
    const toList = document.getElementById(toListId);

    if (fromList.children.length > 0) {
        const todo = fromList.children[0];
        toList.appendChild(todo);
    }
}
