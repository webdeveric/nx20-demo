import { common } from '@webdeveric/nx20-demo-common';

export function demo(): string {
  console.log(common());

  return `demo-${common()}`;
}
