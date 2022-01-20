function occurence(paragraph, word) {
    let a = paragraph.split(" ");
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (word == (a[i]))
            count++;
    }
    return count;
}
let paragraph = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love. ";
let word = "love";
console.log(occurence(paragraph, word));
