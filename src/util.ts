import * as fs from "fs";

export async function getTextFromFirstArg(): Promise<string> {
    const path = process.argv[2];
    if (path === undefined)
        return Promise.reject(TypeError("argument path is required."));
    else
        return getFile(path);
}

export async function getFile(path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(path, "utf-8", (e, data) => {
            if (e)
                reject(e);
            else
                resolve(data);
        });
    })
}
