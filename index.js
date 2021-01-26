const fetch = require("node-fetch");

async function obfuscate(script, options){
    const body = {
        "script": script,
        "options": {
            "AddMemes": options.AddMemes || false,
            "PreserveLineInfo": options.PreserveLineInfo || false,
            "NoControlFlow": options.NoControlFlow || true,
            "EncryptStrings": options.EncryptStrings || false,
            "EncryptImportantStrings": options.EncryptImportantStrings || false,
            "NoBytecodeCompress": options.NoBytecodeCompress || false,
            "Uglify": options.Uglify || false
        }
    }

    const a = await fetch('https://obfuscator.aztupscripts.xyz/api/v1/obfuscate',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const a_json = await a.json();
    return a_json;
}


module.exports = {obfuscate: obfuscate}
