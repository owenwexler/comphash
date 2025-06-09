import { describe, it, expect } from 'vitest';

const { comphash } = require('./comphash_func');

describe('comphash', () => {
  it('returns true for two identical hashes', () => {
    expect(comphash('9u8rhjf9u3hf938h8h899', '9u8rhjf9u3hf938h8h899')).toBe(true);
  });

  it('returns false for different hashes of the same length', () => {
    expect(comphash('9u8rhjf9u3hf938h8h899', '9u8rhjf9u3hf938h8h898')).toBe(false);
  });

  it('returns false for hashes of different lengths', () => {
    expect(comphash('9ru8eh9e8rhg9u8rhge9rhv9e8rhgve8hg8eh', '9ru8eh9e8rhg9u8rhge9rhv9e8rhgve8hg8ehi84f8hjfi8h89h')).toBe(false);
  });

  it('returns true for two empty strings', () => {
    expect(comphash('', '')).toBe(true);
  });

  it('returns false when only one hash is empty', () => {
    expect(comphash('', '90e8frjg98rj9e48gjh9i8')).toBe(false);
    expect(comphash('90e8frjg98rj9e48gjh9i8', '')).toBe(false);
  });

  it('is case-sensitive', () => {
    expect(comphash('90e8frjg98rj9e48gjh9i8', '90E8FRJG98RJ9E48GJH9I8')).toBe(false);
  });

  it('handles special characters correctly', () => {
    expect(comphash('@#$%^&*()', '@#$%^&*()')).toBe(true);
    expect(comphash('@#$%^&*()', '@#$%^&*(')).toBe(false);
  });

  it('handles Unicode characters correctly', () => {
    expect(comphash('哈希值', '哈希值')).toBe(true);
    expect(comphash('哈希值', '哈希值1')).toBe(false);
  });

  it('handles long hashes correctly', () => {
    const long1 = 'a'.repeat(10000);
    const long2 = 'a'.repeat(10000);
    const long3 = 'a'.repeat(9999) + 'b';
    expect(comphash(long1, long2)).toBe(true);
    expect(comphash(long1, long3)).toBe(false);
  });

  it('fails gracefully on non-string inputs (will throw due to .length)', () => {
    expect(comphash(null, 'oriuj30rvhefhjv98rfghje98rhjfo9e8h')).toBe(false);
    expect(comphash('oriuj30rvhefhjv98rfghje98rhjfo9e8h', undefined)).toBe(false);
    expect(comphash(123, 123)).toBe(false);
    expect(comphash({}, {})).toBe(false);
    expect(comphash([], [])).toBe(false);
  });
});
