(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react', 'react-dom', 'react', 'kotlin-react-dom', 'kotlin-csstype', 'kotlin-react-css', 'kotlin-react-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react'), require('react-dom'), require('react'), require('kotlin-react-dom'), require('kotlin-csstype'), require('kotlin-react-css'), require('kotlin-react-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'untitled'.");
    }
    if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'untitled'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-css'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-css' was not found. Please, check whether 'kotlin-react-css' is loaded prior to 'untitled'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'untitled'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'untitled'.");
    }
    root.untitled = factory(typeof untitled === 'undefined' ? {} : untitled, kotlin, this['kotlin-react'], this['react-dom'], react, this['kotlin-react-dom'], this['kotlin-csstype'], this['kotlin-react-css'], this['kotlin-react-core']);
  }
}(this, function (_, Kotlin, $module$kotlin_react, $module$react_dom, $module$react, $module$kotlin_react_dom, $module$kotlin_csstype, $module$kotlin_react_css, $module$kotlin_react_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var create = $module$kotlin_react.react.create_gax9jq$;
  var render = $module$react_dom.render;
  var useState = $module$react.useState;
  var html = $module$kotlin_react_dom.react.dom.html;
  var InputType$text = {button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}.text;
  var FC = $module$kotlin_react.react.FC_4y0n3r$;
  var css = $module$kotlin_react_css.$$importsForInline$$['@emotion/css'].css;
  function main$lambda($receiver) {
    $receiver.name = 'Kotlin/JS';
    return Unit;
  }
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    var welcome = create(Welcome, main$lambda);
    render(welcome, container);
  }
  function Welcome$lambda$lambda(closure$name) {
    return function ($receiver) {
      var $receiver_0 = {};
      $receiver_0.padding = (5).toString() + 'px';
      $receiver_0.backgroundColor = 'rgb(' + 8 + ',' + 97 + ',' + 22 + ')';
      $receiver_0.color = 'rgb(' + 56 + ',' + 246 + ',' + 137 + ')';
      $receiver.className = css($receiver_0);
      $receiver.unaryPlus_pdl1vz$('Hello, ' + closure$name[0]);
      return Unit;
    };
  }
  function Welcome$lambda$lambda$lambda(closure$name) {
    return function (event) {
      var $this = closure$name;
      var value = event.target.value;
      $this[1](value);
      return Unit;
    };
  }
  function Welcome$lambda$lambda_0(closure$name) {
    return function ($receiver) {
      var $receiver_0 = {};
      $receiver_0.marginTop = (5).toString() + 'px';
      $receiver_0.marginBottom = (5).toString() + 'px';
      $receiver_0.fontSize = (14).toString() + 'px';
      $receiver.className = css($receiver_0);
      $receiver.type = InputType$text;
      $receiver.value = closure$name[0];
      $receiver.onChange = Welcome$lambda$lambda$lambda(closure$name);
      return Unit;
    };
  }
  function Welcome$lambda($receiver, props) {
    var name = useState(props.name);
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Welcome$lambda$lambda(name));
    $receiver.invoke_gax9jq$(html.ReactHTML.input, Welcome$lambda$lambda_0(name));
    return Unit;
  }
  var Welcome;
  _.main = main;
  $$importsForInline$$['kotlin-react-css'] = $module$kotlin_react_css;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  Welcome = FC(Welcome$lambda);
  main();
  return _;
}));

//# sourceMappingURL=untitled.js.map
