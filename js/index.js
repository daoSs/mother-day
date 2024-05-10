var mySwiper = new Swiper('.swiper', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  on: {
    init: function (swiper) {
      //Swiper初始化了
      function timer1() {
        var start = new Date(2019, 2, 12); // 2015.7.2
        var t = new Date() - start;
        var h = ~~(t / 1000 / 60 / 60 % 24);
        if (h < 10) {
          h = "0" + h;
        }
        var m = ~~(t / 1000 / 60 % 60);
        if (m < 10) {
          m = "0" + m;
        }

        var s = ~~(t / 1000 % 60);
        if (s < 10) {
          s = "0" + s;
        }
        // var dE = document.getElementById('dE');
        // var dE = document.getElementById('dE');
        var dE = document.querySelectorAll('.js-de');
        if (dE) {
          for (const i in dE) {
            dE[i].textContent = ~~(t / 1000 / 60 / 60 / 24);
          }
        }

        var hE = document.querySelectorAll('.js-he');
        if (hE) {
          for (const i in hE) {
            hE[i].textContent = h;
          }
        }

        var mE = document.querySelectorAll('.js-me');
        if (mE) {
          for (const i in mE) {
            mE[i].textContent = m;
          }
        }

        var sE = document.querySelectorAll('.js-se');
        if (sE) {
          for (const i in sE) {
            sE[i].textContent = s;
          }
        }
      }
      timer1();
      setInterval(timer1, 1000);

      function timer2() {
        var start = new Date(2023, 10, 24, 9, 57); // 2015.7.2
        var t = new Date() - start;
        var h = ~~(t / 1000 / 60 / 60 % 24);
        if (h < 10) {
          h = "0" + h;
        }
        var m = ~~(t / 1000 / 60 % 60);
        if (m < 10) {
          m = "0" + m;
        }

        var s = ~~(t / 1000 % 60);
        if (s < 10) {
          s = "0" + s;
        }
        // var dE = document.getElementById('dE');
        // var dE = document.getElementById('dE');
        var dE = document.querySelectorAll('.js-de1');
        if (dE) {
          for (const i in dE) {
            dE[i].textContent = ~~(t / 1000 / 60 / 60 / 24);
          }
        }

        var hE = document.querySelectorAll('.js-he1');
        if (hE) {
          for (const i in hE) {
            hE[i].textContent = h;
          }
        }

        var mE = document.querySelectorAll('.js-me1');
        if (mE) {
          for (const i in mE) {
            mE[i].textContent = m;
          }
        }

        var sE = document.querySelectorAll('.js-se1');
        if (sE) {
          for (const i in sE) {
            sE[i].textContent = s;
          }
        }
      }
      timer2();
      setInterval(timer2, 1000);
    },
  },
})

