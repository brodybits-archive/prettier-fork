run_spec(__dirname, ["json"], { alignObjectProperties: true });
// XXX TODO test trailing comma absent vs present in o*.json
run_spec(__dirname, ["json"], {
  alignObjectProperties: true,
  trailingComma: "all"
});
run_spec(__dirname, ["json5"], { alignObjectProperties: true });
run_spec(__dirname, ["json5"], {
  alignObjectProperties: true,
  trailingComma: "all"
});
run_spec(__dirname, ["json-stringify"], { alignObjectProperties: true });
