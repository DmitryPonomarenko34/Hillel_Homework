const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement([...array], value) {
    const newArray = [];

    for (const newArrayElement of array) {
        if (newArrayElement !== value) {
            newArray.push(newArrayElement);
        }
    }

    console.log(newArray);
    return newArray;
}

removeElement(array,4);