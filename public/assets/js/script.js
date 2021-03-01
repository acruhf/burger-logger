$(document).ready(function() {

    $(".devour").on("click", function(e) {
        e.preventDefault();
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(function() {
            location.reload();
        });
    });

    $(".undevour").on("click", function(e) {
        e.preventDefault();
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: false }
        }).then(function() {
            location.reload();
        });
    });

    $(".add-burger").on("submit", function(e) {
        e.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        if (newBurger.burger_name) {
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                location.reload();
            });
        }
    });

    

    $(".remove").on("click", function(e) {
        e.preventDefault();
        if (confirm("Confirm delete?")) {
            var id = $(this).data("id");

            // Send the DELETE request.
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function() {
                location.reload();
            });
        }
    });

});