// Create variables that hold references to the list (<ul>), <input>, and <button> elements.
const list = document.getElementById('shopping-list');
const input = document.getElementById('item');
const button = document.getElementById('add-item');

// Create a function that will run in response to the button being clicked.
button.addEventListener('click', function() {
    // Store the current value of the input element in a variable.
    const itemText = input.value;

    // Empty the input element by setting its value to an empty string.
    input.value = '';

    // Create three new elements — a list item (<li>), <span>, and <button>.
    const listItem = document.createElement('li');
    const itemSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    // Append the span and the button as children of the list item.
    listItem.appendChild(itemSpan);
    listItem.appendChild(deleteButton);

    // Set the text content of the span to the input element value you saved earlier,
    // and the text content of the button to 'Delete'.
    itemSpan.textContent = itemText;
    deleteButton.textContent = 'Delete';

    // Append the list item as a child of the list.
    list.appendChild(listItem);

    // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item.
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    // Use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();
});
