import * as fs from "fs";
import { getTextFromFirstArg } from "./util";

async function main(): Promise<Verb[]> {
    const data = await getTextFromFirstArg();
    const lines = data.split(/\r?\n/).map(line => line.split(/\t/).map(x => x !== "" ? x : null))
    const fieldDictionry = (lines.shift() as string[]).reduce((dictionary, x, i) => {
        dictionary[i] = x;
        return dictionary;
    }, {} as { [key: number]: string })
    return lines.map(x => {
        return x.reduce((ys, y, i) => {
            const key = fieldDictionry[i];
            ys[key] = (key === "番号") ? parseInt(y as string) : y;
            return ys;
        }, {} as { [key: string]: string | number | null }) as any as Verb;
    });
}

main()
    .then(console.log)
    .catch(console.error);

interface Verb {
    番号: number;
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
