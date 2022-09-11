$(document).ready(function() {
    //Partie 1

    $(".texte1").hide(); //Q1


    $(".dbclick1").dblclick(function() { //Q2
        $(".texte1").toggle(2000);
    }); //Double click


    $(".texte2").hide();

    $(".bouton2").click(function() { $(".texte2").toggle() });


    $(".image1").hide();


    $(".section1").mouseenter(function() {
        $(".titre1").text("Estimation Gratuite")
        $(".image1").show();
        $(this).addClass("changement1");


    });

    $(".section1").mouseleave(function() { $(this).removeClass("changement1") });


    //Partie 2

    $("#texte3").hide();
    $("#texte4").hide();


    $(".image3").click(function() {
        $(this).hide(1000);
        $("#texte3").addClass("changement2");
        $("#texte3").show(1000);
        $("#texte4").show(1000);
    });

    $("#texte3, #texte4").mouseleave(function() {
        $("#texte3").removeClass("changement2");

        $(".image3").show(1000);
    });


    $("#texte5").dblclick(function() {
        $(this).addClass("changement3");
    }); //Double click

    $("#texte5").mouseleave(function() {
        $(this).removeClass("changement3");
    });


    var premierClick = 0;

    if (premierClick == 0) {
        $(".bouton3").click(function() {
            $(".image4").attr('src', '../images/reparation6.jpg');
            $("#texte5").addClass("changement4");

            premierClick++;
        });
    } else {

        $("#imges").attr('src', '../images/reparation5.jpg');
        $("#texte5").removeClass("changement4");
        premierClick = 0;
    }



    //Partie 3


    $(".section2").hide();

    $(".titre6").click(function() {

        $(".section2").addClass("changement5");
        $(".section2").show();

    });

    $("#texte7").hide();


    $("#input1").focus(function() { //Seulement sur les inputs
        $("#texte7").show();
    });

    $("#input1").blur(function() { //Blur:Show de focus
        $("#texte7").slideUp();
    });


    $("#province").hide();


    $("#input2").focus(function() { //Seulement sur les inputs
        $("#province").show();
    });

    $("#input2").blur(function() { //Blur:Show de focus
        $("#province").slideUp();
    });


    $(".enregistrer").click(function() {
        var nom = $("#input1").val(); //recupere le contenu
        var province = $("#input2").val();

        if (nom == "" || province == "") {
            alert("Veuillez indiquer votre  nom et une province");
            $("#input1").focus();

        }


        if (province == "Ontario" || province == " Alberta" || province == "Manitoba") {

            alert("Merci " + nom + " de la province de " + province);
        } else {

            alert("Merci " + nom + " de votre visite");
        }



    });







    //Fermeture du bloc


})