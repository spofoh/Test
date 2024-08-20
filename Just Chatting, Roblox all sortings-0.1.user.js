// ==UserScript==
// @name         Just Chatting, Roblox all sortings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replace specific Twitch script with custom script
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Entferne das Original-Skript
    var scriptTags = document.querySelectorAll('script[src*="pages.directory-game-"]');
    scriptTags.forEach(function(script) {
        script.remove();
    });

    // Füge das benutzerdefinierte Skript hinzu
    var newScript = document.createElement('script');
    newScript.src = 'https://cdn.jsdelivr.net/gh/spofoh/Test@main/pages.directory-game-9b4cd7f072661b704ad9.js';
    document.head.appendChild(newScript);
})();
