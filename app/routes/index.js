import Ember from 'ember';

export default Ember.Route.extend({
  firstFivePosts : [],

  model() {
    return this.store.findAll('post');
    if (firstFivePosts.length < 5) {
      firstFivePosts.push(this);
    }
  }
});
