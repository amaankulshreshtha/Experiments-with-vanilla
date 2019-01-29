const value = 10;

function test() {
  const value2 = 20;
  console.log(value2);
}

false && typeof value === "number" ? test() : value;
