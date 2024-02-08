const inputFilterFullName = document.querySelector('.filter__fio')
const inputFilterFaculty = document.querySelector('.filter__faculty')
const inputFilterBirth = document.querySelector('.filter__births')
const inputFilterStudy = document.querySelector('.filter__study')



let currentYear = new Date().getFullYear()
let currentDay = new Date().getDate()
let currentMonth = new Date().getMonth() + 1

if (currentDay < 10) {
  currentDay = `0${currentDay}`
}
if (currentMonth < 10) {
  currentMonth = `0${currentMonth}`
}
let currentDate = `${currentDay}.${currentMonth}.${currentYear}`


const headerBtn = document.querySelector('.header__Btn') // Вызывает окно для добавления студента
const wrapperForm = document.querySelector('.wrapperForm') // Оболочка всей формы
const form = document.querySelector('.form') // Основная форма

headerBtn.addEventListener('click', function () { // Открытие и закрытие окна "Добавление студента"
  wrapperForm.classList.add('open')
  form.classList.add('openForm')
  if (form.classList.contains('openForm')) {
    window.addEventListener('click', function (e) {
      if (e.target.className === 'wrapperForm open') {
        closeFormAddStudent()
      }
    })
  }
})

const btnReset = document.querySelector('.btn-reset')

btnReset.addEventListener('click', function () {

  inputFilterFullName.value = ''
  inputFilterFaculty.value = ''
  inputFilterBirth.value = ''
  inputFilterStudy.value = ''
  let allTableTitles = document.querySelectorAll('.table__title')

  for (table of allTableTitles) {
    if (table.className.split(' ')[2] == 'sortAz' || table.className.split(' ')[2] == 'sortZa') {
      table.classList.remove('sortAz')
      table.classList.remove('sortZa')
    }
  }

  renderStudentsTable(studentsList)
})

function closeFormAddStudent() {
  wrapperForm.classList.remove('open')
  form.classList.remove('openForm')
}
// Данные из формы
const inputFullName = document.querySelector('.form__fio') // Имя из формы
const inputFaculty = document.querySelector('.form__faculty') // Факультет из формы
const inputBirths = document.querySelector('.form__births') // Дата рождения из формы
const inputStudy = document.querySelector('.form__study') // Годы обучения из формы
const formBtn = document.querySelector('.form__btn') // Добавить студента из формы

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

const tableBody = document.querySelector('.table__body')

function getStudentItem(studentObj) { // Рендер одного студента

  const ageStudent = currentYear - studentObj.birthday.substr(-4);
  let kurs = currentYear - studentObj.studyStart

  const btnDeleteStudent = document.createElement('button')
  btnDeleteStudent.classList.add('delete')
  btnDeleteStudent.textContent = 'Удалить'

  const tr = document.createElement('tr')
  const thFIO = document.createElement('th')
  const thFacul = document.createElement('th')
  const thBirth = document.createElement('th')
  const thStudy = document.createElement('th')
  const thDelete = document.createElement('th')

  thFIO.classList.add('table__student')
  thFacul.classList.add('table__student')
  thBirth.classList.add('table__student')
  thStudy.classList.add('table__student')
  thDelete.classList.add('table__student')

  if (kurs > 4) {
    kurs = 'Завершил'
  } else if (kurs === 0) {
    kurs = `${kurs + 1} Курс`
  } else {
    kurs = `${kurs} Курс`
  }

  thFIO.innerHTML = `${studentObj.surname} ${studentObj.name} ${studentObj.lastname}`
  thFacul.innerHTML = `${studentObj.faculty}`
  thBirth.innerHTML = `${studentObj.birthday} (${ageStudent} лет)`
  thStudy.innerHTML = `${studentObj.studyStart}-${Number(studentObj.studyStart) + 4} (${kurs})`
  thDelete.append(btnDeleteStudent)

  btnDeleteStudent.id = studentObj.id

  tr.append(thFIO)
  tr.append(thFacul)
  tr.append(thBirth)
  tr.append(thStudy)
  tr.append(thDelete)

  tableBody.append(tr)

  btnDeleteStudent.addEventListener('click', async function(){

    const response = await fetch(`http://localhost:3000/api/students/${studentObj.id}`,{
      method: 'DELETE',
    });

    renderStudentsTable()

  })
}



// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.
let studentsList = []

async function renderStudentsTable(studentsArray) { // Рендер всех студентов
  tableBody.innerHTML = ''

  const response = await fetch('http://localhost:3000/api/students')
  const data = await response.json()

  let newArrStud = []

  if (studentsArray === undefined){
    studentsList = [...data]
    newArrStud = [...studentsList]
  } else {
    newArrStud = [...studentsArray]
  }

  if (inputFilterFaculty.value.trim() != '') {
    newArrStud = newArrStud.filter(function (oneStudent) {

      if (oneStudent.faculty.includes(inputFilterFaculty.value.trim())) {
        return true
      }
    })
  }
  if (inputFilterFullName.value.trim() != '') {
    newArrStud = newArrStud.filter(function (oneStudent) {
      const fullName = `${oneStudent.name} ${oneStudent.lastname} ${oneStudent.surname}`
      if (fullName.includes(inputFilterFullName.value.trim())) {
        return true
      }
    })
  }

  if (inputFilterStudy.value.trim() != '') {
    newArrStud = newArrStud.filter(function (oneStudent) {

      if (oneStudent.studyStart.includes(inputFilterStudy.value.trim())) {
        return true
      }
    })
  }
  if (inputFilterBirth.value.trim() != '') {

    newArrStud = newArrStud.filter(function (oneStudent) {

      userDate = inputFilterBirth.value
      userDate = userDate.split('-').join('')


      let dateYear = userDate.slice(0, 4)
      let dateMonth = userDate.slice(4, 6)
      let dateDay = userDate.slice(6, 8)


      let date = `${dateDay}.${dateMonth}.${dateYear}`

      if (date == oneStudent.birthday) {
        return true
      }
    })
  }



  for (student of newArrStud) {
    getStudentItem(student)
  }

}

renderStudentsTable()





// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

formBtn.addEventListener('click', async function (e) { // Добавление нового студента в массив
  e.preventDefault()

  if (tableBtnFacultet.className.split(' ')[2] == 'sortAz') {
    tableBtnFacultet.classList.remove('sortAz')
  }
  if (tableBtnFacultet.className.split(' ')[2] == 'sortZa') {
    tableBtnFacultet.classList.remove('sortZa')
  }

  let fullNameStudentArray = inputFullName.value.trim().split(' ')
  let facultyStudent = inputFaculty.value.trim()
  let studyStudent = inputStudy.value.trim()
  let birthsStudent = inputBirths.value.split('-').join('.')

  let studentYear = birthsStudent.substr(0, 4)
  let studentMonth = birthsStudent.substr(5, 2)
  let studentDay = birthsStudent.substr(8, 2)

  let birthsStudentDay = `${studentDay}.${studentMonth}.${studentYear}`


  let newDateCur = dateInNumber(currentDate)
  let newDateStud = dateInNumber(birthsStudentDay)

  if (fullNameStudentArray.length < 3 || inputFullName.value === '') {
    alert('Ошибка! Введите полностью Ф.И.О')
    return
  } else if (facultyStudent === '') {
    alert('Ошибка! Введите факультет')
    return
  } else if (birthsStudent === '') {
    alert('Ошибка! Введите дату рождения')
    return
  } else if (newDateStud - 19000101 < 0) {
    console.log(birthsStudentDay)
    alert('Ошибка! Слишком большой возраст')
    return
  } else if ((newDateCur - newDateStud) < 0) {
    alert('Ошибка! Вы еще не родились')
    return
  } else if (studyStudent === '') {
    alert('Ошибка! Введите годы обучения')
    return
  } else if (studyStudent < '2000') {
    alert('Ошибка! Годы обучения начинаются от 2000г')
    return
  } else if (studyStudent > currentYear) {
    alert('Ошибка! Вы из будущего?')
    return
  }


  const response = await fetch('http://localhost:3000/api/students',{
    method: 'POST',
    body: JSON.stringify({
      name: fullNameStudentArray[1],
      lastname: fullNameStudentArray[2],
      surname: fullNameStudentArray[0],
      faculty: facultyStudent,
      birthday: birthsStudentDay,
      studyStart: studyStudent
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const student = await response.json()

  renderStudentsTable()
  closeFormAddStudent()

  inputFullName.value = '';
  inputFaculty.value = '';
  inputStudy.value = '';
  inputBirths.value = '';
})

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

const tableBtnFacultet = document.querySelector('.table__btn-facultet')
const tableBtnFullName = document.querySelector('.table__btn-fullName')
const tableBtnDateOfBirths = document.querySelector('.table__btn-dateOfBirths')
const tableBtnDateOfStudy = document.querySelector('.table__btn-dateOfStudy')

if (inputFilterFullName.value == '' || inputFilterFaculty.value == '' || inputFilterBirth.value == '' || inputFilterStudy.value == '') {
  tableBtnFacultet.addEventListener('click', function (e) {
    if (tableBtnFacultet.className.split(' ')[2] == 'sortAz') {
      tableBtnFacultet.classList.remove(tableBtnFacultet.className.split(' ')[2])
      tableBtnFacultet.classList.add('sortZa')
    } else if (tableBtnFacultet.className.split(' ')[2] == 'sortZa') {
      tableBtnFacultet.classList.remove('sortZa')
      tableBtnFacultet.classList.add('sortAz')
    }
    if (tableBtnFacultet.className.split(' ')[2] === undefined) {
      tableBtnFacultet.classList.add('sortAz')
    }
    let item = e.target.getAttribute('data')

    sortStudents(studentsList, item)

  })
  tableBtnFullName.addEventListener('click', function (e) {
    if (tableBtnFullName.className.split(' ')[2] == 'sortAz') {
      tableBtnFullName.classList.remove(tableBtnFullName.className.split(' ')[2])
      tableBtnFullName.classList.add('sortZa')
    } else if (tableBtnFullName.className.split(' ')[2] == 'sortZa') {
      tableBtnFullName.classList.remove('sortZa')
      tableBtnFullName.classList.add('sortAz')
    }
    if (tableBtnFullName.className.split(' ')[2] === undefined) {
      tableBtnFullName.classList.add('sortAz')
    }
    let item = e.target.getAttribute('data')

    sortStudents(studentsList, item)

  })
  tableBtnDateOfBirths.addEventListener('click', function (e) {
    if (tableBtnDateOfBirths.className.split(' ')[2] == 'sortAz') {
      tableBtnDateOfBirths.classList.remove(tableBtnDateOfBirths.className.split(' ')[2])
      tableBtnDateOfBirths.classList.add('sortZa')
    } else if (tableBtnDateOfBirths.className.split(' ')[2] == 'sortZa') {
      tableBtnDateOfBirths.classList.remove('sortZa')
      tableBtnDateOfBirths.classList.add('sortAz')
    }
    if (tableBtnDateOfBirths.className.split(' ')[2] === undefined) {
      tableBtnDateOfBirths.classList.add('sortAz')
    }
    let item = e.target.getAttribute('data')

    sortStudents(studentsList, item)

  })
  tableBtnDateOfStudy.addEventListener('click', function (e) {
    if (tableBtnDateOfStudy.className.split(' ')[2] == 'sortAz') {
      tableBtnDateOfStudy.classList.remove(tableBtnDateOfStudy.className.split(' ')[2])
      tableBtnDateOfStudy.classList.add('sortZa')
    } else if (tableBtnDateOfStudy.className.split(' ')[2] == 'sortZa') {
      tableBtnDateOfStudy.classList.remove('sortZa')
      tableBtnDateOfStudy.classList.add('sortAz')
    }
    if (tableBtnDateOfStudy.className.split(' ')[2] === undefined) {
      tableBtnDateOfStudy.classList.add('sortAz')
    }

    let item = e.target.getAttribute('data')
    sortStudents(studentsList, item)
  })
}



function dateInNumber(date) {
  date = date.split('.').join('')
  dateYears = date.substr(-4)
  dateMouth = date.substr(2, 2)
  dateDay = date.substr(0, 2)
  date = dateYears + dateMouth + dateDay
  return date
}

function sortStudents(studentsArr, item) {
  let arrStudents = studentsArr.slice()

  if (item === 'faculty') {
    if (tableBtnFacultet.className.split(' ')[2] == 'sortAz') {
      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {
          if (arrStudents[j].faculty.toLowerCase() > arrStudents[j + 1].faculty.toLowerCase()) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    } else if (tableBtnFacultet.className.split(' ')[2] == 'sortZa') {
      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {
          if (arrStudents[j].faculty.toLowerCase() < arrStudents[j + 1].faculty.toLowerCase()) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    }
    renderStudentsTable(arrStudents)
  } else if (item === 'fullName') {
    if (tableBtnFullName.className.split(' ')[2] == 'sortAz') {
      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {
          if (arrStudents[j].lastname.toLowerCase() > arrStudents[j + 1].lastname.toLowerCase()) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    } else if (tableBtnFullName.className.split(' ')[2] == 'sortZa') {
      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {
          if (arrStudents[j].lastname.toLowerCase() < arrStudents[j + 1].lastname.toLowerCase()) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    }
    renderStudentsTable(arrStudents)
  } else if (item === 'dateOfBirths') {
    if (tableBtnDateOfBirths.className.split(' ')[2] == 'sortAz') {
      let newCurrentDate = dateInNumber(currentDate)
      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {


          let newStudentDate = dateInNumber(arrStudents[j].birthday)
          let newStudentDate2 = dateInNumber(arrStudents[j + 1].birthday)

          if (newStudentDate - newCurrentDate > newStudentDate2 - newCurrentDate) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    } else if (tableBtnDateOfBirths.className.split(' ')[2] == 'sortZa') {
      let newCurrentDate = dateInNumber(currentDate)
      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {
          let newStudentDate = dateInNumber(arrStudents[j].birthday)
          let newStudentDate2 = dateInNumber(arrStudents[j + 1].birthday)

          if (newStudentDate - newCurrentDate < newStudentDate2 - newCurrentDate) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    }
    renderStudentsTable(arrStudents)
  } else if (item === 'dateOfStudy') {
    if (tableBtnDateOfStudy.className.split(' ')[2] == 'sortAz') {

      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {

          if (arrStudents[j].studyStart < arrStudents[j + 1].studyStart) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    } else if (tableBtnDateOfStudy.className.split(' ')[2] == 'sortZa') {

      for (let i = 0; i < arrStudents.length; i++) {
        for (let j = 0; j < arrStudents.length - 1; j++) {


          if (arrStudents[j].studyStart > arrStudents[j + 1].studyStart) {
            let temp;
            temp = arrStudents[j];
            arrStudents[j] = arrStudents[j + 1]
            arrStudents[j + 1] = temp
          }
        }
      }
    }
    renderStudentsTable(arrStudents)
  }
}

function btnFilters(filtredStudentList) {
  tableBtnFacultet.addEventListener('click', function (e) {
    if (tableBtnFacultet.className.split(' ')[2] == 'sortAz') {
      tableBtnFacultet.classList.remove(tableBtnFacultet.className.split(' ')[2])
      tableBtnFacultet.classList.add('sortZa')
    } else if (tableBtnFacultet.className.split(' ')[2] == 'sortZa') {
      tableBtnFacultet.classList.remove('sortZa')
      tableBtnFacultet.classList.add('sortAz')
    }
    if (tableBtnFacultet.className.split(' ')[2] === undefined) {
      tableBtnFacultet.classList.add('sortAz')
    }
    let item = e.target.getAttribute('data')
    if (inputFilterFullName.value != '' || inputFilterFaculty.value != '' || inputFilterBirth.value != '' || inputFilterStudy.value != '') {
      sortStudents(filtredStudentList, item)
    }

  })
  tableBtnFullName.addEventListener('click', function (e) {
    if (tableBtnFullName.className.split(' ')[2] == 'sortAz') {
      tableBtnFullName.classList.remove(tableBtnFullName.className.split(' ')[2])
      tableBtnFullName.classList.add('sortZa')
    } else if (tableBtnFullName.className.split(' ')[2] == 'sortZa') {
      tableBtnFullName.classList.remove('sortZa')
      tableBtnFullName.classList.add('sortAz')
    }
    if (tableBtnFullName.className.split(' ')[2] === undefined) {
      tableBtnFullName.classList.add('sortAz')
    }
    let item = e.target.getAttribute('data')
    if (inputFilterFullName.value != '' || inputFilterFaculty.value != '' || inputFilterBirth.value != '' || inputFilterStudy.value != '') {
      sortStudents(filtredStudentList, item)
    }

  })
  tableBtnDateOfBirths.addEventListener('click', function (e) {
    if (tableBtnDateOfBirths.className.split(' ')[2] == 'sortAz') {
      tableBtnDateOfBirths.classList.remove(tableBtnDateOfBirths.className.split(' ')[2])
      tableBtnDateOfBirths.classList.add('sortZa')
    } else if (tableBtnDateOfBirths.className.split(' ')[2] == 'sortZa') {
      tableBtnDateOfBirths.classList.remove('sortZa')
      tableBtnDateOfBirths.classList.add('sortAz')
    }
    if (tableBtnDateOfBirths.className.split(' ')[2] === undefined) {
      tableBtnDateOfBirths.classList.add('sortAz')
    }
    let item = e.target.getAttribute('data')
    if (inputFilterFullName.value != '' || inputFilterFaculty.value != '' || inputFilterBirth.value != '' || inputFilterStudy.value != '') {
      sortStudents(filtredStudentList, item)
    }
  })
  tableBtnDateOfStudy.addEventListener('click', function (e) {
    if (tableBtnDateOfStudy.className.split(' ')[2] == 'sortAz') {
      tableBtnDateOfStudy.classList.remove(tableBtnDateOfStudy.className.split(' ')[2])
      tableBtnDateOfStudy.classList.add('sortZa')
    } else if (tableBtnDateOfStudy.className.split(' ')[2] == 'sortZa') {
      tableBtnDateOfStudy.classList.remove('sortZa')
      tableBtnDateOfStudy.classList.add('sortAz')
    }
    if (tableBtnDateOfStudy.className.split(' ')[2] === undefined) {
      tableBtnDateOfStudy.classList.add('sortAz')
    }

    let item = e.target.getAttribute('data')

    if (inputFilterFullName.value != '' || inputFilterFaculty.value != '' || inputFilterBirth.value != '' || inputFilterStudy.value != '') {
      sortStudents(filtredStudentList, item)
    }

  })
}

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.


inputFilterFaculty.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

inputFilterFullName.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

inputFilterBirth.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

inputFilterStudy.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})





