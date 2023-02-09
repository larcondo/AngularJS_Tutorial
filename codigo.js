const paginas = [
  {href: "home.html", texto: "Home"},
  {href: "angular_expressions.html", texto: "AngularJS Expressions"},
  {href: "angular_modules.html", texto: "AngularJS Modules"},
  {href: "angular_directives.html", texto: "AngularJS Directives"},
  {href: "angular_model.html", texto: "AngularJS Model"},
  {href: "angular_databinding.html", texto: "AngularJS Data Binding"},
  {href: "angular_controllers.html", texto: "AngularJS Controllers"},
  {href: "angular_scopes.html", texto: "AngularJS Scope"},
  {href: "angular_filters.html", texto: "AngularJS Filters"},
  {href: "angular_services.html", texto: "AngularJS Services"},
  {href: "angular_http.html", texto: "AngularJS Http"},
  {href: "angular_tables.html", texto: "AngularJS Tables"},
  {href: "angular_select.html", texto: "AngularJS Select"},
  {href: "angular_sql.html", texto: "AngularJS SQL"},
  {href: "angular_htmldom.html", texto: "AngularJS DOM"},
  {href: "angular_events.html", texto: "AngularJS Events"},
  {href: "angular_forms.html", texto: "AngularJS Forms"},
  {href: "angular_validation.html", texto: "AngularJS Validation"},
  {href: "angular_api.html", texto: "AngularJS API"},
  {href: "angular_w3css.html", texto: "AngularJS W3.CSS"},
  {href: "angular_includes.html", texto: "AngularJS Includes"},
  {href: "angular_animations.html", texto: "AngularJS Animations"},
  {href: "angular_routing.html", texto: "AngularJS Routing"},
  {href: "angular_application.html", texto: "AngularJS Application"}
];

const menuList = document.getElementById("menu");

console.log(menuList);

paginas.forEach(element => {
  const node = document.createElement("a");
  node.href = "./" + element.href;
  const textnode = document.createTextNode(element.texto);
  node.appendChild(textnode);
  menuList.appendChild(node);
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


var button = document.getElementsByClassName("button-menu");

for(let j = 0; j < button.length; j++) {
  button[j].addEventListener("click", function() {
    var menu = this.nextElementSibling;
    if (menu.classList.value === "menu") {
      menu.classList.toggle("show");
      console.log('Mostrar');      
    } else {
      menu.classList.value = "menu";
      console.log('Ocultar');
    }
  });
}


window.onclick = function(e) {
  if (!e.target.matches('.button-menu')){
    // console.log('Se hizo click afuera');
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  } else {
    // console.log('Se cliqueo el boton');
  };
}