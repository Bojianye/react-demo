import * as constants from './constant'
import {Get} from "../../../http";

export const refreshCardList = () => {
    return (dispatch) => {
        Get('timeline/XHNews').then(res => {
            let result = [];
            res.forEach(function (item) {
                let newItem = {}
                newItem.avatar = item.user.profile_image_url_https;
                newItem.userName = item.user.name;
                const medias = item.entities.media;
                let imageUrl = "";
                if (medias) {
                    const media = medias[0];
                    imageUrl = media.media_url
                }
                newItem.mainImage = imageUrl;
                newItem.text = item.text;
                newItem.id = item.id_str;
                result.push(newItem);
            });
            const action = {
                type: constants.REFRESH_CARD_LIST,
                cardList: result
            };
            dispatch(action)
        })
    }
}
