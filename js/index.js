"use strict";

var RecipeBox = React.createClass({
  displayName: "RecipeBox",

  getInitialState: function getInitialState() {
    return { recipes: [] };
  },
  render: function render() {
    return React.createElement(
      "section",
      { className: "container-fluid" },
      React.createElement(Header, null),
      React.createElement(
        "main",
        { className: "page-content" },
        React.createElement(RecipeList, { recipes: this.state.recipes }),
        React.createElement(RecipeForm, null)
      ),
      React.createElement(Footer, null)
    );
  }
});

var RecipeList = React.createClass({
  displayName: "RecipeList",

  render: function render() {
    return React.createElement(
      "aside",
      { className: "recipleList" },
      React.createElement(
        "h1",
        { className: "center" },
        "List"
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: " col s12 m4 l4" },
          React.createElement(Recipe, null)
        )
      )
    );
  }
});

var RecipeForm = React.createClass({
  displayName: "RecipeForm",

  getInitialState: function getInitialState() {
    return { title: '', img: 'http://www.gaspars.com/assets/gaspar-recipe-box3.jpg?w=297', content: '' };
  },
  onChange: function onChange(key, e) {
    console.log(key);
    this.setState({ key: e.target.value });
  },
  render: function render() {
    return React.createElement(
      "aside",
      null,
      React.createElement(
        "a",
        { className: "modal-trigger waves-effect waves-light btn", href: "#modal1" },
        "Add Recipe"
      ),
      React.createElement(
        "div",
        { id: "modal1", className: "modal modal-fixed-footer" },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement(
            "h4",
            null,
            "Add Recipe"
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "form",
              { className: "col s12", onSubmit: this.handleSubmit },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "input-field col s6" },
                  React.createElement(
                    "i",
                    { className: "material-icons prefix" },
                    "label_outline"
                  ),
                  React.createElement("input", { id: "icon_prefix", type: "text", className: "validate", onChange: ('title', this.onChange), value: this.state.title }),
                  React.createElement(
                    "label",
                    { htmlFor: "icon_prefix" },
                    "Recipe Title"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "input-field col s6" },
                  React.createElement(
                    "i",
                    { className: "material-icons prefix" },
                    "perm_media"
                  ),
                  React.createElement("input", { id: "icon_telephone", type: "tel", className: "validate", onChange: ('img', this.onChange), value: this.state.url }),
                  React.createElement(
                    "label",
                    { htmlFor: "icon_telephone" },
                    "Recipe Image"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "input-field col s12" },
                  React.createElement(
                    "i",
                    { className: "material-icons prefix" },
                    "mode_edit"
                  ),
                  React.createElement("textarea", { id: "icon_prefix2", className: "materialize-textarea", onChange: ('content', this.onChange), value: this.state.content }),
                  React.createElement(
                    "label",
                    { htmlFor: "icon_prefix2" },
                    "Recipe"
                  )
                )
              ),
              React.createElement(
                "button",
                { className: "btn" },
                "Create"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "modal-footer" },
          React.createElement(
            "a",
            { className: "modal-action modal-close waves-effect waves-green btn btn-flat " },
            "Close"
          )
        )
      )
    );
  }
});

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "header",
      { className: "page-header center-align" },
      React.createElement(
        "nav",
        null,
        React.createElement(
          "div",
          { className: "nav-wrapper" },
          React.createElement(
            "a",
            { href: "#", className: "brand-logo center" },
            "Recipe Box"
          )
        )
      )
    );
  }
});

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "footer",
      { className: "page-footer center-align" },
      React.createElement(
        "div",
        { className: "footer-copyright" },
        React.createElement(
          "div",
          { className: "container" },
          "Copyright © Rafael J. Rodriguez 2016. All Rights Reserved",
          React.createElement(
            "a",
            { className: "grey-text text-lighten-4 right", href: "http://rafase282.github.io/" },
            "Portfolio"
          )
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: "mailto:rafase282@gmail.com" },
          React.createElement("i", { className: "fa fa-envelope fa-fw" })
        ),
        React.createElement(
          "a",
          { href: "https://github.com/Rafase282", target: "_blank" },
          React.createElement("i", { className: "fa fa-github fa-fw" })
        ),
        React.createElement(
          "a",
          { href: "https://www.linkedin.com/in/rafase282", target: "_blank" },
          React.createElement("i", { className: "fa fa-linkedin" }),
          " "
        ),
        React.createElement(
          "a",
          { href: "http://codepen.io/Rafase282", target: "_blank" },
          React.createElement("i", { className: "fa fa-codepen" }),
          " "
        ),
        React.createElement(
          "a",
          { href: "https://rafase282.wordpress.com/", target: "_blank" },
          React.createElement("i", { className: "fa fa-wordpress" }),
          " "
        ),
        React.createElement(
          "a",
          { href: "http://www.freecodecamp.com/rafase282", target: "_blank" },
          "(",
          React.createElement("i", { className: "fa fa-fire fa-fw" }),
          ")"
        )
      ),
      React.createElement("br", null)
    );
  }
});

var Recipe = React.createClass({
  displayName: "Recipe",

  render: function render() {
    return React.createElement(
      "div",
      { className: "card small" },
      React.createElement(
        "div",
        { className: "card-image waves-effect waves-block waves-light" },
        React.createElement("img", { className: "activator", src: "http://materializecss.com/images/office.jpg" })
      ),
      React.createElement(
        "div",
        { className: "card-content" },
        React.createElement(
          "span",
          { className: "card-title activator grey-text text-darken-4" },
          "Card Title",
          React.createElement(
            "i",
            { className: "material-icons right" },
            "more_vert"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "This is a link"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "card-reveal" },
        React.createElement(
          "span",
          { className: "card-title grey-text text-darken-4" },
          "Card Title",
          React.createElement(
            "i",
            { className: "material-icons right" },
            "close"
          )
        ),
        React.createElement(
          "p",
          null,
          "Here is some more information about this product that is only revealed once clicked on."
        )
      )
    );
  }
});
ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById('content'));

$(document).ready(function () {

  $('.modal-trigger').leanModal();
});