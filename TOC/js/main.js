window.onload = function () {
  document.getElementById("my_audio").play();
}
function myfunction1() {
    document.getElementById("message").style.background="red"
    }
function myfunction2(){
    document.getElementById("message").style.background="blue"
    }
function myfunction3(){
    document.getElementById("message").style.background="green"
}
let searchBox = document.querySelector('#search-box')
let images = document.querySelectorAll('.container-box .image-container .image')
searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;
    images.forEach(filter => {
        let title = filter.getAttribute('data-title');
        if (value == title.toLowerCase()) {
            filter.style.display = 'block';
        }
        if (searchBox.value == '') {
            filter.style.display = 'block';
        }
    });
};
function verifyPassword() {
        var pw = document.getElementById("pswd").value;
        if (pw == "") {
          document.getElementById("message").innerHTML = "Please Enter Your Password";
          document.getElementById("message").style.cssText = "color:red;"
          return false;
        }
        if (pw.length < 8) {
          document.getElementById("message").innerHTML = "Password length must be atleast 8 characters";
          document.getElementById("message").style.cssText = "color:red;"
          return false;
        } 
        if (pw.length > 15) {
          document.getElementById("message").innerHTML = "Password length must not exceed 15 characters";
          document.getElementById("message").style.cssText = "color:red;"
          return false;
        } else {
          alert("Password is correct");
          document.getElementById("message").style.cssText = "color:green;"
        }
      } 
let slideIndex = 1;
    showSlide(slideIndex);
    function openLightbox() {
      document.getElementById('Lightbox').style.display = 'block';
    };
    function closeLightbox() {
      document.getElementById('Lightbox').style.display = 'none';
    };
    function changeSlide(n) {
      showSlide(slideIndex += n);
    };
    function toSlide(n) {
      showSlide(slideIndex = n);
    };
    function showSlide(n) {
      const slides = document.getElementsByClassName('slide');
      let modalPreviews = document.getElementsByClassName('modal-preview');
      if (n > slides.length) {
        slideIndex = 1;	
      };
      if (n < 1) {
        slideIndex = slides.length;
      };
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      };
      for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
      };
      slides[slideIndex - 1].style.display = 'block';
      modalPreviews[slideIndex - 1].className += ' active';
    };