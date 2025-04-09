// Utility function that accepts a "count" as input.
export const getStyledCount = (count) => {
  // Create a fancy string by adding sparkles before and after the count.
  const styledCount = `✨ Count: ${count} ✨`;

  // Display the styled count on the console.
  console.log(styledCount);

  // Return the styled count so it can be used in other parts of your program.
  return styledCount;
};
