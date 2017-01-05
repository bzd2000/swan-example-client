import {inject}        from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";

@inject(EntityManager)
export class Demo {

  actions = [{
    icon: 'flag',     // font-awesome icon name
    title: 'users', // button title if `icon` is not set
    type: 'primary',  // bootstrap button type
    action: (record) => {
      this.customAction(record);
    },
    disabled: record => {
      // disable button if the ID is an even number
      return record.id % 2 == 0;
    }
  }];

  constructor(entityManager) {
    this.todoRepository = entityManager.getRepository('user');
  }

  customAction(record) {
    console.log('Custom action was triggerd with data: ', record);
  }

  myEventCallback(event) {
    console.log('Event "%s" was triggerd', event);
  }

  myFunctionCallback(event) {
    console.log('Edit was triggerd with data:', event);
  }
}
