describe("Statistics", function() {
  var stat;

  beforeAll(function() {
    stat = new Statistics();
  });

  var range = function(from, to) {
    var arr = [];
    var len = to - from + 1;
    for (var i = 0; i < len; i++, from++) {
      arr[i] = from;
    };
    return arr;
  };

  describe("mean", function(argument) {
    it("should work", function() {
      expect(function() {
        stat.mean();
      }).toThrow();
      expect(function() {
        stat.mean([]);
      }).toThrow();
      expect(stat.mean([0])).toBe(0);
      expect(stat.mean([1, 2])).toBe(1.5);
      expect(stat.mean(range(1, 100))).toBe(50.5);
      expect(stat.mean([2, 4711, 123, 65536, 29, 1000])).toBe(71401 / 6.0);
      expect(stat.mean([2.345, 47.11, 1.23, 65.536, 29.29, 1000.0001])).toBeCloseTo(190.918516, 5);
    });
  });

  describe("median", function(argument) {
    it("should work", function() {
      expect(function() {
        stat.median();
      }).toThrow();
      expect(function() {
        stat.median([]);
      }).toThrow();
      expect(stat.median([123])).toBe(123);
      expect(stat.median([1, 2])).toBe(1.5);
      expect(stat.median(range(1, 3, 2))).toBe(2);
      expect(stat.median(range(1, 100))).toBe(50.5);
      expect(stat.median([2, 4711, 123, 65536, 29, 1000])).toBe(561.5);
      expect(stat.median([2.345, 47.11, 1.23, 65.536, 29.29, 1000.0001])).toBe(38.2);
    });
  });

  describe("variance", function(argument) {
    it("should work", function() {
      expect(function() {
        stat.variance();
      }).toThrow();
      expect(function() {
        stat.variance([]);
      }).toThrow();
      expect(stat.variance([123])).toBe(0);
      expect(stat.variance([1, 2])).toBe(0.25);
      expect(stat.variance([9, 29])).toBe(100);
      expect(stat.variance([3, 9, 12])).toBe(14);
      expect(stat.variance(range(1, 100))).toBe(833.25);
      expect(stat.variance([2, 4711, 123, 65536, 29, 1000])).toBeCloseTo(578082165.138889, 5);
      expect(stat.variance([2.345, 47.11, 1.23, 65.536, 29.29, 1000.0001])).toBeCloseTo(131446.692564, 5);
    });
  });

  describe("deviation", function(argument) {
    it("should work", function() {
      expect(function() {
        stat.deviation();
      }).toThrow();
      expect(function() {
        stat.deviation([]);
      }).toThrow();
      expect(stat.deviation([123])).toBe(0);
      expect(stat.deviation([1, 2])).toBe(0.5);
      expect(stat.deviation([9, 29])).toBe(10);
      expect(stat.deviation([3, 9, 12])).toBe(Math.sqrt(14));
      expect(stat.deviation(range(1, 100))).toBe(Math.sqrt(833.25));
      expect(stat.deviation([2, 4711, 123, 65536, 29, 1000])).toBeCloseTo(24043.339309, 5);
      expect(stat.deviation([2.345, 47.11, 1.23, 65.536, 29.29, 1000.0001])).toBeCloseTo(362.555779, 5);
    });
  });
});