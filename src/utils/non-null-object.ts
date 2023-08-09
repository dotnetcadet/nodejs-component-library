export const nonNullObject = (obj: Object) => {
    let results: [string, any][] = []
    let entries = Object.entries(obj).filter(value => value[1] !== undefined && value[1] !== null)
    for (let i = 0; i < entries.length; i++) {
        let key = entries[i][0]
        let value = entries[i][1]
        if (typeof value === "object") {
            results.push([key, nonNullObject(value)])
        } else {
            results.push(entries[i])
        }
    }
    return Object.fromEntries(results)
}