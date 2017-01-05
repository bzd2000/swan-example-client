import {Entity, validatedResource, type} from 'aurelia-orm';
import {ValidationRules} from 'aurelia-validation';
import {observable} from 'aurelia-binding';

@validatedResource('user')
export class TodoEntity extends Entity {
  @observable()
  @type('string')
  username = '';

  @observable()
  @type('string')
  password = '';


  constructor() {
    super();

    ValidationRules
      .ensure('username').required()
      .ensure('password').required()
      .on(this);
  }
}
