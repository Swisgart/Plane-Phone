const dropBtn = document.querySelector('.drop__btn').addEventListener('click', function(){
  document.querySelector('.header__drop').classList.add('header__drop--open')
})

const dropBtnClose = document.querySelector('.header__drop-btn').addEventListener('click', function(){
  document.querySelector('.header__drop').classList.remove('header__drop--open')
})