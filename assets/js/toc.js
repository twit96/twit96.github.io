$(document).ready( function(){
  var ToC ="<div class='table-of-contents'" +
    "<h3>Table of Contents:</h3>" +
    "<ul>";

  var newLine, el, title, link;

  $("h3").each(function() {

    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;

  });

  ToC +=
     "</ul>" +
    "</div>";

    // $(".section").prepend(ToC);
    // $(".section").append(ToC);
    $('#toc').append(ToC)
    // $("#one").prepend(ToC);
 });
