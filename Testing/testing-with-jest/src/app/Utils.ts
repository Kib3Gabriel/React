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