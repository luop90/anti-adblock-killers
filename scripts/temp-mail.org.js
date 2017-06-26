// ==UserScript==
// @name         Anti Adblock-Detector for Temp-Mail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reks temp-mail's anti-adblock.
// @author       Luop90 (github.com/luop90)
// @match        https://temp-mail.org/*
// @grant        none
// ==/UserScript==

'use strict';

// Use a bunch of constant variables to prevent changes
const nop = function () {
 return false;
};

const adblocked = window.adblocked = {
  result: false,
  done: nop,
  insert: nop,
  check: nop,
  userCallback: nop
};

const checkadBlock = nop;
