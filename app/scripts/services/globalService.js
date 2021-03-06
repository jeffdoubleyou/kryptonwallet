'use strict';
var globalService = function($http, $httpParamSerializerJQLike) {
    globalFuncs.checkAndRedirectHTTPS();
    ajaxReq.http = $http;
    ajaxReq.postSerializer = $httpParamSerializerJQLike;

  var tabs = {
    generateWallet: {
      id: 0,
      name: "Generate Wallet",
      url: "generate-wallet",
      mew: true,
      cx: false
    },
    bulkGenerate: {
      id: 1,
      name: "Bulk Generate",
      url: "bulk-generate",
      mew: false,
      cx: false
    },
    myWallet: {
      id: 2,
      name: "My Wallets",
      url: "my-wallet",
      mew: false,
      cx: true
    },
    addWallet: {
      id: 3,
      name: "Add Wallet",
      url: "add-wallet",
      mew: false,
      cx: true
    },
    sendTransaction: {
      id: 4,
      name: "Send Krypton",
      url: "send-transaction",
      mew: true,
      cx: true
    },
    offlineTransaction: {
      id: 5,
      name: "Send Offline",
      url:"offline-transaction",
      mew: true,
      cx: false
    },
    viewWalletInfo: {
      id: 6,
      name: "View Wallet Info",
      url: "view-wallet-info",
      mew: true,
      cx: false
    },
    help: {
      id: 7,
      name: "Help",
      url: "help",
      mew: true,
      cx: true
    }
  };
  var currentTab = 0;
  if(typeof chrome != 'undefined')
    currentTab = chrome.windows === undefined ? 0 : 3;
  return {
    tabs: tabs,
    currentTab: currentTab
  };
};
module.exports = globalService;


