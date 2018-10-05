import * as constants from './constants';
import {Get} from '../../../http'
import * as luxon from 'luxon';

const changeDetail = (content) => ({
    type: constants.CHANGE_DETAIL,
    avatarUrl: content.user.profile_image_url_https,
    userName: content.user.name,
    mainImageUrl: content.imageUrl,
    text: content.text,
    createDate: content.created_at
});

export const getDetail = (id) => {
    return (dispatch) => {
        Get('tweet/' + id).then((res) => {
            const TWITTER_DATE_FORMAT = 'EEE MMM d HH:mm:ss ZZZ yyyy';
            const date = luxon.DateTime.fromString(res.created_at, TWITTER_DATE_FORMAT);
            res.created_at = date.toISODate();
            const url = res.entities.urls[0];
            res.imageUrl = url.display_url;
            dispatch(changeDetail(res));
        }).catch(() => {

        });
    }
};