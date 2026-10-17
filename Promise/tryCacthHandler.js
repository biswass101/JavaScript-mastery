const tryCatchHandler = async (fnOrPromise) => {
  try {
    const result =
      typeof fnOrPromise === "function"
        ? await fnOrPromise()
        : await fnOrPromise;
    return [null, result];
  } catch (err) {
    return [err, null];
  }
};
