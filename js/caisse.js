
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
    caisse_assurance.style.border = "5px solid orange";
    make_border(caisse_assurance);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="inline";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";

});

caisse_epargne.addEventListener('click',(event) => {
    caisse_epargne.style.border = "5px solid orange";
    make_border(caisse_epargne);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="inline";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";

});


caisse_emprunt.addEventListener('click',(event) => {
    caisse_emprunt.style.border = "5px solid orange";
    make_border(caisse_emprunt);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="inline";

});


caisse_sanction.addEventListener('click',(event) => {
    caisse_sanction.style.border = "5px solid orange";
    make_border(caisse_sanction);
    change_table();
});

caisse_aide.addEventListener('click',(event) => {
    caisse_aide.style.border = "5px solid orange";
    make_border(caisse_aide);

    change_table();
});

caisse_cotisation.addEventListener('click',(event) => {
    caisse_cotisation.style.border = "5px solid orange";
    make_border(caisse_cotisation);
    change_table();
});

caisse_collation.addEventListener('click',(event) => {
    caisse_collation.style.border = "5px solid orange";
    make_border(caisse_collation);
    change_table();
});

caisse_secours.addEventListener('click',(event) => {
    caisse_secours.style.border = "5px solid orange";
    make_border(caisse_secours);
    change_table();
});
caisse_remb.addEventListener('click',(event) => {
    caisse_remb.style.border = "5px solid orange";
    make_border(caisse_remb);

    var element1=document.getElementById("Contain_caisse");
    element1.style.display="none";

    var element2=document.getElementById("contain_caisse_epargne");
    element2.style.display="none";
    
    var element3=document.getElementById("contain_caisse_emprunt");
    element3.style.display="none";

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="inline";

});

caisse_ration.addEventListener('click',(event) => {
    caisse_ration.style.border = "5px solid orange";
    make_border(caisse_ration);
    change_table();
});

caissse_projet.addEventListener('click',(event) => {
    caissse_projet.style.border = "5px solid orange";
    make_border(caissse_projet);
    change_table();
    
});


function make_border(current_element) {
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

    var element3=document.getElementById("Contain_rembourssement");
    element3.style.display="none";
}





