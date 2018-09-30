$(() => {
    $("#reload").click(() => {
        window.location.reload();
    });

    $("#leggo").click(() => {
        $("#log").text("");
        log(new Date());
        log("Testing cors read");

        $.ajax({
            url: "https://baudartius.magister.net/api/sessions/current",
            error: (err) => {
                log(`Cors read error ${err.status}`)
            },
            success: (data, text) => {
                log(`Cors read successfull: ${text}`)
            }
        });


    })
});

function log(text) {
    $("#log").append(`${text}<br>`);
}