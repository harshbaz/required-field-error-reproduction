actor {

  public type User = {
    name: Text;
  };

  // Declarations2
  // public type User = {
  //   name: Text;
  //   surname: Text;
  // };

  public query func greet(name : Text) : async User {
    let newUser: User = {name = name;};
    // Declarations2
    // let newUser: User = {name = name; surname = 'Placeholder'};
    newUser;
  };
};
