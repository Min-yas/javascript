const users = [
      { name: 'Alice', age: 22 },
      { name: 'Bob', age: 17 },
      { name: 'Charlie', age: 19 },
      { name: 'David', age: 15 }
    ];
    function legalage(users){
      return users.filter(_ => _.age > 18).map(_ => _.name)
    };
    
    console.log(legalage(users));