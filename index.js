"use strict";
// const promise = new Promise((resolve, reject) => {
//     reject('err');
//     resolve(9);
// })
// promise.then((res) => {
//     console.log(res)
// })
// promise.catch((err) => {
//     console.log(err)
// })
// promise.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })
// const promise = new Promise((resolve, reject) => {
//     reject('reject')
// })
// promise.catch((err) => {
//     console.log(err);
//     return new Promise((resolve, reject) => {
//         resolve('resolve')
//     })
// }).then((result) => {
//     console.log(result)
// })
// fetch('https://api.github.com/users/iliakan')
//     .then((res) => {
//         console.log('fetch', res);
//         return res.json()
//     }).then((v) => {
//         console.log('val', v)
//     })
// const pmAll = Promise.all([
//     new Promise((resolve) => resolve('res1')),
//     new Promise((resolve) => resolve('res2')),
//     new Promise((resolve,reject) => reject('err')),
//     new Promise((resolve) => resolve('res4'))
// ])
// pmAll.then((values) => {
//     console.log(values)
// }).catch((err)=>{
//     console.log(err)
// })
// let names = ['iliakan', 'remy', 'jeresig'];
// const requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
// const pmAll = Promise.all(requests);
// pmAll.then((responses) => {
//     responses.forEach(res => {
//         console.log(res);
//     });
//     return Promise.all(responses.map(r => r.json()))
// }).then((val) => {
//     console.log(val)
// })
// --------------------------------------------------------
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('text 1');
//     }, 1000)
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('text 2');
//     }, 3000)
// })
// async function asProm() {
//     let a: number | string = 5;
//     const result2 = await promise2;
//     a = 5 + "5";
//     let result1 = await promise1;
//     console.log( result2,result1)
//     console.log(a);
// }
// asProm()
// let c = 4;
// let d = 7;
// let g = c + d;
// console.log('g', g);
// ------------------------------------------------
// async function getErr() {
//     const promise = new Promise((resolve, reject) => {
//         reject('errorr')
//     })
//     try {
//         let res = await promise;
//         console.log('try', res);
//     } catch (err) {
//         console.log('err', err)
//     }
// }
// getErr()
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('second');
//     }, 10000)
// })
// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('first');
//     }, 5000)
// })
// function log() {
//     promise2.then((v) => {
//         console.log('v', v);
//         return promise
//     }).then(d => {
//         console.log('d', d);
//     })
// }
// log();
// -------------------------------------
// new binding
// class User {
//     age: number;
//     name: string;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const user = new User('Ono', 4545);
// --------------------------------------------
const obj = {
    age: 12,
    log: function () {
        console.log(this.age);
    }
};
const { log } = obj;
log();
