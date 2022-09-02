const wrapper = document.querySelector(".Slider_Wrapper")
const Menu_Item = document.querySelectorAll(".Menu_Item")

Menu_Item.forEach((item,index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

