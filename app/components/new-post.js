import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost : false,

  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        date: this.get('date'),
        image: this.get('image'),
        body: this.get('body')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
