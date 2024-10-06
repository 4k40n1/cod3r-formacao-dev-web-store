export default class Slug {
  exec(name: string): string {
    return name
      .toLowerCase()
      .split(' ')
      .reduce((previous: string, current: string): string => {
        return current === '' ? previous : `${previous}_${current}`;
      }, '@')
      .replace('@_', '');
  }
}
