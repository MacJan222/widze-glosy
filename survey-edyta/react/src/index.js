import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Header from './components/Header';
import StudentsIntro from './components/StudentsIntro';
import ColorButton from './components/ColorButton';
import ColorPicker from './components/ColorPicker';
import AudioSection from './components/AudioSection';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import { questions_english } from './questions/Questions_en';
import { questions } from './questions/Questions';
//const $ = window.$;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
reportWebVitals();


//TA FUNKCJA JEST OD WSZYSTKIEGO (TAK JAKBY OD STRONY I OD BUTTONÓW)
$( document ).ready(function() {
  var base_color = "rgb(230,230,230)"; // KOLOR NIEWYPEŁNIONYCH KÓŁECZEK NA GÓRZE
  var active_color = "rgb(237, 40, 70)"; // zielony od buttonów: 0, 170, 105     KOLOR WYPEŁNIONYCH NA CZERWONO KÓŁECZEK NA GÓRZE
  
  var isColorSelected = true;

  var counter = 0;
  var rows = 0;
  var questionsAmount = 10;
  var outputVector = [];
  var selectedSex = [];
  var selectedAge = [];

  $('.ccccc').hide();
  $('.dialog').hide();

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


var colorsMatrix = [
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"],
  ["hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)", "hsla(0, 0%, 60%, 0.14)"]
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
  
    console.log(counter);
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
      $('.ccccc').hide();
    }, 500);
    setTimeout(function() {
      $('.ripple').removeClass('scaling');
    }, 900);
    $('.dialog').hide();
    window.stop();
  });

  var child = 1;
  var length = $("section").length - 1;
  $("#prev").addClass("disabled");
  $("#submit").addClass("disabled");
  
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
  for (var i = 0; i < length; i++) {
    var positionX = 12 + i * 200;
    var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
    document.getElementById("svg_form_time").appendChild(rect);
     <g><rect x="12" y="9" width="200" height="6"></rect></g>//CO TO?
    var circle = makeSVG("circle", {
      cx: positionX,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);
  }
  
  var circle = makeSVG("circle", {
    cx: positionX + 200,
    cy: 12,
    r: 12,
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
    colorsMatrix[rows][0] = "hsla(0, 0%, 60%, 0.14)";
    colorsMatrix[rows][1] = "hsla(0, 0%, 60%, 0.14)";
    colorsMatrix[rows][2] = "hsla(0, 0%, 60%, 0.14)";
    document.body.style.backgroundColor = "white";
    $('.ccccc').hide();
    $('.dialog').hide();

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
  });


  $(".choose_color_button1").click(function () {
    counter = 1;
    $(this).css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.75');
    $('.choose_color_button2').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.choose_color_button3').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.ccccc').show();
  });
  $(".choose_color_button2").click(function () {
    counter = 2;
    $(this).css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.75');
    $('.choose_color_button1').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.choose_color_button3').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.ccccc').show();
  });
  $(".choose_color_button3").click(function () {
    counter = 3;
    $(this).css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.75');
    $('.choose_color_button1').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.choose_color_button2').css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.35');
    $('.ccccc').show();
  });

  $(window).on('beforeunload', function () {
    // Check if there is no selected color
    if (!isColorSelected) {
      return 'You have not selected a color. Are you sure you want to leave this page?';
    }
  });
  

  //TUTAJ JEST LOGIKA BUTTONÓW
  $(".button").click(function () {
    $("#svg_form_time rect").css("fill", active_color);
    $("#svg_form_time circle").css("fill", active_color);

    if (id === "polish"){
      
    }
    else if (id === "english"){
      questions = questions_english;
    }

    //STOP ALL AUDIO FILES
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
    document.body.style.backgroundColor = "white";
    //document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/blue-fluid-patterned-background-vector_53876-143618.jpg?w=740&t=st=1683227891~exp=1683228491~hmac=d906a9e2c3aa16eb0be7931fb0451d2aa881d1a4de26e688a4efa897ca5be529')";
    
    //TRIGGER NIE POZWALAJĄCY NA DALSZE PÓJŚCIE PÓKI NIE WYBIERZE SIĘ CO NAJMNIEJ JEDEN KOLOR
    if(child === 1 || (child === 2 && selectedSex.length !== 0 && selectedAge.length !== 0)|| colorsMatrix[rows][0] !== 'hsla(0, 0%, 60%, 0.14)'|| colorsMatrix[rows][1] !== 'hsla(0, 0%, 60%, 0.14)' || colorsMatrix[rows][2] !== 'hsla(0, 0%, 60%, 0.14)'){
      isColorSelected = true;
      $('.dialog').hide();
    }
    else {
      isColorSelected = false;
      $('.dialog').show();
    }


    var id = $(this).attr("id");
    if (id === "next" && isColorSelected === true) {
      $("#prev").removeClass("disabled");
      if (child >= length) {
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
          $('.dialog').hide();
        }
        child++;
      }

    } else if (id === "prev") {
      $("#next").removeClass("disabled");
      $('#submit').addClass("disabled");
      if (child <= 2) {
        $(this).addClass("disabled");
      }
      if (child > 1) {
        if (child > 3 && child < questionsAmount +3){
          counter = 0;
          rows--;
        }
        child--;
        $('.dialog').hide();
      }
      
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
    console.log('outputVector: ' + selectedSex);
    console.log('outputVector: ' + selectedAge);
    //console.log("this is a colorsMatrix:" + colorsMatrix[rows][0]);
    
    outputVector[2] = colorsMatrix;

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