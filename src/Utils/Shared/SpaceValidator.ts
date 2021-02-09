export function SpaceValidator(str: string) {
  return str === null || str.match(/^ *$/) !== null;
}
