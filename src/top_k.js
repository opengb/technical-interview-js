MAX_INPUTS = 10000;
// Limit max size of obj
// TODO: make configurable

class Frequency {
  constructor(it) {
    this._it = 1; this._count = 1;
  }

  bumpFrequency() {
    this._count++
  }

  valueOf() { return this._count; }
}

function size_dict(d){c=0; for (i in d) ++c; return c}

class TopK {
  constructor(k) {
    this._counts = {};
    this._k = k;
  }

  countObj(o) {
    if (this._counts[o] === undefined) {
      this._counts[o] = new Frequency(o);
    }
    this._counts[o].bumpFrequency();

    if (size_dict(this._counts[o]) > Math.min(this._k * 2, MAX_INPUTS)) {
      this._truncate();
    }
  }

  getTopK() {
    var out = [];
    var _counts = this._counts;
    let values = Object.keys(this._counts).map(function (key) {
      return [key, _counts[key]];
    }).sort((a,b) => { return (a[1] < b[1]); });
    while(true) {
      var item = values.pop();
      out.unshift([item[0], item[1]]);
      if (out.length == this._k) { break; }  
    }
    console.log(out);
  }

  _truncate() {
    var items = 0;
    newCounts = {};

    for (const x in Object.keys(this._counts).map(function (key) {
      return [key, _counts[key]];
    }).sort((a,b) => { return (a[1] < b[1]); })) {
      newCounts[x[0]] = x[1];
      items++;
      if (this._k * 2 <= items) { break; }
    }
  }
}

if (require.main === module) {

  topk = new TopK(10);
  for (const i in [...Array(100).keys()]) {
    var s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random()*62|0);
    topk.countObj(s);
  }
  topk.getTopK();
}
