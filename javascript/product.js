////////////////////Variables//////////////////////////////////////
const $=document
const productTitle=_q('.title')
const productDescription=_q('.description')
const productPrice=_q('.price')
const productImage=_q('.image-pic')

const productsArray=[
    {id:1,title:'SPORT SHOE 1',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam delectus deleniti doloremque dolores, dolorum eos fugiat harum laborum maiores mollitia nisi, quibusdam quis reiciendis rerum sapiente sint, totam vitae.', price:'53$',imageSrc:'images/1.png'},
    {id:2,title:'SPORT SHOE 2',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam delectus deleniti doloremque dolores, dolorum eos fugiat harum laborum maiores mollitia nisi, quibusdam quis reiciendis rerum sapiente sint, totam vitae.', price:'32$',imageSrc:'images/2.png'},
    {id:3,title:'SPORT SHOE 3',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam delectus deleniti doloremque dolores, dolorum eos fugiat harum laborum maiores mollitia nisi, quibusdam quis reiciendis rerum sapiente sint, totam vitae.', price:'110$',imageSrc:'images/3.png'},
    {id:4,title:'SPORT SHOE 4',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam delectus deleniti doloremque dolores, dolorum eos fugiat harum laborum maiores mollitia nisi, quibusdam quis reiciendis rerum sapiente sint, totam vitae.', price:'42$',imageSrc:'images/4.png'},
    {id:5,title:'SPORT SHOE 5',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam delectus deleniti doloremque dolores, dolorum eos fugiat harum laborum maiores mollitia nisi, quibusdam quis reiciendis rerum sapiente sint, totam vitae.', price:'89$',imageSrc:'images/5.png'},
    {id:6,title:'SPORT SHOE 6',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam delectus deleniti doloremque dolores, dolorum eos fugiat harum laborum maiores mollitia nisi, quibusdam quis reiciendis rerum sapiente sint, totam vitae.', price:'78$',imageSrc:'images/6.png'},
]
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
//////////////////////////////////////
let urlSearch=location.search
let urlSearchParam=new URLSearchParams(urlSearch)
let userIDParam=urlSearchParam.get('id')
let productInfo=productsArray.find(function (product) {
    return product.id===Number(userIDParam)
})
function productInformationLoad() {
    if(productInfo){
        productTitle.innerHTML=`${productInfo.title}`
        productDescription.innerHTML=`${productInfo.description}`
        productPrice.innerHTML=`${productInfo.price}`
        productImage.setAttribute('src',productInfo.imageSrc)
    }else{
        history.go(-2)
    }

}
function returnToLastPage() {
    history.back()
}
window.addEventListener('load',productInformationLoad)
