//data structure with literal object
export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"), // open x close modal
  message: document.querySelector(".modal .title span"), // message modal
  buttonClose: document.querySelector(".modal button.close"), // button close modal
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

//close modal
Modal.buttonClose.onclick = () => Modal.close();


//(Escape) = esc key functionality
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape')
    Modal.close()
}