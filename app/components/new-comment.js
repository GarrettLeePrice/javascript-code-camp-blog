import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        post: this.get('post')
      };
      console.log("author: " + this.get('author'));
      console.log(params.post);
      this.sendAction('addComment', params);
    }
  }
});
