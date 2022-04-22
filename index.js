//Q.1..  create 2 buttons one hide and one show a paragarph using Jquery

$("Show").click(() => {

    $("#paragraph").Show();

});

$("#Hide").click(() => {

    $("#paragraph").Hide();

});



//Q.2.. Change the heading of the page using ajax 

$("#change").click(() => {

    $.ajax({

        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: (data) => {

            document.getElementById("heading").innerText = data.title;

        }
    })
});