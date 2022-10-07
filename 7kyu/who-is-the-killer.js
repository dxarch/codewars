// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'


function killer(suspectInfo, dead) {
    const filtered = Object
                     .values(suspectInfo)
                     .map(suspects => suspects.filter(it => dead.includes(it)));
    
    const killerIndex = filtered.findIndex(seenArr => seenArr.length === dead.length);
    
    return Object.keys(suspectInfo)[killerIndex];
  }