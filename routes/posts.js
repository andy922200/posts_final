const express = require('express');
const router = express.Router();
const PostController = require('../controller/postController');
const LikesControllers = require('../controller/likeController');
const FollowController = require('../controller/followController');
const { isAuth } = require('../middleware/auth')

// 張貼個人動態 - 新增貼文
router.post('/', isAuth, (req, res, next) => {
  PostController.postOnePost(req, res, next);
});

// 張貼個人動態 - 修改貼文
router.patch('/:postId', isAuth, (req, res, next) => {
    PostController.patchOnePost(req, res, next);
});

// 取得個人按讚列表
router.get('/likes', isAuth, (req, res, next) => {
  LikesControllers.getUserLikeList(req, res, next)
})

// 新增一則貼文的讚
router.put('/likes/:postId', isAuth, (req, res, next) => {
  LikesControllers.addPostLike(req, res, next)
})

// 取消一則貼文的讚
router.delete('/likes/:postId', isAuth, (req, res, next) => {
  LikesControllers.delPostLike(req, res, next)
)}

/* 取得個人所有追蹤列表 */
router.get('/follows', isAuth, (req, res, next) => {
  FollowController.getFollowList(req, res, next)
})

module.exports = router;