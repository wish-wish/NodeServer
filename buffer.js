
function packetLength(data) {
    return data.readUInt32BE(0);
}

function toArrayBuffer(buffer) {
    var arrayBuffer = new Uint8Array(buffer).buffer;
    return arrayBuffer;
}

function toBuffer(ab) {
    var buffer = new Buffer.from(new Uint8Array(ab));
    return buffer;
}

function dataToBuffer(data) {
    var buffer = new Buffer.from(data.length);
    for (var i = 0; i < data.length; i++) {
        buffer.writeUInt8(data[i], i);
    }
    return buffer;
}