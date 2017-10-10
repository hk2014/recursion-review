// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var targetClassName = className;
  var elementsWithTargetClassName = [];
  element = element || document.body;

  if (element.className.split(' ').indexOf(className) !== -1) {
    elementsWithTargetClassName.push(element);
  }

  if (element.children ) {
    for (var j = 0; j < element.children.length; j++) {
      elementsWithTargetClassName = elementsWithTargetClassName.concat(
        getElementsByClassName(className, element.children[j]) );
    }
  }
  return elementsWithTargetClassName;
};