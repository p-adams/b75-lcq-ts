import { problemGroupings } from "../constants/problem_mappings.ts";

async function main() {
  try {
    Deno.chdir("../problems/");
    for (const problemGrouping of problemGroupings) {
      const path = `../problems/${problemGrouping.name}`;
      Deno.chdir(path);
      for (const _problem of problemGrouping.problems) {
        /**
         * TODO:
         *  create new directory from problem.name
         *  create index.ts and index.test.ts files in new directory
         *  include problem link top-level in each source file
         *  import {} from test library in each test file
         */

        await Deno.writeTextFile("./index.txt", "Hello World!");
      }

      Deno.chdir("../../problems");
    }
  } catch (error) {
    console.error(error);
  }
}

main();
