AFRAME.registerComponent("markerHandler", {
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");
    
        ratingButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work in Progress"
            });
        });

        orderButton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpeg",
                title: "Thanks for Ordering",
                text: "Your order will be completely soon"
            });
        });
    },

    handleMarkerLost: function(){
        buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    },
});