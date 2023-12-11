 {loginForm.addEventListener('submit', function (event)  { event.preventDefault();

        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;
        const idd = '1';
        const pd = '1';

        if (id === idd && password === pd) 
        { window.location.href = '메인.html';} 
        else {alert('로그인에 실패했습니다. 다시 시도하세요.');}
  });
};
