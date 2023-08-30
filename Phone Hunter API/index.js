const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const datas = await res.json();
    const phones = datas.data;

    for (const phone of phones) {
        console.log(phone);
    }
}
loadPhone();