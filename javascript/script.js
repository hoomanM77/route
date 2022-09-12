////////////////////Variables//////////////////////////////////////
const $=document
let productCardFragment=$.createDocumentFragment()
let productContainer=_q('.product-container')
let newProductDivTag;
const productsArray=[
    {id:1,title:'SPORT SHOE 1',description:'Lorem ipsum dolor sit amet, elit animi assumenda dicta.', price:'53$',imageSrc:'images/1.png'},
    {id:2,title:'SPORT SHOE 2',description:'Lorem ipsum dolor sit amet, elit animi assumenda dicta.', price:'32$',imageSrc:'images/2.png'},
    {id:3,title:'SPORT SHOE 3',description:'Lorem ipsum dolor sit amet, elit animi assumenda dicta.', price:'110$',imageSrc:'images/3.png'},
    {id:4,title:'SPORT SHOE 4',description:'Lorem ipsum dolor sit amet, elit animi assumenda dicta.', price:'42$',imageSrc:'images/4.png'},
    {id:5,title:'SPORT SHOE 5',description:'Lorem ipsum dolor sit amet, elit animi assumenda dicta.', price:'89$',imageSrc:'images/5.png'},
    {id:6,title:'SPORT SHOE 6',description:'Lorem ipsum dolor sit amet, elit animi assumenda dicta.', price:'78$',imageSrc:'images/6.png'},
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
function productCardPrepare() {
    productsArray.forEach(function (product) {
        productCardGenerator(product.id,product.title,product.description,product.price,product.imageSrc)
    })
    productContainer.append(productCardFragment)
}
function productCardGenerator(id,title,description,price,imgSrc) {
    newProductDivTag=$.createElement('div')
    newProductDivTag.className='product-card p-3'
    newProductDivTag.insertAdjacentHTML('beforeend','\n' +
        '                <div class="product-card-header">\n' +
        '                    <h4 class="fw-bold m-0 lh-2">\n' +
        '                        '+title+' \n' +
        '                    </h4>\n' +
        '                    <p class="m-0 lh-1 text-muted">\n' +
        '                       '+description+'\n' +
        '                    </p>\n' +
        '                </div>\n' +
        '                <div class="product-card-body">\n' +
        '                    <img src="'+imgSrc+'"  alt="">\n' +
        '                    <div class="d-flex justify-content-between align-items-center">\n' +
        '                        <span class="price text-info fs-4">\n' +
        '                            '+price+'\n' +
        '                        </span>\n' +
        '                        <a href="product.html?id='+id+'"  class="btn btn-outline-info">See More</a>\n' +
        '                    </div>\n' +
        '                    \n' +
        '                </div>\n' +
        '  '
    )
    productCardFragment.append(newProductDivTag)

}
window.addEventListener('load',productCardPrepare)