var oneSignal = require('./one.signal.controller');
var asset = require('../config/assets');
let push = {
    oneNotification: (payload) => {
        let message = {
            app_id: asset.ONEID,
            small_icon: "https://femalehire.com/images/favicon.png",
            large_icon: "https://femalehire.com/images/favicon.png",
            contents: {
                "en": payload.message
            },
            include_player_ids: [payload.player, '6767b0e8-12d5-44a9-82ba-940f3f5b5166']
        };
        oneSignal.sendNotification(message);
    },
    manyNotification: (payload) => {
        let message = {
            app_id: asset.ONEID,
            small_icon: "https://femalehire.com/images/favicon.png",
            large_icon: "https://femalehire.com/images/favicon.png",
            contents: {
                "en": payload.message
            },
            include_player_ids: payload.player
        };
        oneSignal.sendNotification(message);
    }
}

module.exports = push;