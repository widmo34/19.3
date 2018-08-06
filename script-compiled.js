'use strict';

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_COMMENT = 'CREATE_COMMENT';
var EDIT_COMMENT = 'EDIT_COMMENT';
var REMOVE_COMMENT = 'REMOVE_COMMENT';
var THUMB_UP_DOWN_COMMENT = 'THUMB_UP_DOWN_COMMENT';

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text: text,
        id: _uuid2.default.v4()
    };
}

dispatch(createComment('it is a new comments under some post'));
var boundCreateComment = function boundCreateComment(text) {
    return dispatch(createComment(text));
};
boundAddComment('it is a new comments under some post');

function editComment(id) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    };
}
dispatch(editComment(1));
var boundEditComment = function boundEditComment(value) {
    return dispatch(editComment(value));
};
boundAddComment(1);

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
}

dispatch(removeComment(1));
var boundremoveComment = function boundremoveComment(value) {
    return dispatch(editComment(value));
};
boundAddComment(1);

function thumbUpDown(id, down, up) {
    return {
        type: THUMB_UP_DOWN_COMMENT,
        id: id,
        down: down,
        up: up
    };
}
dispatch(thumbUpDown(1, 'true', 'false'));
var boundthumbUpDown = function boundthumbUpDown(v1, v2, v3) {
    return dispatch(thumbUpDown(v1, v2, v3));
};
boundAddComment(1, 'true', 'false');

var actions = [{
    type: CREATE_COMMENT,
    text: 'here is content of the comments !',
    id: _uuid2.default.v4()
}, {
    type: EDIT_COMMENT,
    id: 1,
    text: 'here is content of the comments !'
}, {
    type: REMOVE_COMMENT,
    id: 1
}, {
    type: THUMB_UP_DOWN_COMMENT,
    id: 1,
    down: '',
    up: ''
}];
