let array = [
    {
    name: 'xyz',
    age: 10
    },
    {
    name: 'ert',
    age: 4
    },
    {
    name: 'mvm',
    age: 45
    },
    {
    name: 'rere',
    age: 56
    },
    ];
    
    
    let arraytwo = [
    {
    name: 'fdcd',
    age: 32
    },
    {
    name: 'ter',
    age: 1
    },
    {
    name: 'fdfg',
    age: 3
    },
    {
    name: 'gfdgd',
    age: 15
    },
    ];
    let merge=[...array, ...arraytwo];
    console.log(merge);
    let combine = arraytwo.concat(array);
    console.log(combine);
    const sortByAge = combine.sort((a,b) => a.age-b.age);
    console.log(sortByAge);