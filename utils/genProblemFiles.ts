import { problemGroupings } from "../constants/problem_mappings.ts";

async function main() {
  try {
    Deno.chdir("../problems/");
    for (const problemGrouping of problemGroupings) {
      const path = `../problems/${problemGrouping.name}`;
      Deno.chdir(path);
      await Deno.writeTextFile("./index.txt", "Hello World!");
      Deno.chdir("../../problems");
    }
  } catch (error) {
    console.error(error);
  }
}

main();
