run_spec(__dirname, ["json"]);
// XXX TODO test trailing comma absent vs present in o*.json
run_spec(__dirname, ["json"], { trailingComma: "all" });
run_spec(__dirname, ["json5"]);
run_spec(__dirname, ["json5"], { trailingComma: "all" });
run_spec(__dirname, ["json-stringify"]);
