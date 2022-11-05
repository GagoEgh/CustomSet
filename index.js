"use strict";
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
var _a;
class CustomArray {
    constructor(arr = []) {
        this._state = {};
        this.size = 0;
        this[_a] = () => {
            let done = false;
            let index = 0;
            const keys = Object.keys(this._state);
            return {
                next: () => {
                    const key = keys[index];
                    if (index === keys.length) {
                        this.size = keys.length;
                        done = true;
                    }
                    index++;
                    return {
                        value: this._state[key],
                        done
                    };
                }
            };
        };
        if (arr?.length > 0) {
            for (let i of arr) {
                this.add(i);
            }
        }
    }
    add(item) {
        this._state[JSON.stringify(item)] = item;
        this.size++;
    }
    delete(item) {
        let key = JSON.stringify(item);
        if (key in this._state) {
            delete this._state[key];
            this.size--;
            return true;
        }
        return false;
    }
    has(item) {
        let key = JSON.stringify(item);
        if (key in this._state) {
            return true;
        }
        return false;
    }
    clear() {
        const keys = Object.keys(this._state);
        for (let key in this._state) {
            delete this._state[key];
        }
        this.size = 0;
    }
}
_a = Symbol.iterator;
const arg = new CustomArray([3, 4, 5, 6, 3, 6]);
arg.add(56);
const customArray = new CustomArray();
customArray.add('Barev');
customArray.add('Barev 1');
customArray.add('Barev 2');
customArray.add('Barev 1');
customArray.add('Barev 4');
