## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


fs.readFile("clean.txt", "utf8", (error, data) => {
  const fdata = data
    .split(" ") //it will givean array of all words splitted on " "
    .filter((word) => word.length > 0)
    .join(" ");
  console.log(fdata);
  fs.writeFile("cleaned.txt", fdata, "utf8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File has been written successfully.");
  });
  // let cleanedStr = str.replace(/\s+/g, ' ').trim();
});

