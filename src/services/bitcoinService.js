import axios from 'axios';
import { storageService } from './storageService.js'

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConvertRate
  // getConfirmedTransactions
}

async function getRate() {
  if (storageService.load('bitcoinDB')) return storageService.load('bitcoinDB');
  var res = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  // var res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
  res = res.data;
  res = res.bpi;
  res = res.USD;
  storageService.store('bitcoinDB', res.rate);
  return res.rate;
}

async function getConvertRate() {
  if (storageService.load('bitcoinConvertDB')) return storageService.load('bitcoinConvertDB');
  var res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
  res = res.data;
  storageService.store('bitcoinConvertDB', res);
  return res;
}

async function getMarketPrice() {
  if (storageService.load('marketDB')) return storageService.load('marketDB');
  var res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`);
  res = res.data;
  storageService.store('marketDB', res);
  return res;
}