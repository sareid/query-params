import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  first_name: attr('string'),
  last_name: attr('string'),
  nick_name: attr('string'),
  age: attr('number'),
  email: attr('string'),
  phone: attr('string'),
  friends_since: attr(),

});
