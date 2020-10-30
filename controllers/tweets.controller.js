const { getTweets, getCurrentUserTweetsWithFollowing, createTweet, deleteTweet, getTweet, updateTweet, getUserTweetsFromUsername } = require('../queries/tweets.queries');

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render('tweets/tweet', { tweets, isAuthenticated: req.isAuthenticated(), currentUser: req.user, user: req.user, editable: true });
  } catch(e) {
    next(e);
  }
};

exports.tweetNew = async (req, res, next) => {
  try {
    const tweets = await getTweets();
    res.render('tweets/tweet-form', { tweets, tweet: {}, isAuthenticated: req.isAuthenticated(), currentUser: req.user, user: req.user });
  } catch(e) {
    next(e);
  }
  
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createTweet({ ...body, author: req.user._id });
    res.redirect('/tweets');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    res.status(400).render('tweets/tweet-form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
};

exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render('tweets/tweet-list', { tweets, currentUser: req.user, editable: true });
  } catch(e) {
    next(e);
  }
}

exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweets = await getTweets();
    const tweet = await getTweet(tweetId);
    res.render('tweets/tweet-form', { tweets, tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user, user: req.user });
  } catch(e) {
    next(e);
  }
}

exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;

  try {
    const body = req.body;
    await updateTweet(tweetId, body);
    res.redirect('/tweets');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    const tweet = await getTweet(tweetId);
    res.status(400).render('tweets/tweet-form', { errors, tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
  
}