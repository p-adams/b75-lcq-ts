import { problemGroupings } from "../constants/problem_mappings.ts";

async function genProblemFiles() {
  Deno.chdir("../problems/");
  for (const problemGrouping of problemGroupings) {
    const path = `../problems/${problemGrouping.name}`;
    Deno.chdir(path);
    await Deno.writeTextFile("./index.txt", "Hello World!");
    Deno.chdir("../../problems");
  }
  function _genProblemTests() {}
}

genProblemFiles();
