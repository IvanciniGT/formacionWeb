
function toogleLogout(){
    let confirmLogout = document.getElementById('confirm-logout');
    if(confirmLogout.style.display !== 'flex'){
        confirmLogout.style.display = 'flex';
    }else{
        confirmLogout.style.display = 'none';
    }
}

function logout(){
    toogleLogout();
    console.log('Acabas de hacer el Logout');
}
