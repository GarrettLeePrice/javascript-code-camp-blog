import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,

  actions : {
    editFormShow() {
      this.set('editPost', true);
    },

    updatePost(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        date: this.get('date'),
        image: this.get('image'),
        body: this.get('body')
      };
      this.set('editPost', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
