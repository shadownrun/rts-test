(function (Omega) {

    "use strict";

    var MainScreen = Omega.Screen.extend({

        init: function () {

            this.player = new Player(Omega.env.w * 0.5, Omega.env.h * 0.2);

        },

        tick: function () {

            this.player.tick();
        },

        render: function (gfx) {

            this.clear(gfx, "hsl(195, 40%, 40%)");
            this.player.render(gfx);

        }
    });

    window.MainScreen = MainScreen;

}(window.Omega));
