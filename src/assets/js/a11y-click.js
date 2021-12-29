/* eslint-disable */ import Vue from 'vue' Vue.directive('a11y-click', { bind:
function (el, binding, vnode) { el.addEventListener('keypress', (e) => {
console.log(binding) let key = e.which || e.keyCode if (key === 13 || key ===
32) { // 13 is enter, 32 is space bar e.preventDefault() binding.value() } }) }
}) // // // initialize the directive // export const a11yClick = { // bind (el,
binding, vnode) { // console.log(el) // console.log(binding.expression) //
console.log(vnode) // let myFunction = binding.expression //
el.addEventListener('click', myFunction) // // el.addEventListener('keypress',
function (e) { // // let key = e.which || e.keyCode // // if (key === 13 || key
=== 32) { // 13 is enter, 32 is space bar // // e.preventDefault() // //
binding.value() // // } // // }) // } // } // // // make it available globally
// Vue.directive('a11y-click', a11yClick)
