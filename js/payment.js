window.onload = function () {

  let storeName = document.getElementById('storeName');
  let storeorder = document.getElementById('storeorder');
  let storemoney = document.getElementById('storemoney');
  let creatImg = document.getElementById('creatImg');
  let downloadImg = document.getElementById('downloadImg');
  let order = document.querySelector('.order');
  let orderMoney = document.querySelector('.orderMoney');
  let h3 = document.querySelector('h3')

  // 生成图片
  creatImg.onclick = function () {
    let res1 = storeName.value;
    let res2 = storeorder.value;
    let res3 = storemoney.value;
    if (res1 == '' || res2 == '' || res3 == '') {
      alert('输入框内容不能为空！')
      return
    }

    h3.innerHTML = res1;
    order.innerHTML = '订单号：' + res2;
    orderMoney.innerHTML = res3;
    storeName.value = '';
    storeorder.value = '';
    storemoney.value = ''
  }
  // 下载图片
  downloadImg.onclick = function () {
    new html2canvas(document.getElementById('poster-box'), {
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      // canvas为转换后的Canvas对象

      let a = document.createElement('a');
      let res = canvas.toDataURL();
      a.href = canvas.toDataURL();
      a.download = '支付截图.png';
      a.click()
      console.log(res)
      // oImg.src = canvas.toDataURL(); // 导出图片
      // document.body.appendChild(a); // 将生成的图片添加到body
    });
  }
}