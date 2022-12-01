import { readFile, writeFile, appendFile } from 'fs/promises';

export function read(path: string) { return readFile(path, "utf-8"); }

export function write(path: string, content: string, mode = "truncate") {

  switch (mode) {

    case "truncate": // default if mode unspecified
      return writeFile(path, content);

    case "append":
    default:
      return appendFile(path, content);

  }

}