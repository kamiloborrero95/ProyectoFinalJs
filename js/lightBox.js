(function () {
  // LIGHBOX CREAR UN POPUP QUE MUESTRE LA IMAGEN MAS GRANDE.
  //propiedades
  let propLightBox = {
    imgContainer: document.getElementsByClassName("imgLightBox"),
    imagen: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName("body")[0],
    modal: null,
    cerrarModal: null,
    animacion: "fade",
  };

  //metodos

  let metLightBox = {
    inicio: function () {
      for (let i = 0; i < propLightBox.imgContainer.length; i++) {
        propLightBox.imgContainer[i].addEventListener(
          "click",
          metLightBox.capturaImagen
        );
      }
    },

    capturaImagen: function () {
      propLightBox.imagen = this;
      metLightBox.lightBox(propLightBox.imagen);
    },

    lightBox: function (imagen) {
      propLightBox.imagenSrc = imagen.getAttribute("src");

      propLightBox.cuerpoDom
        .appendChild(document.createElement("div"))
        .setAttribute("id", "lightboxContainer");

      propLightBox.lightboxContainer =
        document.getElementById("lightboxContainer");

      propLightBox.lightboxContainer.style.width = "100%";
      propLightBox.lightboxContainer.style.height = "100%";
      propLightBox.lightboxContainer.style.position = "fixed";
      propLightBox.lightboxContainer.style.zindex = "1000";
      propLightBox.lightboxContainer.style.background = "rgba(0,0,0, 0.8)";
      propLightBox.lightboxContainer.style.top = "0";
      propLightBox.lightboxContainer.style.left = "0";

      propLightBox.lightboxContainer
        .appendChild(document.createElement("DIV"))
        .setAttribute("id", "modal");
      propLightBox.modal = document.getElementById("modal");
      propLightBox.modal.style.height = "100%";
      propLightBox.modal
        .appendChild(document.createElement("IMG"))
        .setAttribute("src", propLightBox.imagenSrc);

      propLightBox.modal
        .getElementsByTagName("img")[0]
        .setAttribute("class", "img-modal");

      if (propLightBox.animacion == "fade") {
        document.getElementsByClassName("img-modal")[0].style.opacity = 0;
        setTimeout(function () {
          document.getElementsByClassName("img-modal")[0].style.opacity = 1;
        }, 70);
      }

      propLightBox.modal.innerHTML += '<h1 id="cerrarModal">X</h1>';
      propLightBox.cerrarModal = document.getElementById("cerrarModal");
      propLightBox.cerrarModal.addEventListener(
        "click",
        metLightBox.cerrarModal
      );
    },

    cerrarModal: function () {
      propLightBox.cuerpoDom.removeChild(propLightBox.lightboxContainer);
    },
  };

  metLightBox.inicio();
})();
