// class to create a generic Service to manage a collection of items (slide 23)
class Service {
  
  // constructor... runs when we create a new Service
  constructor(serviceName) {
    this.name = serviceName;  // service name
    this.items = [];          // array to store items
  }

  // add method
  add(item) {
    // push item into items array
    this.items.push(item);
  }

  // list method
  list(){
    return this.items;
  }

  // get id method
  get(id){
    return this.items.find(item => item.id === id); // use find method to search array for item with matching id
  }

  // update existing item
  // newData: object with properties to update
  update(id, newData) {
    // find item to update
    const item = this.get(id);
    
    // if exists, update properties with newData
    if (item) {
      Object.assign(item, newData); // Object.assign copies properties from newData into item
    }
  }

  // remove item by id
  remove(id) {
    // filter to create new array without item with matching id... keeps all items where the condition is TRUE
    this.items = this.items.filter(item => item.id !== id);
  }

  destroy() {
    this.items = [];
  }
  
}

// new service
const userService = new Service("UserService");

userService.add({
    id: 1,
    name: "Hugo",
    age: 38,
    profession: "manager"
});

userService.add({
    id: 2,
    name: "Nay",
    age: 32,
    profession: "surpevisor"
});

userService.add({
    id: 3,
    name: "Victor Hugo",
    age: 18,
    profession: "trainee"
});

// for testing

/* 
//test add method
console.log(userService.items);

//test list method
console.log(userService.list());

// test get method
console.log(userService.get(2));
console.log(userService.get(3)); 

// test update method 
// before update
console.log("Before update: ", userService.get(1));
// update user with id 1... add a new property "school"
userService.update(1, { school: "CFA" });
// after update
console.log("\nAfter update: ", userService.get(1));


// test remove method
// before remove
console.log("Before remove: ", userService.list());
// remove user with id 2
userService.remove(2);
// after remove
console.log("\nAfter remove: ", userService.list());
*/

// before destroy
console.log("Before destroy: ", userService.list());
// destroy the service
userService.destroy();
// After destroy
console.log("\nAfter destroy: ", userService.list());