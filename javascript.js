function f() {
    document.getElementById("second_message").innerHTML="";
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("show");

    setTimeout(function() {
        overlay.classList.toggle("show");
        var secMes= document.getElementById("second_message");
        var nome = sessionStorage.getItem("name");
        secMes.innerHTML="Fammelo un sorriso ora, dai<br>perchè sei molto carina qunando lo fai<br>♥"
    }, 12000);
}
function f2()
{
 var nome = document.getElementById("nm2").value;
 sessionStorage.setItem("name", nome);
 document.getElementById("form").submit();
}
function f3()
{
    var nome=sessionStorage.getItem("name");
    document.getElementById("premimi-button").textContent=""+nome+", ecco una sorpresina per te"
    //alert("Eccoti qui "+nome);
}
function f4()
{
    if(document.getElementById("nm2")!=null && document.getElementById("nm2").value.length>=3)
    {
        document.getElementById("btnInvio").style.display="block";
    }
    else
    {
        document.getElementById("btnInvio").style.display="none";
    }
}