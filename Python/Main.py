import json

# Result array to store output
result = []

# Iterate from 1 to 100
for x in range(1,101):
    # Check if x is divisible by 3 and 5
    if x % 3 == 0 and x % 5 == 0:
        result.append("BIGBANG")
    # Check if x is divisible by 3
    elif x % 3 == 0:
        result.append("BIG")
    # Check if x is divisible by 5
    elif x % 5 == 0:
        result.append("BANG")
    # Store leftover numbers into result
    else:
        result.append(x)

# Write result array into output.json
with open("output.json", "w") as file:
    json.dump(result, file)
