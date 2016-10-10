const prefix = __PROD__ ? 'http://104.224.139.200:3003' : '/api'
module.exports = {
    IP_ADDRESS: {
        url: `${prefix}/ip/ip2addr`,
        appKey: 'd50bed2f4503d59bf5ccaef7d9de405b'
    },
    MOBILE: {
        url: `${prefix}/mobile/get`,
        appKey: 'b2c81c2612ac13fb11caa3862f46ef5b'
    }
}
