// Result array to store output
let result = [];

// Iterate from 1 to 100
for (let x = 1; x < 101; x++) {
    // Check if x is divisible by 3 and 5
    if (x % 3 == 0, x % 5 == 0)
    {
        result.push("BIGBANG");
    }
    // Check if x is divisible by 3    
    else if (x % 3 == 0)
    {
        result.push("BIG");
    }
    // Check if x is divisible by 5
    else if (x % 5 == 0)
    {
        result.push("BANG");
    }
    // Store leftover numbers into result
    else
    {
        result.push(x);
    }
}

// Write result array into output.json
fs.writeFile("output.json", JSON.stringify(result), (err) => {
    // Handle any errors
    if (err) {
      console.error(err);
    } else {
      // Log a success message
      console.log("Successfully write into output.json");
    }
});