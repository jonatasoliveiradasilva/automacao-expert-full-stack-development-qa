import $ from "jquery";
import "../../projeto1/src/css/style.css";

$(function() {

    $("#botao").on("click", function() {

        $("h1").html("Olá Mundo ALTERADO!");

        $(this).addClass("botao");
    });
});
