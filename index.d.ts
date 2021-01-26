interface obfuscationOptions {
    AddMemes?:boolean
    PreserveLineInfo?:boolean
    NoControlFlow?:boolean
    EncryptStrings?:boolean
    EncryptImportantStrings?:boolean
    NoBytecodeCompress?:boolean
    Uglify?:boolean
}

export function obfuscate(key:string,script:string,options:obfuscationOptions): {status:"failed"|"success",script?:string,reason?:string}