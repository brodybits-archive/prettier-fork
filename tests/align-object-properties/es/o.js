o = {
  shorthand,
  [name]: 'value',
  2:3,
  "k-2":2,
  keyasdf:3
}

o = {
  shorthand,
  [namelonglonglong]: 'value',
  2:3,
  "k-2":2,
  keyasdf:3
}

o = {
  extraLongShorthand,
  [name]: 'value',
  2:3,
  "k-2":2,
  keyasdf:3
}

// Ensure this object does not get extra padding:
o = { [name]: 'value', 2:3, "k-2":2, keyasdf:3 }

// Ensure this also does not get extra padding:
o = { [name]: 'value', 2:3, "k-2":2,
  keyasdf:3
}

// Ensure this one *does* get the padding:
o = { // with a comment here
  [name]: 'value',
  2:3,
  "k-2":2,
  keyasdf:3
}

o = {
  [namelonglonglong]: 'value',
  2:3, "k-2":2, keyasdf:3
}

o = { [namelonglonglong]: 'value', 2:3, "k-2":2, keyasdf:3 }

o = {
  [name]: 'value',
  2:3,
  "k-2":2,
  nested: {
    a:1,
    b:2
  },
  keyasdf:3
}

o = {
  [name]: 'value',
  2:3,
  "k-2":2,
  nested: {a:1,
    b:2},
  keyasdf:3
}
