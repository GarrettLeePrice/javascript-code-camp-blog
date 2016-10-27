import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  comment: DS.attr(),
  post: DS.belongsTo('comment', {async: true}),
});
