export const unusedKeys = [
    ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("").flatMap(c => [c, c.toUpperCase()]),
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+",
    "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ">", "/", "?", "~", "`",
    "Tab", "CapsLock","AltGraph", "Meta", "Escape", "", " ",
    "Insert", "Home", "End", "PageUp", "PageDown",
    "PrintScreen", "ScrollLock", "Pause", "ContextMenu",
    ...Array.from({ length: 12 }, (_, i) => `F${i + 1}`),
];