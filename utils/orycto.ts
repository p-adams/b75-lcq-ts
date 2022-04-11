export async function connect(url: string) {
  const document = await fetch(url);
  return document;
}
