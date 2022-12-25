// $(document).ready(function () {
//     $(document).on('mousemove', function (e) {
//         $('#follwoMe').css({
//             display: "block",
//             left: e.pageX,
//             top: e.pageY
//         });
//     });
//     var timeout;
//     $(document).on('mousemove', function (event) {
//         if (timeout !== undefined) {
//             window.clearTimeout(timeout);
//         }
//         timeout = window.setTimeout(function () {
//             $(event.target).trigger('mousemoveend');
//         }, 2300);
//     });
//     $(document).on('mousemoveend', function (e) {
//         $('#follwoMe').css({
//             left: e.pageX,
//             top: e.pageY,
//             display: "none"
//         });
//     });
// });
window.onload = () => {
    $(document).on('mousemove', function (e) {
        $('#follwoMe').css({
            display: "block",
            left: e.pageX,
            top: e.pageY
        });
    });
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            $(event.target).trigger('mousemoveend');
        }, 2300);
    });
    $(document).on('mousemoveend', function (e) {
        $('#follwoMe').css({
            left: e.pageX,
            top: e.pageY,
            display: "none"
        });
    });
  };