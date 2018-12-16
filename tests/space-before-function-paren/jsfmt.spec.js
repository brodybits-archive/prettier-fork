run_spec(__dirname, { spaceBeforeFunctionParen: true }, [
  "babylon",
  "typescript"
]);

run_spec(__dirname,  {}, [
  "babylon",
  "typescript"
]);
