describe("helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 15;
      submitPaymentInfo();
    });
  
    it('should accepts tipAmt billAmt and tipPercent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
      expect(sumPaymentTotal('tipAmt')).toEqual(15);
      expect(sumPaymentTotal('tipPercent')).toEqual(15);

      billAmtInput.value = 300;
      tipAmtInput.value = 10;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(400);
      expect(sumPaymentTotal('tipAmt')).toEqual(25);
      // total tipPercent = 15% + 3% = 18%
      expect(sumPaymentTotal('tipPercent')).toEqual(18);

    });

    it('should appends a newly created td element on appendTd(tr,value)', function(){
      
      let newTr = document.createElement('tr');
      appendTd(newTr,"Jasmine Testing");
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerText).toEqual('Jasmine Testing');

    });

    it('should generate td and append to tr on appendDeleteBtn(tr)', function(){
      let newTr = document.createElement('tr');

      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    //  expect(calculateTipPercent(allPayments.billAmt,allPayment.tipAmt)).toEqual(15);
    //});

    // clear up
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentId = 0;
      allPayments = {};
      serverTbody.innerHTML = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
    });

  });
  