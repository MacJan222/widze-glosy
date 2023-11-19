import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Header from './components/Header';
import StudentsIntro from './components/StudentsIntro';
import ColorButton from './components/ColorButton';
import ColorPicker from './components/ColorPicker';
import AudioSection from './components/SpeechSection';
import reportWebVitals from './reportWebVitals';
import backImage from './images/0_connection_between_emotions_and_colors.png';
import $ from 'jquery';
import txtPeopleCounter from './txtPeopleCounter.json';

const root = ReactDOM.createRoot(document.getElementById('root'));


let peopleCounter = 1;
let peopleCountersss = fetch(txtPeopleCounter).then(r => r.text());




//TA FUNKCJA JEST OD WSZYSTKIEGO (TAK JAKBY OD STRONY I OD BUTTONÓW)
$( document ).ready(function() {
  var base_color = "rgb(230,230,230)"; // KOLOR NIEWYPEŁNIONYCH KÓŁECZEK NA GÓRZE
  var active_color = "rgb(237, 40, 70)"; // zielony od buttonów: 0, 170, 105     KOLOR WYPEŁNIONYCH NA CZERWONO KÓŁECZEK NA GÓRZE
  var submitted_color = "#6bb834";
  
  var isSurveyFinished = false;
  var isColorSelected = true;
  var isEmotionSelected = true;
  var counter = 0;
  var rows = 0;
  var questionsAmount = 16; // 10 pytań o audio + 6 o emocje
  var outputVector = [];
  var selectedSex = [];
  var selectedAge = [];
  var selectedDisease = [];
  var emotionsMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  $('.colors_appears').hide();
  $('.color-picker-container').show();
  $('.warning_info').hide();
  $('.reset_color').show();
  $('.header-name').css({
    color: "black"
  });
  $('#poland').css('box-shadow', '0 5px 6px rgba(0, 0, 0, 0.1)');
  $('#united-kingdom').css('box-shadow', '0 5px 6px rgba(0, 0, 0, 0.1)');

$('.rad-input[name="sex"]').on('change', function() {
  selectedSex = $('input[name="sex"]:checked').val();
  outputVector[0] = selectedSex;
  //console.log('outputVector: ' + selectedSex);
});
$('.rad-input[name="age"]').on('change', function() {
  selectedAge = $('input[name="age"]:checked').val();
  outputVector[1] = selectedAge;
  //console.log('outputVector: ' + selectedAge);
});
$('.rad-input[name="disease"]').on('change', function() {
  selectedDisease = $('input[name="disease"]:checked').val();
  outputVector[2] = selectedDisease;
  //console.log('outputVector: ' + selectedAge);
});


var colorsMatrix = [
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"],
  ["rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)", "rgba(241, 241, 241, 0.493)"]
];


  //TA FUNKCJA JEST OD KOLORKÓW    
  $('li[class^="subswatch-"],li[class*=" subswatch-"]').click(function() {
    
    var selectedSwatch = $(this);
    var selectedSwatchName = selectedSwatch.data('tooltip');
    var selectedSwatchNumber = selectedSwatch.attr('class').match(/\d+/)[0];
    var selectedSwatchParent = selectedSwatch.closest('ul');
    var selectedSwatchParentOffset = selectedSwatchParent.css('top');
    var selectedColor = selectedSwatch.css('background-color');
    var selectedOffset = selectedSwatch.offset();
    var cardOffset = $('.card').offset();
    var rippleOriginTop = selectedOffset.top - cardOffset.top + (selectedSwatch.outerHeight() / 2);
    var rippleOriginLeft = selectedOffset.left - cardOffset.left + (selectedSwatch.outerWidth() / 2);
    var newParentOffset = -(((selectedSwatchNumber - 1) * 54) + 4);
  
    //console.log(counter);
    //console.log(newParentOffset);
  
    $('.color-picker .active').removeClass('active');

    //BOX NA KOLORKI
    //document.getElementById("colored_box").style.backgroundColor = selectedColor;
    selectedSwatchParent.css("top", newParentOffset);
    selectedSwatchParent.find('.centered').removeClass('centered');
    selectedSwatch.addClass('active centered');
    $('.ripple').css({
      left: rippleOriginLeft,
      top: rippleOriginTop,
      backgroundColor: selectedColor
    }).addClass('scaling');
  
    setTimeout(function() {
      /*$('.color-picker').css({
        backgroundColor: selectedColor
      });*/
      if (counter >= 1 && counter < 4){
        $('body').css({
          backgroundColor: selectedColor
        });
      }
      if(counter === 1){
        counter = 1;  
        isColorSelected = true;
        colorsMatrix[rows][0] = selectedColor;
        $('.choose_color_button1').css({
          backgroundColor: colorsMatrix[rows][0]
        });              
      }
      else if (counter === 2){
        counter = 2;
        isColorSelected = true;
        colorsMatrix[rows][1] = selectedColor;
        $('.choose_color_button2').css({
          backgroundColor: colorsMatrix[rows][1]
        });
      }
      else if(counter === 3){
        counter = 3;
        isColorSelected = true;
        colorsMatrix[rows][2] = selectedColor;
        $('.choose_color_button3').css({
          backgroundColor: colorsMatrix[rows][2]
        });
      }
      $('.color-name').empty().append(selectedSwatchName);
      $('.colors_appears').hide();
      $('.color-picker-container').show();
      $('.reset_color').show();

      if (selectedColor === "rgb(238, 0, 18)"){
        $('#poland').css('box-shadow', '0 5px 6px rgba(251, 251, 251, 0.534');
        $('#united-kingdom').css('box-shadow', '0 5px 6px rgba(251, 251, 251, 0.534');
      }  
      else{
        $('#poland').css('box-shadow', '0 5px 6px rgba(0, 0, 0, 0.1)');
        $('#united-kingdom').css('box-shadow', '0 5px 6px rgba(0, 0, 0, 0.1)');
      }

      if((selectedColor === "rgb(82, 26, 99)") || 
      (selectedColor === "rgb(28, 55, 126)") || 
      (selectedColor === "rgb(61, 105, 30)") ||
      (selectedColor === "rgb(151, 127, 1)") ||
      (selectedColor === "rgb(150, 81, 1)") ||
      (selectedColor === "rgb(136, 0, 10)") ||
      (selectedColor === "rgb(0, 0, 0)") ||
      (selectedColor === "rgb(28, 111, 126)")){
        $('.header-name').css({
          color: "white"
        });
      }
      else{
        $('.header-name').css({
          color: "black"
        });
      }
    }, 500);
    setTimeout(function() {
      $('.ripple').removeClass('scaling');
    }, 900);
    $('.warning_info').hide();
    window.stop();
  });

  
  $('.choose_emotion').on('change', function() {
    const selectedEmotion = $(this).val(); // Get the selected option value
    emotionsMatrix[rows] = selectedEmotion;
    isEmotionSelected = true;
    //console.log('emotionsMatrix: ' + emotionsMatrix);
  });


  var child = 1;
  var length = $("section").length - 1;
  $("#prev").addClass("disabled");
  $("#submit").addClass("disabled");
  $('#again').addClass("disabled");
  
  $("section").not("section:nth-of-type(1)").hide();
  $("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');
  
  // SVG to te kółeczka na górze, które się zaznaczają w zależności od tego, na ile pytań odpowiedziano
  var svgWidth = length * 200 + 24;
  $("#svg_wrap").html(
    '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
      svgWidth +
      ' 24" xml:space="preserve"></svg>'
  );
  
  function makeSVG(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }
  /* GDYBYM CHCIAŁA USUNĄĆ JEDNO KÓŁECZKO NA GÓRZE TO length-1 */
  for (var i = 0; i < length; i++) {
    var positionX = 12 + i * 200;
    var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
    document.getElementById("svg_form_time").appendChild(rect);
     <g><rect x="12" y="9" width="200" height="6"></rect></g>//CO TO?
    var circle = makeSVG("circle", {
      cx: positionX,
      cy: 12,
      r: 30,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);
  }
  
  var circle = makeSVG("circle", {
    cx: positionX + 200,
    cy: 12,
    r: 30,
    width: positionX,
    height: 6
  });
  document.getElementById("svg_form_time").appendChild(circle);
  $('#svg_form_time rect').css('fill',base_color);
  $('#svg_form_time circle').css('fill',base_color);
  $("circle:nth-of-type(1)").css("fill", active_color);
  

  //RESETUJEMY KOLORKI na jednej stronie
  $(".reset_color").click(function () {
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
    counter = 0;
    colorsMatrix[rows][0] = "rgba(241, 241, 241, 0.493)";
    colorsMatrix[rows][1] = "rgba(241, 241, 241, 0.493)";
    colorsMatrix[rows][2] = "rgba(241, 241, 241, 0.493)";
    document.body.style.backgroundColor = "white";
    $('.colors_appears').hide();
    $('.warning_info').hide();
    $('.color-picker-container').show();
    $('.reset_color').show();
    $('.choose_color_button1').css({
      backgroundColor: colorsMatrix[rows][0],
      border: "0 4px 10px rgba(0, 0, 0, 0.35"
    });
    $('.choose_color_button2').css({
      backgroundColor: colorsMatrix[rows][1],
      border: "0 4px 10px rgba(0, 0, 0, 0.35"
    });
    $('.choose_color_button3').css({
      backgroundColor: colorsMatrix[rows][2],
      border: "0 4px 10px rgba(0, 0, 0, 0.35"
    });
    $('.choose_emotion').val('');
    $('.header-name').css({
      color: "black"
    });
    $('#poland').css('box-shadow', '0 5px 6px rgba(0, 0, 0, 0.1)');
    $('#united-kingdom').css('box-shadow', '0 5px 6px rgba(0, 0, 0, 0.1)');
  });


  $(".choose_color_button1").click(function () {
    counter = 1;
    /*$(this).css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.75');
    $('.choose_color_button2').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.choose_color_button3').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');*/
    $('.colors_appears').show();
    $('.color-picker-container').hide();
    $('.reset_color').hide();
  });
  $(".choose_color_button2").click(function () {
    counter = 2;
    /*$(this).css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.75');
    $('.choose_color_button1').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.choose_color_button3').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');*/
    $('.colors_appears').show();
    $('.color-picker-container').hide();
    $('.reset_color').hide();
  });
  $(".choose_color_button3").click(function () {
    counter = 3;
    /*$(this).css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.75');
    $('.choose_color_button1').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.choose_color_button2').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');*/
    $('.colors_appears').show();
    $('.color-picker-container').hide();
    $('.reset_color').hide();
  });




  //TUTAJ JEST LOGIKA BUTTONÓW
  $(".button").click(function () {
    $("#svg_form_time rect").css("fill", active_color);
    $("#svg_form_time circle").css("fill", active_color);
    //STOP ALL AUDIO FILES
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
    document.body.style.backgroundColor = "white";
    $('.header-name').css({
      color: "black"
    });

    // dodane, żeby po przejściu na kolejną stronę pokazywała się ona od góry
    window.scrollTo(0, 0);
    
    //document.body.style.backgroundImage = "backImage";
    
    //TRIGGER NIE POZWALAJĄCY NA DALSZE PÓJŚCIE PÓKI NIE WYBIERZE SIĘ CO NAJMNIEJ JEDEN KOLOR ORAZ EMOCJĘ
    if(child === 1 || (child === 2 && selectedSex.length !== 0 && selectedAge.length !== 0 && selectedDisease.length !== 0)|| (emotionsMatrix[rows] !== 0 && (colorsMatrix[rows][0] !== 'rgba(241, 241, 241, 0.493)'|| colorsMatrix[rows][1] !== 'rgba(241, 241, 241, 0.493)' || colorsMatrix[rows][2] !== 'rgba(241, 241, 241, 0.493)'))){
      isColorSelected = true;
      isEmotionSelected = true;
      $('.warning_info').hide();
    }
    else {
      isColorSelected = false;
      isEmotionSelected = false;
      $('.warning_info').show();
    }


    var id = $(this).attr("id");
    if (id === "next" && isColorSelected === true) {
      //console.log(peopleCountersss);
      $("#prev").removeClass("disabled");
      if (child >= length-1) {
        $(this).addClass("disabled");
        $('#submit').removeClass("disabled"); // wyzwolić jeśli przeszedłeś wszystkie pytania
      }
      if (child <= length) {
        if (child > 2 && child < questionsAmount + 2){
          counter = 0;
          rows++;
        }
        if (child > 1 && child < questionsAmount + 2){
          isColorSelected = false;
          isEmotionSelected = false;
          $('.warning_info').hide();
        }
        child++;
      }


    } else if (id === "prev") {
      $("#next").removeClass("disabled");
      $('#submit').addClass("disabled");
      $('#again').addClass("disabled");
      if (child <= 2) {
        $(this).addClass("disabled");
      }
      if (child > 1) {
        if (child > 3 && child < questionsAmount +3){
          counter = 0;
          rows--;
        }
        child--;
        $('.warning_info').hide();
      }      
    }

    if(id === "submit")
    {
      child++;
      $('#next').addClass("disabled");
      $('#prev').addClass("disabled");
      $('#submit').addClass("disabled");
      $('#again').removeClass("disabled");
      $('#svg_form_time rect').css('fill',submitted_color);
      $('#svg_form_time circle').css('fill',submitted_color);
      $("circle:nth-of-type(1)").css("fill", submitted_color);
      isSurveyFinished = true;
    }
    if(id === "again")
    {
      isSurveyFinished = false;
      peopleCounter = peopleCounter+1;
      console.log(peopleCounter);
      window.location.reload();
    }

    counter = 0;
    $('.choose_color_button1').css({
      backgroundColor: colorsMatrix[rows][0],
      border: "0 4px 10px rgba(0, 0, 0, 0.35"
    });
    $('.choose_color_button2').css({
      backgroundColor: colorsMatrix[rows][1],
      border: "0 4px 10px rgba(0, 0, 0, 0.35"
    });
    $('.choose_color_button3').css({
      backgroundColor: colorsMatrix[rows][2],
      border: "0 4px 10px rgba(0, 0, 0, 0.35"
    });
    //console.log('outputVector: ' + selectedSex);
    //console.log('outputVector: ' + selectedAge);
    //console.log("this is a colorsMatrix:" + colorsMatrix[rows][0]);
    
    outputVector[3] = colorsMatrix;
    outputVector[4] = emotionsMatrix;
    outputVector[5] = peopleCounter;
    console.log(outputVector);

    var circle_child = child + 1;
    $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
      "fill",
      base_color
    );
    $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
      "fill",
      base_color
    );

    var currentSection = $("section:nth-of-type(" + child + ")");
    currentSection.fadeIn();
    currentSection.css('transform','translateX(0)');
    currentSection.prevAll('section').css('transform','translateX(-100px)'); // robi ładne przejście z sekcji do sekcji (takie przesuwanie się sekcji)
    currentSection.nextAll('section').css('transform','translateX(100px)');
    $('section').not(currentSection).hide();
  });
  

});


root.render(
  <React.StrictMode>
    <App peopleCounter={peopleCounter}/>
  </React.StrictMode>
  
);
reportWebVitals();