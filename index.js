//Add Item
function addItemHtml(str) {
  return `<li>
      <span class="shopping-item">${str}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

//Delete Item
const deleteItems = () => {
  $(".shopping-list").on("click", ".shopping-item-delete", e => {
    const removeElement = e.currentTarget.parentElement.parentElement;
    removeElement.remove();
  });
};
//Check Item
const checkItems = () => {
  $(".shopping-list").on("click", ".shopping-item-toggle", e => {
    const checkElement =
      e.currentTarget.parentElement.parentElement.children[0];
    checkElement.classList.toggle("shopping-item__checked");
  });
};

//Submit Listner
function SubmitListner() {
  $("#js-shopping-list-form").on("submit", e => {
    e.preventDefault();
    const text = $("#shopping-list-entry").val();
    $(".shopping-list").prepend(addItemHtml(text));
  });
}

function main() {
  SubmitListner();
  deleteItems();
  checkItems();
}

$(main);
