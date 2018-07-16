import * as fs from "fs";
import { getTextFromFirstArg } from "./util";

// const fields = [
//     "番号",
//     "区分",
//     "基本形",
//     "意味",
//     "語幹",
//     "現在丁寧体",
//     "現在会話体",
//     "現在常体",
//     "現在連体形",
//     "連用形",
//     "過去語幹",
//     "過去丁寧体",
//     "過去会話体",
//     "過去常体",
//     "過去連体形",
//     "回想",
//     "未来連体形",
// ]

async function main(): Promise<string> {
    const data = await getTextFromFirstArg();
    const lines = data.split(/\r?\n/).map(line => line.split(/\t/).map(x => x !== "" ? x : null))
    const fields = lines.shift() as string[];    
    return fields.join("\n");
}


main()
    .then(console.log)
    .catch(console.error);

interface Verb {
    番号: string;
    区分: string;
    基本形: string;
    意味: string;
    語幹: string;
    現在丁寧体: string;
    現在会話体: string;
    現在常体: string;
    現在連体形: string;
    連用形: string;
    過去語幹: string;
    過去丁寧体: string;
    過去会話体: string;
    過去常体: string;
    過去連体形: string;
    回想: string;
    未来連体形: string;
}
