export function toPath(item) {
    let finalString = '/' + item.toLowerCase().replaceAll(" ", "-");
    return finalString;
}