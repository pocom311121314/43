// create a database
let db = {
    products: [

    {
        id : "1",
        title : "BOAT AIRPODS PRO (BLACK)",
        tag : "headphones headphone deep bass boat black all",
        category: "500",
        rating: "static/images/data-05.png",
        price : "299",
        image : "static/products/01.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_BOAT_AIRPODS_PRO_(BLACK)_₹299",
    },
    {
        id : "2",
        title : "BOAT AIRPODS PRO (GREEN-WHITE)",
        tag : "headphones headphone deep bass boat green white all",
        category: "500",
        rating: "static/images/data-04.png",
        price : "259",
        image : "static/products/02.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_BOAT_AIRPODS_PRO_(GREEN-WHITE)_₹259",
    },
    {
        id : "3",
        title : "BOAT AIRPODS PRO (RED)",
        tag : "headphones headphone deep bass boat red all",
        category: "500",
        rating: "static/images/data-03.png",
        price : "399",
        image : "static/products/03.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_BOAT_AIRPODS_PRO_(RED)_₹399",
    },
    {
        id : "4",
        title : "BOAT AIRPODS PRO (GREEN)",
        tag : "headphones headphone deep bass boat green all",
        category: "500",
        rating: "static/images/data-02.png",
        price : "359",
        image : "static/products/04.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_BOAT_AIRPODS_PRO_(GREEN)_₹359",
    },
    {
        id : "5",
        title : "BOAT AIRPODS WIRELESS (BLUE)",
        tag : "headphones headphone deep bass bluetooth wireless boat blue all",
        category: "500",
        rating: "static/images/data-01.png",
        price : "499",
        image : "static/products/05.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_BOAT_AIRPODS_WIRELESS_(BLUE)_₹499",
    },
    {
        id : "6",
        title : "boAt New AirPods Pro",
        tag : "headphones headphone deep bass bluetooth wireless boat black all",
        category: "500",
        rating: "static/images/data-05.png",
        price : "346",
        image : "static/products/06.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "7",
        title : "boAt New AirPods Pro",
        tag : "headphones headphone deep bass bluetooth wireless boat blue all",
        category: "199",
        rating: "static/images/data-05.png",
        price : "199",
        image : "static/products/07.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "8",
        title : "boAt New AirPods Pro with deep bass bluetooth 5.1",
        tag : "headphones headphone deep bass bluetooth wireless boat green all",
        category: "199",
        rating: "static/images/data-05.png",
        price : "199",
        image : "static/products/08.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "9",
        title : "boAt New AirPods Pro",
        tag : "headphones headphone deep bass bluetooth boat black all",
        category: "199",
        rating: "static/images/data-05.png",
        price : "199",
        image : "static/products/09.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "10",
        title : "boAt New AirPods Pro",
        tag : "headphones headphone deep bass bluetooth boat black all",
        category: "199",
        rating: "static/images/data-05.png",
        price : "199",
        image : "static/products/10.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "11",
        title : "boAt New AirPods Pro",
        tag : "headphones headphone deep bass bluetooth boat blue all",
        category: "5k",
        rating: "static/images/data-05.png",
        price : "3999",
        image : "static/products/11.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "12",
        title : "boAt New AirPods Pro with deep bass bluetooth 5.1",
        tag : "headphones headphone deep bass bluetooth boat black all",
        category: "5k",
        rating: "static/images/data-05.png",
        price : "3999",
        image : "static/products/12.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "13",
        title : "boAt Comfort Pro",
        tag : "headphones headphone deep bass boat black all",
        category: "5k",
        rating: "static/images/data-05.png",
        price : "3999",
        image : "static/products/13.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "14",
        title : "boAt Comfort Pro",
        tag : "headphones headphone deep bass boat white all",
        category: "5k",
        rating: "static/images/data-05.png",
        price : "3999",
        image : "static/products/14.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "15",
        title : "boAt Comfort Pro",
        tag : "headphones headphone deep bass bluetooth boat black 7.1 all",
        category: "5k",
        rating: "static/images/data-05.png",
        price : "4999",
        image : "static/products/15.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_sony_cx239",
    },
    {
        id : "16",
        title : "VIVO 5G 4_128 ",
        tag : "vivo 5G 4 4gb 4gbram 128 128gb 128gbrom 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles black all",
        category: "20k",
        rating: "static/images/data-05.png",
        price : "15,999",
        image : "static/products/16.webp",
        purchase :  "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_VIVO_5G_4_128_₹15,999",
    },
    {
        id : "17",
        title : "VIVO 5G 4_128",
        tag : "vivo 5G 4 4gb 4gbram 128 128gb 128gbrom 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles black all",
        category: "20k",
        rating: "static/images/data-05.png",
        price : "15,999",
        image : "static/products/17.webp",
        purchase :  "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_VIVO_5G_4_128_₹15,999",
    },
    {
        id : "18",
        title : "VIVO 5G 4_128",
        tag : "vivo 5G 4 4gb 4gbram 128 128gb 128gbrom 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles black all",
        category: "20k",
        rating: "static/images/data-05.png",
        price : "15,999",
        image : "static/products/18.webp",
        purchase :  "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_VIVO_5G_4_128_₹15,999",
    },
    {
        id : "19",
        title : "VIVO 5G 4_128",
        tag : "vivo 5G 4 4gb 4gbram 128 128gb 128gbrom 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles blue all",
        category: "20k",
        rating: "static/images/data-05.png",
        price : "15,999",
        image : "static/products/19.webp",
        purchase :   "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_VIVO_5G_4_128_₹15,999",
    },
    {
        id : "20",
        title : "VIVO 5G 4_128",
        tag : "vivo 5G 4 4gb 4gbram 128 128gb 128gbrom 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles gold all",
        category: "20k",
        rating: "static/images/data-05.png",
        price : "15,999",
        image : "static/products/20.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_VIVO_5G_4_128_₹15,999",
    },
    {
        id : "21",
        title : "APPLE IPHONE 14 ",
        tag : "apple iphone 5G 4 4gb 4gbram 128 128gb 128gbrom green 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles all",
        category: "80k",
        rating: "static/images/data-04.png",
        price : "79,999",
        image : "static/products/21.jpg",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_APPLE_IPHONE_14_₹79,999",
    },
    {
        id : "22",
        title : "APPLE IPHONE 14 ",
        tag : "apple iphone 5G 4 4gb 4gbram 128 128gb 128gbrom blue 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles all",
        category: "80k",
        rating: "static/images/data-04.png",
        price : "79,999",
        image : "static/products/22.jpg",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_APPLE_IPHONE_14_₹79,999",
    },
    {
        id : "23",
        title : "APPLE IPHONE 14 ",
        tag : "apple iphone 5G 4 4gb 4gbram 128 128gb 128gbrom white 5g  smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles all",
        category: "80k",
        rating: "static/images/data-04.png",
        price : "79,999",
        image : "static/products/23.jpg",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_APPLE_IPHONE_14_₹79,999",
    },
    {
        id : "24",
        title : "APPLE IPHONE 14 ",
        tag : "apple iphone 5G 4 4gb 4gbram 128 128gb 128gbrom black 5g smartphone smartphones smart phone phones mobilephone mobilephones mobile mobiles all",
        category: "80k",
        rating: "static/images/data-04.png",
        price : "79,999",
        image : "static/products/24.jpg",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_APPLE_IPHONE_14_₹79,999",
    },
    {
        id : "25",
        title : "BOAT BLUETOOTH STEREO SOUND ",
        tag : "boat bluetooth stereo speaker all",
        category: "1k",
        rating: "static/images/data-04.png",
        price : "2999",
        image : "static/products/25.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_JBL_BLUETOOTH_STEREO_SOUND_₹2999",
    },
    {
        id : "26",
        title : "boat BLUETOOTH STEREO SOUND",
        tag : "boat bluetooth stereo speaker all",
        category: "1k",
        rating: "static/images/data-04.png",
        price : "2999",
        image : "static/products/26.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_JBL_BLUETOOTH_STEREO_SOUND_₹2999",
    },
    {
        id : "27",
        title : "boat BLUETOOTH STEREO SOUND",
        tag : "boat bluetooth stereo speaker all",
        category: "1k",
        rating: "static/images/data-04.png",
        price : "2999",
        image : "static/products/27.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_JBL_BLUETOOTH_STEREO_SOUND_₹2999",
    },
    {
        id : "28",
        title : "boat BLUETOOTH STEREO SOUND",
        tag : "boat bluetooth stereo speaker all",
        category: "1k",
        rating: "static/images/data-04.png",
        price : "2999",
        image : "static/products/28.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_JBL_BLUETOOTH_STEREO_SOUND_₹2999",
    },
    {
        id : "29",
        title : "REDMI NOISE FIT WITH VDO CALL",
        tag : "redmi smartwatch smartwatches watches smart watch bluetooth blue all",
        category: "10k",
        rating: "static/images/data-04.png",
        price : "6999",
        image : "static/products/29.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_REDMI_NOISE_FIT_WITH_VDO_CALL_₹6999",
    },
    {
        id : "30",
        title : "REDMI NOISE FIT WITH VDO CALL",
        tag : "redmi smartwatch smartwatches watches smart watch bluetooth black all",
        category: "10k",
        rating: "static/images/data-04.png",
        price : "6999",
        image : "static/products/30.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_REDMI_NOISE_FIT_WITH_VDO_CALL_₹6999",
    },
    {
        id : "31",
        title : "REDMI NOISE FIT WITH VDO CALL",
        tag : "redmi smartwatch smartwatches watches smart watch bluetooth black all",
        category: "10k",
        rating: "static/images/data-03.png",
        price : "6999",
        image : "static/products/31.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_REDMI_NOISE_FIT_WITH_VDO_CALL_₹6999",
    },
    {
        id : "32",
        title : "REDMI NOISE FIT WITH VDO CALL",
        tag : "redmi smartwatch smartwatches watches smart watch bluetooth red all",
        category: "10k",
        rating: "static/images/data-03.png",
        price : "6999",
        image : "static/products/32.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_REDMI_NOISE_FIT_WITH_VDO_CALL_₹6999",
    },
    {
        id : "33",
        title : "HP GAMING VICTUS",
        tag : "hp laptop laptops rog gaming 1 1tb 1tbssd i7 16 16gb 16gbram all",
        category: "50k",
        rating: "static/images/data-03.png",
        price : "45,999",
        image : "static/products/33.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_HP_GAMING_VICTUS_₹45,999",
    },
    {
        id : "34",
        title : "HP GAMING VICTUS PRO",
        tag : "hp laptop laptops rog gaming 1 1tb 1tbssd i7 16 16gb 16gbram all",
        category: "80k",
        rating: "static/images/data-03.png",
        price : "65,999",
        image : "static/products/34.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_HP_GAMING_VICTUS_PRO_₹65,999",
    },
    {
        id : "35",
        title : "HP GAMING VICTUS ROG",
        tag : "hp laptop laptops rog gaming 1 1tb 1tbssd i7 16 16gb 16gbram all",
        category: "50k",
        rating: "static/images/data-03.png",
        price : "45,999",
        image : "static/products/35.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_HP_GAMING_VICTUS_ROG_₹45,999",
    },
    {
        id : "36",
        title : "DELL G15 i5 12 GEN",
        tag : "dell laptop laptops rog gaming 1 1tb 1tbssd i5 16 16gb 16gbram all",
        category: "100k",
        rating: "static/images/data-03.png",
        price : "95,999",
        image : "static/products/36.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_DELL_G15_I5_12_GEN_₹95,999",
    },
    {
        id : "37",
        title : "DELL G15 i5 12 GEN",
        tag : "dell laptop laptops rog gaming 1 1tb 1tbssd i5 16 16gb 16gbram all",
        category: "100k",
        rating: "static/images/data-03.png",
        price : "95,999",
        image : "static/products/37.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_DELL_G15_I5_12_GEN_₹95,999",
    },
    {
        id : "38",
        title : "DELL G15 i5 12 GEN",
        tag : "dell laptop laptops rog gaming 1 1tb 1tbssd i5 16 16gb 16gbram all",
        category: "100k",
        rating: "static/images/data-03.png",
        price : "95,999",
        image : "static/products/38.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_DELL_G15_I5_12_GEN_₹95,999",
    },
    {
        id : "39",
        title : "DELL G15 i5 12 GEN",
        tag : "dell laptop laptops rog gaming 1 1tb 1tbssd i5 16 16gb 16gbram all",
        category: "100k",
        rating: "static/images/data-03.png",
        price : "95,999",
        image : "static/products/39.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_DELL_G15_I5_12_GEN_₹95,999",
    },
    {
        id : "40",
        title : "DELL G15 i5 12 GEN",
        tag : "dell laptop laptops rog gaming 1 1tb 1tbssd i5 16 16gb 16gbram all",
        category: "100k",
        rating: "static/images/data-03.png",
        price : "95,999",
        image : "static/products/40.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_DELL_G15_I5_12_GEN_₹95,999",
    },
    {
        id : "41",
        title : "LENOVO IDEAPAD GAMING i5 11 GEN",
        tag : "lenovo laptop laptops student 256 256gb 256gbssd i5 4 4gb 4gbram all",
        category: "80k",
        rating: "static/images/data-02.png",
        price : "55,999",
        image : "static/products/41.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_LENOVO_IDEAPAD_GAMING_I5_11_GEN_₹55,999",
    },
    {
        id : "42",
        title : "LENOVO IDEAPAD GAMING i5 11 GEN",
        tag : "lenovo laptop laptops student 256 256gb 256gbssd i5 4 4gb 4gbram all",
        category: "80k",
        rating: "static/images/data-02.png",
        price : "55,999",
        image : "static/products/42.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_LENOVO_IDEAPAD_GAMING_I5_11_GEN_₹55,999",
    },
    {
        id : "43",
        title : "LENOVO IDEAPAD GAMING i5 11 GEN",
        tag : "lenovo laptop laptops student 256 256gb 256gbssd i5 4 4gb 4gbram all",
        category: "80k",
        rating: "static/images/data-02.png",
        price : "55,999",
        image : "static/products/43.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_LENOVO_IDEAPAD_GAMING_I5_11_GEN_₹55,999",
    },
    {
        id : "44",
        title : "LENOVO IDEAPAD GAMING i5 11 GEN",
        tag : "lenovo laptop laptops student 256 256gb 256gbssd i5 4 4gb 4gbram all",
        category: "100k",
        rating: "static/images/data-02.png",
        price : "95,999",
        image : "static/products/44.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_LENOVO_IDEAPAD_GAMING_I5_11_GEN_₹95,999",
    },
    {
        id : "45",
        title : "LENOVO IDEAPAD GAMING i5 11 GEN",
        tag : "lenovo laptop laptops student 256 256gb 256gbssd i5 4 4gb 4gbram all",
        category: "50k",
        rating: "static/images/data-02.png",
        price : "45,999",
        image : "static/products/45.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_LENOVO_IDEAPAD_GAMING_I5_11_GEN_₹45,999",
    },
    {
        id : "46",
        title : "LG 32 INCH LED SMART TV",
        tag : "lg 32 inch led smarttv smart tv all",
        category: "15k",
        rating: "static/images/data-01.png",
        price : "14,999",
        image : "static/products/46.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_LG_32_INCH_LED_SMART_TV_₹14,999",
    },
    {
        id : "47",
        title : "REALME 32 INCH SMART Android TV",
        tag : "realme 32 inch led smarttv smart tv android all",
        category: "20k",
        rating: "static/images/data-01.png",
        price : "15,999",
        image : "static/products/47.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_REALME_32_INCH_SMART_Android_TV_₹15,999",
    },
    {
        id : "48",
        title : "ONEPLUS Y1S 43 INCH SMART Android TV",
        tag : "oneplus 43 inch led smarttv smart tv android all",
        category: "20k",
        rating: "static/images/data-01.png",
        price : "19,999",
        image : "static/products/48.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_ONEPLUS_Y1S_43_INCH_SMART_Android_TV_₹19,999",
    },
    {
        id : "49",
        title : "MI 32 INCH SMART GOOGLE TV",
        tag : "mi 32 inch led smarttv smart tv google all",
        category: "15k",
        rating: "static/images/data-01.png",
        price : "14,999",
        image : "static/products/49.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_MI_32_INCH_SMART_GOOGLE_TV_₹14,999",
    },
    {
        id : "50",
        title : "SAMSUNG CRYSTAL SMART TIZEN TV",
        tag : "samsung 32 inch led smarttv smart tv tizen all",
        category: "15k",
        rating: "static/images/data-01.png",
        price : "13,999",
        image : "static/products/50.webp",
        purchase : "https://api.whatsapp.com/send?phone=918597208868&text=i_want_to_buy_SAMSUNG_CRYSTAL_SMART_TIZEN_TV_₹13,999",
    },

  ],
};
// dynamic html
for (let i of db.products) {
  // Here let means open and appendChild() means close  
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("product-card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //image hyperlink
  let image1 = document.createElement("a");
  image1.setAttribute("href", i.purchase);
  image1.innerText = "" ;
  //img element
  let image2 = document.createElement("img");
  image2.setAttribute("src", i.image);
  image1.appendChild(image2);
  imgContainer.appendChild(image1);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product id
  let id = document.createElement("h6");
  id.innerText = "# " + i.id;
  container.appendChild(id);
  //product title
  let title = document.createElement("h4");
  title.classList.add("product-title");
  //title.innerText = i.title.toUpperCase();
  title.innerText = i.title;
  container.appendChild(title);
  //product tag
  let tag = document.createElement("h4");
  tag.classList.add("product-tag");
  tag.innerText = i.tag;
  container.appendChild(tag);
  //rating function
  let button2 = document.createElement("div");
  button2.classList.add("rating-container");
  //
  let rating1 = document.createElement("a");
  rating1.setAttribute("href", i.purchase);
  rating1.innerText = "" ;
  let rating2 = document.createElement("img");
  rating2.setAttribute("src", i.rating);
  rating2.setAttribute("height", "30px");
  rating2.setAttribute("width", "145px");
  rating1.appendChild(rating2); 
  button2.appendChild(rating1);
  container.appendChild(button2);
  //
  // product category
  //let category = document.createElement("h6");
  //category.innerText = i.category.toUpperCase();
  //container.appendChild(category);
  //price
  let price = document.createElement("h2");
  price.innerText = "₹ " + i.price;
  container.appendChild(price);
  card.appendChild(container);
  //purchase link
  //let purchase = document.createElement("a");
  //purchase.setAttribute("href", i.purchase);
  //purchase.innerText = "BUY NOW" ;
  //container.appendChild(purchase);
  
  //
  //let button1 = document.createElement("div");
  //button1.classList.add("image-container");
  //
  //let favourite1 = document.createElement("a");
  //favourite1.setAttribute("href", i.purchase);
  //favourite1.innerText = "" ;
  //let favourite2 = document.createElement("img");
  //favourite2.setAttribute("src", "./static/images/data-06.png");
  //favourite2.setAttribute("height", "35px");
  //favourite2.setAttribute("width", "110px");
  //favourite1.appendChild(favourite2); 
  //button1.appendChild(favourite1);
  //
  //let cart1 = document.createElement("a");
  //cart1.setAttribute("href", i.purchase);
  //cart1.innerText = "" ;
  //let cart2 = document.createElement("img");
  //cart2.setAttribute("src", "./static/images/data-07.png");
  //cart2.setAttribute("height", "35px");
  //cart2.setAttribute("width", "110px");
  //cart1.appendChild(cart2); 
  //button1.appendChild(cart1);
  //
  //let buy1 = document.createElement("a");
  //buy1.setAttribute("href", i.purchase);
  //buy1.innerText = "" ;
  //let buy2 = document.createElement("img");
  //buy2.setAttribute("src", "./static/images/data-08.png");
  //buy2.setAttribute("height", "45px");
  //buy2.setAttribute("width", "140px");
  //buy1.appendChild(buy2); 
  //button1.appendChild(buy1);
  //
  //card.appendChild(button1);
  document.getElementById("product-cards").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".product-card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-tag");
  
  let cards = document.querySelectorAll(".product-card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if ((element.innerText.split(/\s/)).includes(searchInput.toLowerCase().replace(/\s/g,''))) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
//window.onload = () => {
//  filterProduct("all");
//};
