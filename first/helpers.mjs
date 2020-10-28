const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return dummyPromise;
};

// Carefully add exports, only if really needed
export default connectToDatabase;
