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
    const lines = data.split(/\r?\n/).map(line => line.split(/\t/))
    const fields = lines.shift() as string[];
    return fields.join("\n");
}

main()
    .then(console.log)
    .catch(console.error);
