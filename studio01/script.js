/*jslint browser */

// CS 3312, spring 2022
// Studio 1
// YOUR NAME: Jeff Caldwell

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {

   // Enforce stricter JavaScript rules.
   'use strict';

   // Find all needed elements and save them in constants.
   const nameInputElement = document.querySelector('#name-input');
   const submitNameButton = document.querySelector('#submit-name');
   const howdyElement = document.querySelector('#howdy');
   const nameOutputElement = document.querySelector('#name-output');

   // Save idea paragraph
   const webAppIdeaElement = document.getElementById('web-app-idea');

   // Functions

   // populate a given input node's value with given string
   function populateInput(node, text) {
      // check that the passed node is, indeed, a text input
      if(node.nodeName !== 'INPUT' && !node.attributes.contains('text')) {
         throw new Error(`Expected text input element, got ${node.nodeName}`);
      } else {
         // check to make sure text has been passed
         if(text) {
            node.value = text;
         }
      }
   }

   // sets given nodes fontFamily to cursive
   function setCursiveNode(node) {
      node.style.fontFamily = 'cursive';
   }

   // add 'clicked' class to given node
   function setClicked(node) {
      // check that class does not already exist in classList
      if(!node.classList.contains('clicked')) {
         node.classList.add('clicked');
      }
   }

   // Make things happen when a user clicks on the button element.
   submitNameButton.addEventListener('click', function () {

      // Get the string value out of the input textbox.
      const name = nameInputElement.value;

      if (name.length === 0) {
         // The user didn't input a name, so use a default.
         nameOutputElement.textContent = 'student';
         howdyElement.classList.remove('enthusiastic');
      } else {
         // The user did input a name, so use it.
         nameOutputElement.textContent = name;
         // Make the paragraph stand out more.
         howdyElement.classList.add('enthusiastic');
      }
   });

   // listen for click events on the webAppIdeaElement

   webAppIdeaElement.addEventListener('click', (event) => {
      // send event.target.innerText to the populateInput fn
      populateInput(nameInputElement, event.target.innerText);
      // set target style.fontFamily to 'cursive'
      setCursiveNode(event.target);
      // set element class to 'clicked'
      setClicked(event.target);
   });

});
