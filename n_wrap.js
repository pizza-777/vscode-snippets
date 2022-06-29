//multiline to singleline
const multiline = 
`TvmCell payload = tvm.encodeBody(
    DestContract.funcName,
    param1,
    param2
);
TvmCell message = tvm.buildExtMsg({
    dest: userWallet,
    time: 0,
    expire: 0,
    call: {
        IWallet.sendTransaction,
        destContractAddress,
        amount,
        false,
        3,
        payload
    },
    sign: true,
    pubkey: pubkey,
    callbackId: tvm.functionId(depositCallback),
    onErrorId: tvm.functionId(errorCallback)
});`
;

console.log(JSON.stringify(multiline.split(/\n/g), 0, 4));