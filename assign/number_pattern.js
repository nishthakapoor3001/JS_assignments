for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 15 != 0) {
    console.log("hello");
  } else if (i % 5 == 0 && i % 15 != 0) {
    console.log("world");
  } 
    else if (i % 15 == 0) {
    console.log("Hello world");
  }
  else {
    console.log(i);
  }
}
