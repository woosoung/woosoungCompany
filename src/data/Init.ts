export function comma(str: string) {
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

export function uncomma(str: string) {
    return str.replace(/[^\d]+/g, "");
}

export function onlyNumber(str: string) {
    return str.replace(/[^0-9]/g, "");
}
