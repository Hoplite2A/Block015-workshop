// Step 2: Enter Survey Properties and Values:
const testCase = {
  firstName: "jake",
  lastName: "smith",
  email: "jaeksmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: ["medium"],
  favoriteStore: "Target",
  firstVisit: false,
};

// Step 3: Replace Incrrect values with Correct values:
testCase.email = "Jak3Smith1992@email.com";
testCase.phone = 3195551234;
testCase.zipCode = "63132";
testCase.favoriteFlavors = ["coffee", "strawberry", "matcha"];

// Step 4(a): Remove Property/Value pairs from Object deemed not important:
delete testCase.zipCode;
delete testCase.favoriteStore;

// Step 4(b): Add the Property/Value pairsto Object deemed to be important:
testCase.toppings = ["chocolate spinkles", "wafer straws", "gummy bears"];
testCase.futureFlavors = ["mango"];
testCase.todaysPurchaseCost = 5.32;

// console.log(testCase);
console.log(Object.keys(testCase));
