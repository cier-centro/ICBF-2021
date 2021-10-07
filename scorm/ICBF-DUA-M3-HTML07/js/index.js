var slidesPaths = [],
    slideContents = [],
    generalPaths = [],
    startSlidesIndexes = [],
    finalSlidesIndexes = [];
var slideContentIndex = 0;
var previousSlideIndex;

function loadContent(){
  getSlidePath(slidesContentArray, "content");
  createSlidesContainers();
  loadScript(slidesPaths[slideIndex-1], recursiveCallback);
  getGeneralPaths();
  loadMainMenuLinks();
  //logSlidesPaths();
}

$(document).ready(function() {
  $.holdReady(true);
  loadContent();
  $.holdReady(false);  
});

function loadMainMenuLinks() {
  $("#controls .list-group").append(mainMenuContent);
}

function logSlidesPaths() {
  slidesPaths.forEach(function(value, index) {
    console.log("Slide_" + (index + 1) + ": " + value);
  });
}

function getGeneralPaths() {
  generalPaths = slidesPaths.filter(isTheFirstSlide);
  var pathLengths = [], firstPath = [], lastPath = [];
  generalPaths.forEach(function(value, index) {
    var path = generalPaths[index].replace("1.js","");
    firstPath.push(value);
    lastPath.push(path + getLengthByPath(path) + ".js");
  });
  startSlidesIndexes = getSlidesIndexes(slidesPaths, firstPath);
  finalSlidesIndexes = getSlidesIndexes(slidesPaths, lastPath);
}

function getSlidesIndexes(generalArray, compareArray) {
  var result = [];
  generalArray.forEach(function (generalElement, generalIndex) {
    compareArray.forEach(function(compareElement, compareIndex) {
      if (generalElement === compareElement) {
        result.push(generalIndex + 1);
      }
    });
  });
  return result;
}

function getLengthByPath(path) {
  return slidesPaths.filter(isInThisPath(path)).length;
}

function isInThisPath(path) {
    return function(element) {
        return isInString(element, path);
    }
}

function isTheFirstSlide(string) {
  return isInString(string, "s_1.js");
}

function getSlidePath(obj, path) {
  for (var key in obj) {
    if (typeof obj[key] == "string") {
      if(key!="NAME"){
        slidesPaths.push(path + "/" + obj[key]);
      }
    } else {
      //console.log(key + " recursive");
        var newPath = path + "/" + key;
        getSlidePath(obj[key], newPath);
    }
  }
}

function createSlidesContainers() {
  slidesPaths.forEach(function(value, index) {
    $(".slideshow-container").append("<div id='slide" + (index + 1) + "' class='main-slide'></div>");
  });
}

var activityRecursiveCallback = function() {  
  var slideId = "#slide" + slideIndex;
  loadActivityFunction(slideContents[(slideIndex-1)].activityContent, slideId);
};

var recursiveCallback = function() {
  removeJS(slidesPaths[previousSlideIndex - 1]);
  slideContents[slideIndex - 1] = {title: slideTitle, content: slideContent, activityContent: slideActivityContent};
  var slideId = "#slide" + (slideIndex);
  $("#slide" + previousSlideIndex).empty();
  $("#slide" + slideIndex).append(slideContents[slideIndex-1].content);
  showSlides(slideIndex);
};

function getBreadcrumbSlide() {
  var breadcrumbsLinks = [];
  breadcrumbsLinks.push(initialBreadcrumbLink);
  var currentUrlArray = slidesPaths[(slideIndex-1)].split("/");
  currentUrlArray.shift();
  currentUrlArray.pop();
  var currentUrl = "", breadcrumbAnchors="";
  if (currentUrlArray.length > 0) {
    currentUrlArray.forEach(function(value, index) {
      currentUrl = currentUrl + "/" + value;
      for (var i = 0; i < slidesPaths.length; i++) {
        if (isInString(slidesPaths[i], currentUrl)) {
          breadcrumbsLinks.push({title: value, link: i + 1});
          break;
        }
      }
    });
  }
  breadcrumbsLinks.forEach(function(value, index) {
    breadcrumbAnchors +=  "<a class='breadcrumb-item' href='#' onclick='currentSlide(" + value.link + ")' >" + getBreadcrumbTitle(slidesContentArray, breadcrumbsLinks, index) + "</a>";
  });
  if (slideContents[(slideIndex-1)].title !== "") {
    breadcrumbAnchors += "<span class='breadcrumb-item'>" + slideContents[(slideIndex-1)].title + "</span>";
  }
  return breadcrumbAnchors;
}

function getBreadcrumbTitle(obj, array, index) {
  var breadcrumbTitle = array[index].title;
  if (index > 0) {
    for (var i = 1; i <= index; i++) {
      obj = obj[array[i].title];
    }
    breadcrumbTitle = obj["NAME"];
  }
  return breadcrumbTitle;
}

function plusSlides(buttonControl) {
  var buttonId = $(buttonControl).attr("id");
  var numberToAdd = isInString(buttonId, "next") ? 1 : isInString(buttonId, "previous") ? -1 : "";
  previousSlideIndex = slideIndex;
  slideIndex += numberToAdd;
  if (previousSlideIndex != slideIndex)
    loadScript(slidesPaths[slideIndex-1], recursiveCallback);
}

function isInString(string, stringToSearch) {
  return string.indexOf(stringToSearch) !== -1;
}

function goToFirstSlideLink(linkArray) {
  var slideLink;
  var linkCodes = getLinkCodes(linkArray);
  var linkPath = linkCodes.join("/");
  for (var i = 0; i < slidesPaths.length; i++) {
    if (isInString(slidesPaths[i], linkPath)) {
      slideLink = i + 1;
      break;
    }
  }
  if (slideLink != undefined)
    currentSlide(slideLink);
  else
    console.log("No se encuentra carpeta: " + linkPath);
}

function getLinkCodes(linkArray) {
  var linkCodes = [];
  for (var i = 0; i < generalPaths.length; i++) {
    var currentUrlArray = generalPaths[i].split("/");
    currentUrlArray.shift();
    currentUrlArray.pop();
    for (var j = 0; j < linkArray.length; j++) {
      if (currentUrlArray[j] != undefined) {
        if ((isInString(currentUrlArray[j], linkArray[j])) && (linkCodes[j] == undefined))
          linkCodes[j] = currentUrlArray[j];
      }
    }
  }
  if (linkCodes.length > 0) {
    for (var i = 0; i < linkCodes.length; i++)
      linkCodes[i] = (linkCodes[i] == undefined) ? linkArray[i] : linkCodes[i];
  }
  else
    linkCodes = linkArray;
  return linkCodes;
}

function reloadSlide(n) {
  previousSlideIndex = slideIndex;
  slideIndex = n;  
  loadScript(slidesPaths[slideIndex-1], recursiveCallback);
  $("#mainMenu").modal("hide");
}

function currentSlide(n) {
  previousSlideIndex = slideIndex;
  slideIndex = n;
  if (previousSlideIndex != slideIndex)
    loadScript(slidesPaths[slideIndex-1], recursiveCallback);
  $("#mainMenu").modal("hide");
}

function showSlides(n) {
  var slides = document.getElementsByClassName("main-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "main-slide";
  }
  slides[slideIndex - 1].className = "main-slide current";
  setHiddenElement("#controls", hiddenControlsStates);
  setHiddenButton("previous", startSlidesIndexes);
  setHiddenButton("next", finalSlidesIndexes);
  //console.log("Slide_" + slideIndex + ": " + slidesPaths[slideIndex-1] + " - " + $('#previousControlButton').attr('class') + " - " + $('#nextControlButton').attr('class'));
  console.log("Slide_" + slideIndex + ": " + slidesPaths[slideIndex-1]);
  $("#controlBreadcrumb").html(getBreadcrumbSlide());
  loadActivity();
}

function loadActivity() {
  if (previousSlideIndex != undefined) {
    removeJS(slideContents[(previousSlideIndex-1)].activityContent.controller);
    $( slideContents[(previousSlideIndex-1)].activityContent.activityFrame ).empty();
  }
  if (!isEmpty(slideContents[(slideIndex-1)].activityContent)) {    
    var slideId = "#slide" + slideIndex;
    if ($( slideId ).hasClass( "current" )) {
      loadScript(slideContents[(slideIndex-1)].activityContent.controller, activityRecursiveCallback);
    }
    else {
      $( slideId + " " + slideContents[(slideIndex-1)].activityContent.activityFrame ).empty();
    }
  }
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function removeJS(filename){
   var tags = document.getElementsByTagName('script');
   for (var i = tags.length; i >= 0; i--){
    if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src').indexOf(filename) != -1)
     tags[i].parentNode.removeChild(tags[i]);
   }
}

function isInStateToHideControls(state) {
  return state === slideIndex;
}

function setHiddenButton(button, array) {
  var buttonId = "#" + button + "ControlButton";
  setHiddenElement(buttonId, array)
}

function setHiddenElement(element, array) {
  if (array.filter(isInStateToHideControls).length < 1)
    $(element).removeClass("hidden");
  else
    $(element).addClass("hidden");
}
