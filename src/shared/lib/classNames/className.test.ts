import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some')).toBe('some');
  });

  test('with additional param', () => {
  const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    expect(classNames(
      'someClass', {hovered: true, scrollable: true}, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered scrollable');
  })

  test('with mods false', () => {
    expect(classNames(
      'someClass', {hovered: true, scrollable: true, clear: false}, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered scrollable');
  })

  test('with mods undefined', () => {
    expect(classNames(
      'someClass', {hovered: true, scrollable: true, clear: undefined}, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered scrollable');
  })
});
