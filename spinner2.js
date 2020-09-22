
const spinPatterns = { 100: '\r|   ', 300: '\r/   ', 500: '\r-   ', 700: '\r\\   ', 900: '\r|   ', 1100: '\r-   ', 1300: '\r\\    ', 1500: '\r|   ' };

for (let timer in spinPatterns) {
  setTimeout(() => {
    process.stdout.write(spinPatterns[timer]);
  }, timer);

  if (+timer === 1500) {
    setTimeout(() => {
      console.log(" ");
    }, 1500);
  }
}
