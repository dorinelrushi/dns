var dns = require('dns');

var w3 = dns.lookup('www.youtube.com',function(err,address,family){
    console.log(address)
})