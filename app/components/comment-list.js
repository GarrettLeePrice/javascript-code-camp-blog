import Ember from 'ember';

export default Ember.Component.extend({
  showCommentForm: false,
  actions: {
    showComments() {
      this.set('showCommentForm', true);
    },

    hideComments() {
      this.set('showCommentForm', false);
    },

    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        comment.destroyRecord();
        this.transitionTo('admin');
      }
    }
  }

});
