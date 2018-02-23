export default (list, size) => list.reduce((r, v) =>
  (!r.length || r[r.length - 1].length === size ?
    r.push([v]) : r[r.length - 1].push(v)) && r
, []);

