describe("payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 15;
    });
  
    it('should add a curPayment object to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('15');
      expect(allPayments['payment1'].tipPercent).toEqual(15);
    });

    it('should not add a curPayment object to allPayments on submitPaymentInfo()', function () {
      billAmtInput.value = '';
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
    });
 
    it('should not add a curPayment object to allPayments on submitPaymentInfo()', function () {
      tipAmtInput.value = '';
      submitPaymentInfo();
        
      expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should return curPayment even if tipAmt is 0 if billAmt is positive on createCurPayment()', function(){
      billAmtInput.value = 20;
      tipAmtInput.value = 0;
      createCurPayment();

      let curPayment = createCurPayment();
      expect(Object.keys(curPayment).length).toEqual(3);
      expect(curPayment.billAmt).toEqual('20');
      expect(curPayment.tipAmt).toEqual('0');
      expect(curPayment.tipPercent).toEqual(0);
    });

    it('should return undefined if billAmt is negative, regardless of tipAmt on createCurPayment()', function(){
      billAmtInput.value = -20;
      createCurPayment();
      
      let curPayment = createCurPayment();
      expect(curPayment).toEqual(undefined);
      })
   
    it('should create table row element and pass to appendTd on appendPaymentTable()', function () {
      let curPayment = createCurPayment();
      appendPaymentTable(curPayment);

      let allTd = document.querySelectorAll('#paymentTable tbody tr td')
      expect(allTd.length).toEqual(4);
      expect(allTd[0].innerText).toEqual('$100');
      expect(allTd[1].innerText).toEqual('$15');
      expect(allTd[2].innerText).toEqual('15%');
      expect(allTd[3].innerText).toEqual('X');
    });
    /*// why this section not working
    it('should create table row element and pass to appendTd with Calculated sum of all payment on updateSummary()', function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 15;
      updateSummary();
  
      let allTdSum = document.querySelectorAll('#summaryTable tbody tr td')
        expect(allTdSum.length).toEqual(3);
        expect(allTdSum[0].innerHTML).toEqual('$100');
        expect(allTdSum[1].innerHTML).toEqual('$15');
        expect(allTdSum[2].innerHTML).toEqual('15%');
       
      });
      */
   // clear up all the effect of 'serverNameInput.value = 'Alice'' setted at beforeEach
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentId = 0;
      allPayments = {};
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
    });
    
  });
  