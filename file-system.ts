import * as fs from "node:fs/promises";

type Methods = "read" | "write" | "delete";

const method = process.argv[2] as Methods;
const fileName = process.argv[3];
const content = process.argv[4];

const manageFile = async (
  method: Methods,
  fileName: string,
  content?: string
) => {
  try {
    if (!method && !fileName) {
      throw Error("Missing two arguments");
    }
    if (method === "read") {
      const data = await fs.readFile(fileName);
      console.log("File read successfully");
      console.log(`Data: ${data}`);
    } else if (method === "write") {
      if (!content) {
        throw Error("Content cannot be empty");
      }
      await fs.writeFile(fileName, content);
      console.log("Data written successfully");
    } else if (method === "delete") {
      await fs.rm(fileName);
      console.log("FIle deleted successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

manageFile(method, fileName, content);
