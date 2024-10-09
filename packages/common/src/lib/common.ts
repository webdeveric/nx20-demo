import { randomUUID } from 'node:crypto';

export function common(): string {
  return 'common';
}

export function helloWorld(): void {
  console.log('Hello, World!');
}

export function now(): number {
  return Date.now();
}

export function getId(): string {
  return randomUUID();
}

/**
 * Yield each item from the iterable forever.
 *
 * @example
 * ```ts
 * const users = ['Amy', 'Eric', 'Kobe', 'Andy'];
 * console.log(Array.from(forever(users).take(10)));
 * ```
 */
export function* forever<T>(items: Iterable<T>): Generator<T> {
  while (true) {
    yield* items;
  }
}

export function isBoolean(input: unknown): input is boolean {
  return typeof input === 'boolean';
}
