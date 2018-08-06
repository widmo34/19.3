import uuid from 'uuid'


const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_DOWN_COMMENT = 'THUMB_UP_DOWN_COMMENT';

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

dispatch(createComment('it is a new comments under some post'));
const boundCreateComment = text => dispatch(createComment(text));
boundAddComment('it is a new comments under some post');


function editComment(id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id,
     }
}
dispatch(editComment(1));
const boundEditComment = value => dispatch(editComment(value));
boundAddComment(1);


function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

dispatch(removeComment(1));
const boundremoveComment = value => dispatch(editComment(value));
boundAddComment(1);

function thumbUpDown(id, down, up)  {
    return {
        type: THUMB_UP_DOWN_COMMENT,
        id: id,
        down: down,
        up: up
    }
}
dispatch(thumbUpDown(1, 'true', 'false'));
const boundthumbUpDown = (v1, v2, v3) => dispatch(thumbUpDown(v1, v2, v3));
boundAddComment(1, 'true', 'false');



const actions =[ {
        type: CREATE_COMMENT,
        text: 'here is content of the comments !',
        id : uuid.v4(),
    },
    {
        type: EDIT_COMMENT,
        id: 1,
        text: 'here is content of the comments !',
    },
    {
        type: REMOVE_COMMENT,
        id: 1
    },{
        type: THUMB_UP_DOWN_COMMENT,
        id: 1,
        down: '',
        up: ''
    }
    ];