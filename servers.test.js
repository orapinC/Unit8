describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers if serverName is empty on SubmitServerInfo()', function(){
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });
  
  // Jasmine message :Error during loading: Script error.
  //
   it('should update #serverTable-tr-td on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    let serverInfo = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverInfo.length).toEqual(3);
    expect(serverInfo[0].innerText).toEqual('Alice');
    expect(serverInfo[1].innerText).toEqual('$0.00');
    expect(serverInfo[2].innerText).toEqual('X');
  })
  
 

 /*===================================================================================
 // clear up all the effect of 'serverNameInput.value = 'Alice'' setted at beforeEach
   ===================================================================================*/
  afterEach(function() {
    // teardown logic
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';

  });

});
