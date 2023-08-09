
var caisse_assurance = document.getElementById('ciasse_ass');
var caisse_epargne = document.getElementById('caisse_epar');
var caisse_sanction = document.getElementById('caisse_sanc');
var caisse_aide = document.getElementById('caisse_aide');
var caisse_cotisation = document.getElementById('caisse_cotisation');
var caisse_collation = document.getElementById('caisse_collation');
var caisse_emprunt = document.getElementById('caisse_emprunt');
var caisse_secours = document.getElementById('caisse_secours');
var caisse_remb = document.getElementById('caisse_remb');
var caissse_projet = document.getElementById('caissse_projet');
var caisse_ration = document.getElementById('caisse_ration');


var elements = [
    caisse_assurance,
    caisse_epargne, 
    caisse_sanction, 
    caisse_aide, 
    caisse_cotisation,
    caisse_collation,
    caisse_emprunt,
    caisse_secours,
    caisse_remb,
    caissse_projet,
    caisse_ration
]

caisse_assurance.addEventListener('click',(event) => {
    make_border(caisse_assurance);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="inline";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element4=document.getElementById("Contain_rembourssement");
    element4.style.display="none";

    var element5=document.getElementById("contain_caisse_sanction");
    element5.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";
});

caisse_epargne.addEventListener('click',(event) => {
    make_border(caisse_epargne);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="inline";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element4=document.getElementById("Contain_rembourssement");
    element4.style.display="none";

    var element5=document.getElementById("contain_caisse_sanction");
    element5.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";
    
    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";
});


caisse_emprunt.addEventListener('click',(event) => {
    make_border(caisse_emprunt);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";
    
    var element4=document.getElementById("contain_caisse_emprunt");
    element4.style.display="inline";

    var element5=document.getElementById("contain_caisse_sanction");
    element5.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";

});


caisse_sanction.addEventListener('click',(event) => {
    make_border(caisse_sanction);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";
    
    var element4=document.getElementById("contain_caisse_emprunt");
    element4.style.display="none";

    var element5=document.getElementById("contain_caisse_sanction");
    element5.style.display="inline";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";
});

caisse_aide.addEventListener('click',(event) => {
    make_border(caisse_aide);
    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";
    
    var element4=document.getElementById("contain_caisse_emprunt");
    element4.style.display="none";

    var element5=document.getElementById("contain_caisse_sanction");
    element5.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="inline";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";

});

caisse_cotisation.addEventListener('click',(event) => {
    make_border(caisse_cotisation);
    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element4=document.getElementById("Contain_rembourssement");
    element4.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var btn = document.getElementById('btn-sortie-ass');
    btn.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="inline";
});

caisse_collation.addEventListener('click',(event) => {
    make_border(caisse_collation);
    change_table();
});

caisse_secours.addEventListener('click',(event) => {
    make_border(caisse_secours);
    change_table();
});
caisse_remb.addEventListener('click',(event) => {
    make_border(caisse_remb);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="inline";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";

});

caisse_ration.addEventListener('click',(event) => {
    make_border(caisse_ration);
    var element1=document.getElementById("Contain_caisse");
    element1.style.display="inline";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var btn = document.getElementById('btn-sortie-ass');
    btn.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";
    //btn.remove();
    
});

caissse_projet.addEventListener('click',(event) => {
    make_border(caissse_projet);
    var element1=document.getElementById("Contain_caisse");
    element1.style.display="inline";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element4=document.getElementById("Contain_rembourssement");
    element4.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var btn = document.getElementById('btn-sortie-ass');
    btn.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";
    
});


function make_border(current_element) {
    current_element.style.border = "5px solid orange";
    elements.forEach(element => {
        if (element != current_element) {
            element.style.border = "none";
        }
    });
}

function change_table() {
    var element1=document.getElementById("Contain_caisse");
    element1.style.display="inline";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element4=document.getElementById("Contain_rembourssement");
    element4.style.display="none";

    var element6 = document.getElementById("Contain_caisse_aide");
    element6.style.display="none";

    var element7 = document.getElementById("Contain_caisse_cotisation");
    element7.style.display="none";
}





