let product = document.getElementById("product");




let arr =[
    {
        "id":1,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000480681-1_288x288.jpg?v=1675404727",
        "brand" : "SkinCeuticals",
        "name" : "Silymarin CF",
        "price" : 182
    },
    {
        "id":2,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025016979-1_288x288.jpg?v=1672556251",
        "brand" : "PCA Skin",
        "name" : "Retinol Treatment for Sensitive Skin",
        "price" : "117"
    },
    {
        "id":3,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-4015165337645-1_288x288.jpg?v=1673630241",
        "brand" : "Dr. Barbara Sturm",
        "name" : "Hyaluronic Serum",
        "price" : "320"
    },
    {
        "id":4,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-633222211079-1_288x288.jpg?v=1678900870",
        "brand" : "RéVive",
        "name" : "Fermitif Neck Renewal Serum Firming",
        "price" : "195"
    },
    {
        "id":5,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30treatments-817237011774-1_288x288.jpg?v=1680789865",
        "brand" : "M-61",
        "name" : "PowerGlow Peel",
        "price" : "68"
    },
    {
        "id":6,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205022847-1_525x525.jpg?v=1680892415",
        "brand" : "ELTAMD",
        "name" : "UV Facial Broad-Spectrum SPF 30+",
        "price" : "32"
    },
    {
        "id":7,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060534510043-1_525x525.jpg?v=1675977386",
        "brand" : "THE LIGHT SALON",
        "name" : "Boost LED Mask",
        "price" : "495"
    },
    {
        "id":8,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817244010234-1_288x288.jpg?v=1669025301",
        "brand" : "IS Clinical",
        "name" : "Cleansing Complex",
        "price" : "45"
    },
    {
        "id":9,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_288x288.jpg?v=1675401099",
        "brand" : "SkinCeuticals",
        "name" : "C E Ferulic",
        "price" : "182"
    },
    {
        "id":10,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-1oz-747930000020-1_288x288.jpg?v=1681239872",
        "brand" : "LA MER",
        "name" : "Crème de La Mer Face Cream",
        "price" : 100
    },
    {
        "id":11,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17floz50ml-5060552901892-1_288x288.jpg?v=1674683928",
        "brand" : "Augustinus Bader",
        "name" : "The Rich Cream",
        "price" : 180
    },
    {
        "id":12,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17floz50ml-816218022976-1_288x288.jpg?v=1681234163",
        "brand" : "Supergoop!",
        "name" : "Unseen Sunscreen SPF 40",
        "price" : 38
    },
    {
        "id":13,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-9353371000003-1_288x288.jpg?v=1668764368",
        "brand" : "ZitSticka",
        "name" : "Killa Kit Deep Zit Microdart Patch",
        "price" : 29
    },
    {
        "id":14,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-866655000471-1_288x288.jpg?v=1679346440",
        "brand" : "VINTNER'S DAUGHTER",
        "name" : "Active Renewal Cleanser",
        "price" : 98
    },
    {
        "id":15,
        "img":"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025013008-1_288x288.jpg?v=1681135311",
        "brand" : "PCA SKIN",
        "name" : "Intensive Brightening Treatment",
        "price" : "117"
    }
    
]
display(arr)

// display function START ***********
function display(data){
    product.innerHTML = null
    data.forEach((element,index)=>{
        // smart.innerHTML = null
        let cart = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src",element.img)
        let brand = document.createElement("h2")
        brand.textContent = element.brand

       
        let name = document.createElement("h4")
        name.textContent = element.name;
        let price = document.createElement("h5")

        price.textContent ="Rs"+" "+ element.price
       
        let btn = document.createElement("button")
        btn.textContent = "Add To Bag"
        btn.setAttribute("id","add")
        btn.addEventListener("click",function(){
                
            let CartArr = JSON.parse(localStorage.getItem("Bag-Items"))||[]
            CartArr.push({...element});
            localStorage.setItem("Bag-Items",JSON.stringify(CartArr))
            alert("Product Added To The Bag")
            
             
            
        })

        


        
        cart.append(img,brand,name,price,btn);
        product.append(cart)
    })
}



