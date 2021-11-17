"use strict";
var RoboGameNamespace;
(function (RoboGameNamespace) {
    RoboGameNamespace.ressourceBioMass = 5000;
    RoboGameNamespace.increaseBioMass = 10;
    RoboGameNamespace.ressourceScrap = 5000;
    RoboGameNamespace.increaseScrap = 5;
    RoboGameNamespace.ressourceOil = 5000;
    RoboGameNamespace.increaseOil = 3;
    RoboGameNamespace.ressourceMetal = 5000;
    RoboGameNamespace.increaseMetal = 7;
    function bioMassToHTML(bioMass) {
        let div = document.getElementById("UI-Biomass");
        div.textContent = String(bioMass);
    }
    RoboGameNamespace.bioMassToHTML = bioMassToHTML;
    function scrapToHTML(scrap) {
        let div = document.getElementById("UI-Scrap");
        div.textContent = String(scrap);
    }
    RoboGameNamespace.scrapToHTML = scrapToHTML;
    function oilToHTML(oil) {
        let div = document.getElementById("UI-Oil");
        div.textContent = String(oil);
    }
    RoboGameNamespace.oilToHTML = oilToHTML;
    function metalToHTML(metal) {
        let div = document.getElementById("UI-Metal");
        div.textContent = String(metal);
    }
    RoboGameNamespace.metalToHTML = metalToHTML;
})(RoboGameNamespace || (RoboGameNamespace = {}));
//# sourceMappingURL=RessourceHandler.js.map