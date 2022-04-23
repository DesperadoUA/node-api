const cash = {
    setData: (url, data) => _CASH[url] = data,
    getData: (url) => Object.assign( _CASH[url], {cash: true}),
    isCash: (url) =>  _CASH[url] ? true : false,
    destroy: () =>  _CASH.cash = {}
 }
 module.exports = cash