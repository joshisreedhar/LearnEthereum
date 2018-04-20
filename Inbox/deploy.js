const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js');
const mnemonic = '';
const apiKey = '';
const HDWalletProvider = require('truffle-hdwallet-provider');
const provider = new HDWalletProvider(mnemonic, apiKey);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	const inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments:['hi']})
		.send({from:accounts[0], gas: '1000000'});
	console.log('contract deployed to ', inbox.options.address);
}

deploy();

