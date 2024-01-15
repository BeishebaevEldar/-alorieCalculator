// // Исправьте код так, что бы в консоле не было ошибок и в документ браузера выводился верный результат. А именно список товаров с нумерацией, весом и общим весом всех товаров.
// Задание 1

// document.write("<h1>Список товаров</h1>")

// document.write("<ul>")

// let index = 0
// let totalWeight = 0

// // Товар 1
// {
//   index++
//   let weight =Number(prompt(`Введите вес товара ${index}`))
//   totalWeight = totalWeight + weight

//   document.write(`<li>
//                     Товар ${index}, вес: <strong>${weight}</strong> кг
//                   </li>`)
// }

// // Товар 2
// {
//   index++
//   let weight = Number(prompt(`Введите вес товара ${index}`))
//   totalWeight = totalWeight + weight

//   document.write(`<li>
//                     Товар ${index}, вес: <strong>${weight}</strong> кг
//                   </li>`)
// }

// // Товар 3
// {
//   index++
//   let weight = Number(prompt(`Введите вес товара ${index}`))
//   totalWeight = totalWeight + weight

//   document.write(`<li>
//                     Товар ${index}, вес: <strong>${weight}</strong> кг
//                   </li>`)
// }

// document.write("</ul>")

// document.write('<hr>')
// document.write(`<p>Общий вес товаров: ${totalWeight} кг</p>`)


// Сделайте программу вывода рецепта приготовления пельменей короче:

// Используйте более короткий способ вывода, объединив несколько команд document.write() в одну

// Определите повторяющийся фрагмент кода и создайте для этого фрагмента отдельную функцию с параметрами (аргументами). Вызывайте функцию с параметрами в нужной части программы.

// Задание 2

// document.write(`<div class="container">
//                 <h1 class="main-title">Приготовление пельменей</h1>`)

// let index = 0 // Счетчик этапов

// document.write('<ul class="list">')

// // Этап 1
// index++
// let className1 = ""    
// let className3 = "list__item_warning"
// let className6 = "list__item_finish"

// function copy(text1){
//     document.write(`<li class="list__item ${className1}">
//                 <span class="list__index">${index++}</span>
//                 <p class="list__text">${text1}</p></li>`)
// }
// function copy1(text1){
//     document.write(`<li class="list__item ${className3}">
//                 <span class="list__index">${index++}</span>
//                 <p class="list__text">${text1}</p></li>`)
// }
// function copy2(text1){
//     document.write(`<li class="list__item ${className6}">
//                 <span class="list__index">${index++}</span>
//                 <p class="list__text">${text1}</p></li>`)
// }

// copy("Налейте в кастрюлю воду")
// copy("Достаньте из холодильника пельмени")
// copy1("Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!")
// copy("Пос   и поперчите по вкусу")
// copy("Ждите готовности")
// copy2("Приятного аппетита!")

// document.write(`</ul>
//     </div>`)



// Данная программа выводит в документ характеристики компьютера. Сейчас в коде допущены логические ошибки. Исправьте программу так, что бы в документ выводился корректный результат.

// Функция, создающая HTML элемент (любой)

// Задание 3

// function createElement(elementName, classList, text) {
//     document.write(`<${elementName} class="${classList}">
//                       ${text}
//                     </${elementName}>`)
// }
//   // Функция, создающая заголовок h2
//   function createH2(classList, text) {
//     // Вызов функции createElement с параметрами, для создания элемента
//     createElement("h2", classList, text)
//   }
  
//   // Функция, создающая strong
//   function createStrong(classList, text) {
//     // Вызов функции createElement с параметрами, для создания элемента
//     createElement("strong", text, classList)
//   }
  
//   // Функция создания одной карточки
//   function createItem(title, value, className = "") {
//     document.write(`<li class="list__item ${className}">`)
//     createH2("list__title",title )
//     createStrong(`<h1>${value}</h1>`)
//     document.write('</li>')
//   }
  
//   document.write('<div class="container">')
//   document.write('<h1 class="main-title">Характеристики компьютера</h1>')
//   document.write('<ul class="list">')
//   // Создание элементов списка
// createItem("Процессор", "Apple M1")
// createItem("Оперативная память", "8 ГБ")
// createItem("SSD", "512 ГБ", "list__item_light")
// createItem("Диагональ экрана", "14")

//   document.write('</ul>')
//   document.write('</div>')
  
 // Это программа вывода списка учеников. Внимательно изучите код и добавьте возможность ввода имени и года рождения каждого ученика, используя клавиатуру, и команду prompt().

  // Задание 4

// let currentYear = 2024 // Текущий год

// // Функция выводит текст в документ
// function printText(text) {
//   document.write(text)
// }

// // Функция выводит в документ strong c текстом
// function printStrong(text) {
//   document.write(`<strong>${text}</strong>`)
// }

// // Функция вычисляет возраст, и выводит его в том месте, где ее вызывают (запускают)
// function printAge(year) {
//   document.write(`<strong>${currentYear - year} лет</strong>`)
// }

// // Функция выводит одного ученика, используя доступные функции
// function printStudent(index, name, year) {
//   printText("<p>")
//   printText(`${index}) `)
//   printStrong(name)
//   printText(`, год рождения: `)
//   printStrong(year)
//   printText(", возраст: ")
//   printAge(year)
//   printText("</p>")
// }

// document.write("<h1>Список учеников</h1>")

// let index = 0

// // Ученик 1
// {
//   index++
//   let studentName = prompt("Введите имя")
//   let studentYear = Number(prompt("Введите год рождения"))
//   printStudent(index, studentName, studentYear)
// }

// // Ученик 2
// {
//   index++
//   let studentName = prompt("Введите имя")
//   let studentYear = Number(prompt("Введите год рождения"))
//   printStudent(index, studentName, studentYear)
// }

// // Ученик 3
// {
//   index++
//   let studentName = prompt("Введите имя")
//   let studentYear = Number(prompt("Введите год рождения"))
//   printStudent(index, studentName, studentYear)
// }


  // Задание 5

// let index = 0
// let kall = 0
// document.write(`
//     <h1>Калькулятор калорийности блюда</h1>
// `)
// function printText(text){
//     document.write(text)
// }

// function strongText(text){
//     document.write(`<strong>${text}</strong>`)
// }
// function printFood (index,food,kk,kg,res){

//     printText(index)
//     printText(") ")
//     printText(food)
//     printText(", калорийность: ")
//     printText(kk)
//     printText('ккал, вес: ')     
//     printText(kg)
//     printText(', всего: ')
//     printText(res)
//     printText(' ккал')



// }
// function printRes(kall){
//     strongText(`Калорийность
//     всего блюда: ${kall} ккал
//     `)
// }

// document.write(`

// `)

// // function foodRes(res,res,res){
// //     let res1 = res+res+res
// //     document.write(res1)
// // }

// {
//     index++
//     let food = prompt('Введите название продукта ' + index)
//     let kk = Number(prompt('Количетсво килокалорий в грамме продукта ' +index))
//     let kg = Number(prompt('Введите вес продукта (гр) '+index))
//     let res = kk*kg
//     kall = kall + res
//     printFood(index,food,kk,kg,res)
//     printRes(kall)
// }

// {
//     index++
//     let food = prompt('Введите название продукта ' + index)
//     let kk = Number(prompt('Количетсво килокалорий в грамме продукта ' +index))
//     let kg = Number(prompt('Введите вес продукта (гр) '+index))
//     let res = kk*kg
//     printFood (index,food,kk,kg,res)
//     kall = kall + res
//     printRes(kall)
// }

// {
//     index++
//     let food = prompt('Введите название продукта ' + index)
//     let kk = Number(prompt('Количетсво килокалорий в грамме продукта ' +index))
//     let kg = Number(prompt('Введите вес продукта (гр) '+index))
//     let res = kk*kg
//     printFood (index,food,kk,kg,res)
//     kall = kall + res
//     printRes(kall)
// }

// Задание 5
//  2 вариант

let index = 1
let indexV2 = 1

let food1 = prompt('Введите название продукта ' + index)
let kk1 = Number(prompt('Количетсво килокалорий в грамме продукта ' +index))
let kg1 = Number(prompt('Введите вес продукта (гр) '+index))
let res1 = kk1*kg1

index++
let food2 = prompt('Введите название продукта ' + index)
let kk2 = Number(prompt('Количетсво килокалорий в грамме продукта ' +index))
let kg2 = Number(prompt('Введите вес продукта (гр) '+index))
let res2 = kk2*kg2

index++
let food3 = prompt('Введите название продукта ' + index)
let kk3 = Number(prompt('Количетсво килокалорий в грамме продукта ' +index))
let kg3 = Number(prompt('Введите вес продукта (гр) '+index))
let res3 = kk3*kg3

document.write(`
<div class='con'>
    <h1>Калькулятор калорийности блюда</h1>
    <p>${indexV2++}) ${food1}, калорийность: ${kk1} калл , вес: ${kg1} гр, всего:${res1} </p>    

    <p>${indexV2++}) ${food2}, калорийность: ${kk2} калл , вес: ${kg2} гр, всего:${res2} </p>

    <p>${indexV2++}) ${food3}, калорийность: ${kk3} калл , вес: ${kg3} гр, всего:${res3} </p>
    <p class='lastCh'> Калорийность всего блюда: ${res1+res2+res3} ккал </p>
</div>
`)