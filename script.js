const display = document.getElementsByTagName("h1");
const showName = () => {
    try {
    display[0].innerHTML = "";
    display[0].innerHTML = `<h1>Hello, 
    <span>world</span> !
  </h1>
  <div>name : Phuong Tran</div>`;
    } catch (error) {
        console.log(error);
    }
}
showName();
