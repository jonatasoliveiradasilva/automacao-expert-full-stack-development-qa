import $ from "jquery";
import "../../projeto1/src/css/teste.scss";
import Botao from "../../projeto1/src/components/botao/index.js";

$(function() {

    let botao = new Botao();

    botao.setTitle("Testador");

    botao.setClick(function() {
        alert("CLICOU!");        
    });

    $(".area").html(botao.render());
});
