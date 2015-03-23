// create a drop down menu for mobile devices

//create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);

  //create an option (code)
  var $option = $("<option></option>");

  //deal with selected option depending on current page
  if ($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  };

  //option value is the href of the link
  $option.val($anchor.attr("href"));

  //options' text is the text of the link - anchor text
  $option.text($anchor.text());

  //append option to select (code)
  $select.append($option);
});

//bind change listener to the select - when select drop down want it to change straight away
$select.change(function(){
  //to go to select's location
  window.location = $select.val();

});