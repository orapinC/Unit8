

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(100000, 15, 4.5)).toEqual(764.99);
  expect(calculateMonthlyPayment(1000, 3, 5)).toEqual(29.97);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(500000, 30, 6)).toBeCloseTo(2997.75,2);
  expect(calculateMonthlyPayment(250000, 20, 3)).toBeCloseTo(1386.49,2);
});

/// etc
