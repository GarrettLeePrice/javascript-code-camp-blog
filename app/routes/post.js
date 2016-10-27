import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions : {
    addComment(params) {
      console.log("params: " + params.post);
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      console.log(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    }
  }
});
