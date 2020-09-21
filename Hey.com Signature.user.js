// ==UserScript==
// @name         Hey.com Signature
// @namespace    http://applefield.me/
// @version      0.1
// @description  Add signature to hey.com emails
// @author       Justin Applefield
// @match        https://app.hey.com/messages/new
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("Running");
    var input = document.getElementById("message_content__trix_input_message");
    var text_field = document.getElementsByClassName("entry-composer__textarea trix-content");
    text_field[0].textContent = "Signature Goes Here";
    input.value = "Signature Goes Here";
    console.log("Complete");
})();