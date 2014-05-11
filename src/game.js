(function (Omega) {

    "use strict";

    var OmegaGame = Omega.Game.extend({

        canvas: "#board",

        init: function (w, h) {

            this._super(w, h);

            Omega.evt.progress.push(function (remaining, max) {
                console.log((((max - remaining) / max) * 100 | 0) + "%");
            });

            Omega.input.bind({
                "space": "space",
                "touch": "touch",
                "escape": "escape",
                "left": "left",
                "right": "right",
                "up": "up",
                "down": "down",
                "moused": "mouse1"
            });

        },

        load: function () {

            this.setScreen(new MainScreen());

        }

    });

    window.OmegaGame = OmegaGame;

}(Omega));
