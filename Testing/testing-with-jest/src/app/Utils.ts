export function toUpper(args:string){
    return args.toUpperCase()
}


export type stringInfo={
    lowerCase:string;
    UpperCase:string;
    length:number;
    characters:string[];
    extraInfo:object | undefined
}


export function getStringInfo(args:string) :stringInfo{
    return {
        lowerCase:args.toLocaleLowerCase(),
        UpperCase:args.toUpperCase(),
        length:args.length,
        characters:Array.from(args),
        extraInfo:{}
    }
}


export function funcUpper(str:string):string{
    return str.toUpperCase()
}

// Error
export class StringUtils{
    public toUpperCase(args:string){
        // check the error
        if(!args){
            throw new Error("Invalid arguments")
        }
        return args.toUpperCase()
    }
}