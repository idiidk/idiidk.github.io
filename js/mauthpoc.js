$(() => {
    $("#reload").click(window.location.reload);

    $("#leggo").click(() => {
        $("#log").append(new Date());
    })
});